const ENDPOINT = 'https://api.github.com/graphql';
const ATTEMPTS = 3;

const CALENDAR = 'contributionCalendar { weeks { contributionDays { date contributionCount } } }';

const USER = `query ($login: String!, $yearStart: DateTime!) {
  user(login: $login) {
    name
    login
    pullRequests { totalCount }
    thisYear: contributionsCollection(from: $yearStart) {
      totalCommitContributions
      restrictedContributionsCount
    }
    contributionsCollection {
      contributionYears
      ${CALENDAR}
    }
  }
}`;

const REPOS = `query ($login: String!, $after: String) {
  user(login: $login) {
    repositories(ownerAffiliations: OWNER, isFork: false, first: 100, after: $after) {
      pageInfo { hasNextPage endCursor }
      nodes {
        stargazerCount
        languages(first: 20, orderBy: { field: SIZE, direction: DESC }) {
          edges { size node { name color } }
        }
      }
    }
  }
}`;

// Retries transient failures so one slow response doesn't skip a refresh
async function graphql(token, query, variables) {
  for (let attempt = 1; ; attempt++) {
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: {
        authorization: `bearer ${token}`,
        'content-type': 'application/json',
        'user-agent': 'profile-cards',
      },
      body: JSON.stringify({ query, variables }),
    });
    const body = await res.json().catch(() => ({}));
    if (res.ok && !body.errors) return body.data;
    if (attempt === ATTEMPTS) {
      throw new Error(`GitHub GraphQL ${res.status}: ${JSON.stringify(body.errors ?? body)}`);
    }
    await new Promise((resolve) => setTimeout(resolve, attempt * 2000));
  }
}

const toDays = (calendar) =>
  calendar.weeks.flatMap((week) =>
    week.contributionDays.map((day) => ({ date: day.date, count: day.contributionCount })),
  );

export async function fetchUser(token, login, year) {
  const { user } = await graphql(token, USER, { login, yearStart: `${year}-01-01T00:00:00Z` });
  if (!user) throw new Error(`GitHub user ${login} not found`);
  return {
    name: user.name || user.login,
    pullRequests: user.pullRequests.totalCount,
    // Private contributions count as commits, like the old stats card's count_private
    commitsThisYear:
      user.thisYear.totalCommitContributions + user.thisYear.restrictedContributionsCount,
    contributionYears: user.contributionsCollection.contributionYears,
    lastYear: toDays(user.contributionsCollection.contributionCalendar),
  };
}

export async function fetchRepos(token, login) {
  const repos = [];
  let after = null;
  do {
    const { user } = await graphql(token, REPOS, { login, after });
    const page = user.repositories;
    repos.push(...page.nodes);
    after = page.pageInfo.hasNextPage ? page.pageInfo.endCursor : null;
  } while (after);
  return repos;
}

// One calendar per contribution year, so streaks and totals span the whole history
export async function fetchCalendars(token, login, years) {
  const fields = years
    .map(
      (year) =>
        `y${year}: contributionsCollection(from: "${year}-01-01T00:00:00Z", ` +
        `to: "${year}-12-31T23:59:59Z") { ${CALENDAR} }`,
    )
    .join('\n');
  const query = `query ($login: String!) { user(login: $login) { ${fields} } }`;
  const { user } = await graphql(token, query, { login });
  return Object.values(user).flatMap((collection) => toDays(collection.contributionCalendar));
}
