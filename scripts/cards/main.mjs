// Builds the profile cards: node scripts/cards/main.mjs [outDir]
// GH_TOKEN reads public data; a token from the profile owner adds private repos.
import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { buildModel } from './model.mjs';
import { THEMES, activityCard, languagesCard, statsCard, streakCard } from './render.mjs';

const LOGIN = process.env.CARDS_USER ?? process.env.GITHUB_REPOSITORY_OWNER ?? 'vovod';
const PROFILE = {
  rank: 'SSS',
  tagline: 'Creator of Review Trường',
  // Kept off the languages card, as the old stats card did with hide=c++
  excludeLanguages: ['C++'],
};

const token = process.env.GH_TOKEN;
if (!token) throw new Error('Set GH_TOKEN to a GitHub token');
const outDir = process.argv[2] ?? 'dist';

const model = await buildModel(token, LOGIN, PROFILE);

// One file per card and color mode; the README picks the mode with <picture>
await mkdir(outDir, { recursive: true });
for (const [mode, theme] of Object.entries(THEMES)) {
  const cards = {
    streak: streakCard(model, theme),
    stats: statsCard(model, theme, PROFILE),
    languages: languagesCard(model, theme),
    activity: activityCard(model, theme),
  };
  await Promise.all(
    Object.entries(cards).map(([name, svg]) => writeFile(join(outDir, `${name}-${mode}.svg`), svg)),
  );
}
console.log(`Cards for ${LOGIN} written to ${outDir}`);
