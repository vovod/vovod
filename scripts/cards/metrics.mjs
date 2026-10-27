// Merges overlapping calendars into one ascending list of days up to `today`
export function history(calendars, today) {
  const byDate = new Map();
  for (const day of calendars.flat()) {
    if (day.date <= today) byDate.set(day.date, day.count);
  }
  return [...byDate]
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([date, count]) => ({ date, count }));
}

export function streaks(days) {
  let longest = { length: 0 };
  let run = null;
  for (const day of days) {
    if (day.count === 0) {
      run = null;
      continue;
    }
    run = run
      ? { ...run, end: day.date, length: run.length + 1 }
      : { start: day.date, end: day.date, length: 1 };
    if (run.length > longest.length) longest = run;
  }

  // Today without contributions yet doesn't break the current streak
  let i = days.length - 1;
  if (days[i]?.count === 0) i--;
  let current = { length: 0 };
  for (; i >= 0 && days[i].count > 0; i--) {
    current = { start: days[i].date, end: current.end ?? days[i].date, length: current.length + 1 };
  }
  return { current, longest };
}

// Ranks by sqrt(bytes) * sqrt(repos) so one heavy repo (notebooks, vendored code)
// can't drown out languages used across many projects
export function languages(repos, { exclude = [], top = 6 } = {}) {
  const byName = new Map();
  for (const repo of repos) {
    for (const { size, node } of repo.languages.edges) {
      if (exclude.includes(node.name)) continue;
      const entry = byName.get(node.name) ?? {
        name: node.name,
        color: node.color,
        size: 0,
        repos: 0,
      };
      entry.size += size;
      entry.repos += 1;
      byName.set(node.name, entry);
    }
  }

  const shown = [...byName.values()]
    .map((entry) => ({ ...entry, score: Math.sqrt(entry.size * entry.repos) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, top);
  const total = shown.reduce((sum, entry) => sum + entry.score, 0);
  return shown.map((entry) => ({
    name: entry.name,
    color: entry.color ?? '#858585',
    share: entry.score / total,
  }));
}
