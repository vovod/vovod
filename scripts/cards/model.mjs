import { fetchCalendars, fetchRepos, fetchUser } from './github.mjs';
import { history, languages, streaks } from './metrics.mjs';

// Everything the cards show, fetched and derived in one place
export async function buildModel(token, login, { excludeLanguages = [] } = {}) {
  const year = new Date().getUTCFullYear();
  const user = await fetchUser(token, login, year);
  const [repos, yearDays] = await Promise.all([
    fetchRepos(token, login),
    fetchCalendars(token, login, user.contributionYears),
  ]);

  const today = user.lastYear.at(-1).date;
  const days = history([yearDays, user.lastYear], today);
  return {
    name: user.name,
    year,
    today,
    total: days.reduce((sum, d) => sum + d.count, 0),
    firstDay: days.find((d) => d.count > 0)?.date ?? today,
    ...streaks(days),
    stars: repos.reduce((sum, repo) => sum + repo.stargazerCount, 0),
    commits: user.commitsThisYear,
    prs: user.pullRequests,
    languages: languages(repos, { exclude: excludeLanguages }),
    recent: days.slice(-31),
  };
}
