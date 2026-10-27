// Everything personal on the cards. Achievement links live in README.md, next to each tile.
export const PROFILE = {
  // 'neon' or 'gold', each with a dark and a light version
  palette: 'neon',
  rank: 'SSS',
  tagline: 'Creator of Review Trường',
  // Kept off the languages card, as the old stats card did with hide=c++
  excludeLanguages: ['C++'],
  achievements: [
    { id: 'hacktoberfest', icon: 'trophy', eyebrow: 'HACKTOBERFEST 2023', title: 'Hall of Fame' },
    { id: 'tree-nation', icon: 'leaf', eyebrow: 'TREE-NATION', title: 'Tree Certificate' },
    { id: 'fcc-web', icon: 'cap', eyebrow: 'FREECODECAMP', title: 'Responsive Web Design' },
    {
      id: 'fcc-js',
      icon: 'cap',
      eyebrow: 'FREECODECAMP',
      title: 'JS Algorithms & Data Structures',
    },
  ],
};
