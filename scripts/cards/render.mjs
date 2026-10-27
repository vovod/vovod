const FONT = `'Segoe UI', Ubuntu, 'Helvetica Neue', Helvetica, Arial, sans-serif`;
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// Royal Gold, stepped for each GitHub color mode. Gradient stops run light to dark;
// on the light surface the golds go deeper so text keeps its contrast.
export const THEMES = {
  dark: {
    bg: ['#1d1726', '#0a090f'],
    glow: ['#f5c451', '#7c4dff'],
    border: ['#fff1c1', '#c8912e', '#5b4419'],
    text: '#f7f0dc',
    muted: '#a89f88',
    accent: ['#fff1c1', '#f5c451', '#c8912e'],
    hot: ['#fff6d6', '#ffcf5a', '#e08a1e'],
    highlight: '#ffcf5a',
    ring: ['#fff6d6', '#f5c451', '#a86f1c', '#ffe7a3'],
    rank: ['#fffaf0', '#f5c451', '#a86f1c'],
    icon: '#f5c451',
  },
  light: {
    bg: ['#fffdf8', '#f5eddc'],
    glow: ['#f5c451', '#9b87f5'],
    border: ['#ecd08a', '#c8912e', '#8a6420'],
    text: '#2b2418',
    muted: '#7d7260',
    accent: ['#c8912e', '#a86f1c', '#7a4f12'],
    hot: ['#f2b53c', '#e08a1e', '#a8560e'],
    highlight: '#a8560e',
    ring: ['#f5c451', '#c8912e', '#8a6420', '#e9c46a'],
    rank: ['#e8b54a', '#a86f1c', '#5e3d0b'],
    icon: '#b07a1f',
  },
};

// Octicons (MIT): star, history, git-pull-request
const ICONS = {
  star: 'M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z',
  history:
    'M1.643 3.143L.427 1.927A.25.25 0 000 2.104V5.75c0 .138.112.25.25.25h3.646a.25.25 0 00.177-.427L2.715 4.215a6.5 6.5 0 11-1.18 4.458.75.75 0 10-1.493.154 8.001 8.001 0 101.6-5.684zM7.75 4a.75.75 0 01.75.75v2.992l2.028.812a.75.75 0 01-.557 1.392l-2.5-1A.75.75 0 017 8.25v-3.5A.75.75 0 017.75 4z',
  pr: 'M7.177 3.073L9.573.677A.25.25 0 0110 .854v4.792a.25.25 0 01-.427.177L7.177 3.427a.25.25 0 010-.354zM3.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122v5.256a2.251 2.251 0 11-1.5 0V5.372A2.25 2.25 0 011.5 3.25zM11 2.5h-1V4h1a1 1 0 011 1v5.628a2.251 2.251 0 101.5 0V5A2.5 2.5 0 0011 2.5zm1 10.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0zM3.75 12a.75.75 0 100 1.5.75.75 0 000-1.5z',
};

// Flame from github-readme-streak-stats (MIT), drawn around its own origin
const FIRE =
  'M 1.5 0.67 C 1.5 0.67 2.24 3.32 2.24 5.47 C 2.24 7.53 0.89 9.2 -1.17 9.2 C -3.23 9.2 -4.79 7.53 -4.79 5.47 L -4.76 5.11 C -6.78 7.51 -8 10.62 -8 13.99 C -8 18.41 -4.42 22 0 22 C 4.42 22 8 18.41 8 13.99 C 8 8.6 5.41 3.79 1.5 0.67 Z M -0.29 19 C -2.07 19 -3.51 17.6 -3.51 15.86 C -3.51 14.24 -2.46 13.1 -0.7 12.74 C 1.07 12.38 2.9 11.53 3.92 10.16 C 4.31 11.45 4.51 12.81 4.51 14.2 C 4.51 16.85 2.36 19 -0.29 19 Z';
const CROWN = 'M-12 7L-13.5-5.5L-6.5 0.5L0-9.5L6.5 0.5L13.5-5.5L12 7Z M-12 9.5H12V12.5H-12Z';
const SPARKLE = 'M0-6L1.4-1.4L6 0L1.4 1.4L0 6L-1.4 1.4L-6 0L-1.4-1.4Z';

const esc = (value) => String(value).replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);
const r2 = (n) => Math.round(n * 100) / 100;
const num = (n) => n.toLocaleString('en-US');
const stops = (colors) =>
  colors
    .map((c, i) => `<stop offset="${r2(i / (colors.length - 1))}" stop-color="${c}"/>`)
    .join('');

// "Oct 26" this year, "Mar 23, 2022" otherwise
function day(iso, today) {
  const [year, month, date] = iso.split('-').map(Number);
  const withYear = iso.slice(0, 4) !== today.slice(0, 4);
  return `${MONTHS[month - 1]} ${date}${withYear ? `, ${year}` : ''}`;
}

const span = ({ start, end }, today) =>
  start === end ? day(start, today) : `${day(start, today)} – ${day(end, today)}`;

// 1-2-5 steps, never below 1 since contributions are whole numbers
function niceStep(raw) {
  const power = 10 ** Math.floor(Math.log10(raw));
  const fraction = raw / power;
  const nice = fraction <= 1 ? 1 : fraction <= 2 ? 2 : fraction <= 5 ? 5 : 10;
  return Math.max(1, nice * power);
}

// Monotone cubic through evenly spaced points: smooth, and never dips below zero
function monotonePath(points) {
  const n = points.length;
  const dx = points[1].x - points[0].x;
  const delta = points.slice(1).map((p, i) => (p.y - points[i].y) / dx);
  const m = points.map((_, i) => {
    if (i === 0) return delta[0];
    if (i === n - 1) return delta[n - 2];
    return delta[i - 1] * delta[i] <= 0 ? 0 : (delta[i - 1] + delta[i]) / 2;
  });
  for (let i = 0; i < n - 1; i++) {
    if (delta[i] === 0) {
      m[i] = 0;
      m[i + 1] = 0;
      continue;
    }
    const a = m[i] / delta[i];
    const b = m[i + 1] / delta[i];
    const s = a * a + b * b;
    if (s > 9) {
      m[i] = (3 / Math.sqrt(s)) * a * delta[i];
      m[i + 1] = (3 / Math.sqrt(s)) * b * delta[i];
    }
  }

  let d = `M${r2(points[0].x)},${r2(points[0].y)}`;
  for (let i = 0; i < n - 1; i++) {
    const p = points[i];
    const q = points[i + 1];
    d +=
      `C${r2(p.x + dx / 3)},${r2(p.y + (m[i] * dx) / 3)} ` +
      `${r2(q.x - dx / 3)},${r2(q.y - (m[i + 1] * dx) / 3)} ${r2(q.x)},${r2(q.y)}`;
  }
  return d;
}

// Shared frame: gradient surface, two corner glows, a faint dot texture and a gradient border
function card({ w, h, t, label, style = '', motion = '', defs = '', body }) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" fill="none" role="img" aria-label="${esc(label)}">
<title>${esc(label)}</title>
<style>
text { font-family: ${FONT}; }
${style}
@media (prefers-reduced-motion: no-preference) {
  .fade { animation: fade 0.7s ease-out both; }
  @keyframes fade { from { opacity: 0; } }
  ${motion}
}
</style>
<defs>
<linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">${stops(t.bg)}</linearGradient>
<linearGradient id="border" x1="0" y1="0" x2="1" y2="1">${stops(t.border)}</linearGradient>
<linearGradient id="accent" x1="0" y1="0" x2="1" y2="0">${stops(t.accent)}</linearGradient>
<linearGradient id="hot" x1="0" y1="0" x2="0" y2="1">${stops(t.hot)}</linearGradient>
<radialGradient id="glow-a"><stop offset="0" stop-color="${t.glow[0]}" stop-opacity="0.32"/><stop offset="1" stop-color="${t.glow[0]}" stop-opacity="0"/></radialGradient>
<radialGradient id="glow-b"><stop offset="0" stop-color="${t.glow[1]}" stop-opacity="0.2"/><stop offset="1" stop-color="${t.glow[1]}" stop-opacity="0"/></radialGradient>
<pattern id="dots" width="14" height="14" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r="0.8" fill="${t.text}" fill-opacity="0.07"/></pattern>
<filter id="soft" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="2.5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
<clipPath id="card"><rect width="${w}" height="${h}" rx="14"/></clipPath>
${defs}
</defs>
<g clip-path="url(#card)">
<rect width="${w}" height="${h}" fill="url(#bg)"/>
<rect width="${w}" height="${h}" fill="url(#dots)"/>
<circle cx="${w}" cy="0" r="${h}" fill="url(#glow-a)"/>
<circle cx="0" cy="${h}" r="${r2(h * 0.9)}" fill="url(#glow-b)"/>
${body}
</g>
<rect x="0.75" y="0.75" width="${w - 1.5}" height="${h - 1.5}" rx="13.25" stroke="url(#border)" stroke-opacity="0.75" stroke-width="1.5"/>
</svg>
`;
}

export function streakCard(m, t) {
  const column = (
    x,
    value,
    label,
    range,
    delay,
  ) => `<g class="fade" style="animation-delay:${delay}s">
<text class="big" x="${x}" y="88" text-anchor="middle" fill="url(#accent)">${num(value)}</text>
<text class="caps" x="${x}" y="118" text-anchor="middle">${label}</text>
<text class="range" x="${x}" y="144" text-anchor="middle">${esc(range)}</text>
</g>`;
  const divider = (x) =>
    `<line x1="${x}" y1="34" x2="${x}" y2="162" stroke="url(#divider)" stroke-width="1"/>`;
  const current = m.current.length ? span(m.current, m.today) : day(m.today, m.today);

  return card({
    w: 495,
    h: 195,
    t,
    label: `${num(m.total)} total contributions, current streak ${m.current.length}, longest streak ${m.longest.length}`,
    style: `.big { font-size: 30px; font-weight: 800; letter-spacing: -0.5px; }
.caps { font-size: 10px; font-weight: 700; letter-spacing: 1.2px; fill: ${t.muted}; }
.range { font-size: 12px; fill: ${t.text}; }
.streak { font-size: 34px; font-weight: 800; }`,
    motion: `.pop { animation: pop 0.7s cubic-bezier(0.3, 1.6, 0.5, 1) both; }
  .flicker { transform-box: fill-box; transform-origin: 50% 100%; animation: flicker 1.8s ease-in-out infinite alternate; }
  .halo { transform-box: fill-box; transform-origin: center; animation: halo 3s ease-in-out infinite; }
  @keyframes pop { from { font-size: 4px; opacity: 0; } }
  @keyframes flicker { 50% { transform: scale(0.93, 1.07); } 100% { transform: scale(1.04, 0.96); } }
  @keyframes halo { 50% { opacity: 0.35; } }`,
    defs: `<linearGradient id="divider" x1="0" y1="34" x2="0" y2="162" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="${t.muted}" stop-opacity="0"/><stop offset="0.5" stop-color="${t.muted}" stop-opacity="0.6"/><stop offset="1" stop-color="${t.muted}" stop-opacity="0"/></linearGradient>
<linearGradient id="ring" x1="0" y1="0" x2="1" y2="1">${stops(t.ring)}</linearGradient>
<mask id="flame-gap"><rect width="495" height="195" fill="white"/><ellipse cx="247.5" cy="30" rx="14" ry="18" fill="black"/></mask>`,
    body: `${divider(165)}
${divider(330)}
${column(82.5, m.total, 'TOTAL CONTRIBUTIONS', `${day(m.firstDay, m.today)} – Present`, 0.5)}
<g class="fade" style="animation-delay:0.2s" mask="url(#flame-gap)">
<circle class="halo" cx="247.5" cy="74" r="42" stroke="url(#ring)" stroke-width="10" stroke-opacity="0.18"/>
<circle cx="247.5" cy="74" r="42" stroke="url(#ring)" stroke-width="5" filter="url(#soft)"/>
</g>
<g class="fade" style="animation-delay:0.4s" transform="translate(247.5 15)"><g class="flicker"><path fill="url(#hot)" filter="url(#soft)" d="${FIRE}"/></g></g>
<text class="streak pop" x="247.5" y="86" text-anchor="middle" fill="url(#hot)" filter="url(#soft)">${num(m.current.length)}</text>
<g class="fade" style="animation-delay:0.7s">
<text class="caps" x="247.5" y="140" text-anchor="middle" style="fill:${t.highlight}">CURRENT STREAK</text>
<text class="range" x="247.5" y="164" text-anchor="middle">${esc(current)}</text>
</g>
${column(412.5, m.longest.length, 'LONGEST STREAK', m.longest.length ? span(m.longest, m.today) : '–', 0.9)}`,
  });
}

export function statsCard(m, t, { rank, tagline }) {
  const cx = 398;
  const cy = 90;
  const r = 46;
  const circumference = r2(2 * Math.PI * r);
  const top = tagline ? 90 : 76;
  const rows = [
    { icon: ICONS.star, label: 'Total Stars Earned', value: m.stars },
    { icon: ICONS.history, label: `Total Commits (${m.year})`, value: m.commits },
    { icon: ICONS.pr, label: 'Total PRs', value: m.prs },
  ].map(
    (row, i) => `<g class="fade" style="animation-delay:${r2(0.3 + i * 0.12)}s">
<svg x="28" y="${top + i * 26 - 12.5}" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" fill="${t.icon}" d="${row.icon}"/></svg>
<text class="stat" x="54" y="${top + i * 26}">${row.label}</text>
<text class="value" x="236" y="${top + i * 26}" fill="url(#accent)">${num(row.value)}</text>
</g>`,
  );
  const sparkles = [
    [cx - 54, cy - 36, 1, 0],
    [cx + 52, cy - 30, 0.7, 0.8],
    [cx + 56, cy + 32, 0.6, 1.6],
    [cx - 58, cy + 30, 0.75, 1.2],
  ].map(
    ([x, y, scale, delay]) =>
      `<g transform="translate(${x} ${y}) scale(${scale})"><path class="twinkle" style="animation-delay:${delay}s" fill="${t.hot[0]}" d="${SPARKLE}"/></g>`,
  );

  return card({
    w: 495,
    h: 165,
    t,
    label: `${m.name}'s GitHub Stats, Rank: ${rank}`,
    style: `.title { font-size: 18px; font-weight: 700; }
.tagline { font-size: 12px; fill: ${t.muted}; }
.stat { font-size: 14px; font-weight: 600; fill: ${t.text}; }
.value { font-size: 14px; font-weight: 800; }
.rank { font-size: 30px; font-weight: 900; letter-spacing: 1px; }`,
    motion: `.draw { animation: draw 1.4s cubic-bezier(0.2, 0.8, 0.2, 1) both; }
  .spin { transform-box: view-box; transform-origin: ${cx}px ${cy}px; animation: spin 7s linear infinite; }
  .orbit { transform-box: view-box; transform-origin: ${cx}px ${cy}px; animation: spin 30s linear infinite reverse; }
  .twinkle { transform-box: fill-box; transform-origin: center; animation: twinkle 2.4s ease-in-out infinite; }
  .bob { animation: bob 2.2s ease-in-out infinite alternate; }
  .rank { transform-box: fill-box; transform-origin: center; animation: rank 0.6s cubic-bezier(0.3, 1.6, 0.5, 1) 0.5s both; }
  @keyframes draw { from { stroke-dashoffset: ${circumference}; } to { stroke-dashoffset: 0; } }
  @keyframes spin { to { transform: rotate(360deg); } }
  @keyframes twinkle { 0%, 100% { opacity: 0.2; transform: scale(0.5); } 50% { opacity: 1; transform: scale(1); } }
  @keyframes bob { to { transform: translateY(-2px); } }
  @keyframes rank { from { opacity: 0; transform: scale(0.3); } }`,
    defs: `<linearGradient id="ring" x1="0" y1="0" x2="1" y2="1">${stops(t.ring)}</linearGradient>
<linearGradient id="rank" x1="0" y1="0" x2="0" y2="1">${stops(t.rank)}</linearGradient>
<mask id="crown-gap"><rect width="495" height="165" fill="white"/><ellipse cx="${cx}" cy="${cy - r}" rx="18" ry="14" fill="black"/></mask>`,
    body: `<text class="title fade" x="28" y="40" fill="url(#accent)">${esc(m.name)}'s GitHub Stats</text>
${tagline ? `<text class="tagline fade" x="28" y="60">${esc(tagline)}</text>` : ''}
${rows.join('\n')}
<circle class="orbit" cx="${cx}" cy="${cy}" r="${r + 11}" stroke="${t.accent[1]}" stroke-opacity="0.55" stroke-width="1.6" stroke-linecap="round" stroke-dasharray="0.1 7"/>
<g mask="url(#crown-gap)">
<circle cx="${cx}" cy="${cy}" r="${r}" stroke="${t.text}" stroke-opacity="0.08" stroke-width="7"/>
<g class="spin"><circle class="draw" cx="${cx}" cy="${cy}" r="${r}" stroke="url(#ring)" stroke-width="7" stroke-linecap="round" stroke-dasharray="${circumference}" filter="url(#soft)"/></g>
</g>
<g transform="translate(${cx} ${cy - r})"><g class="bob"><path fill="url(#hot)" filter="url(#soft)" d="${CROWN}"/></g></g>
${sparkles.join('\n')}
<text class="rank" x="${cx}" y="${cy + 1}" text-anchor="middle" dominant-baseline="central" fill="url(#rank)" filter="url(#soft)">${esc(rank)}</text>`,
  });
}

export function languagesCard(m, t) {
  const langs = m.languages;
  const half = Math.ceil(langs.length / 2);
  const gap = 3;
  const width = 294 - gap * (langs.length - 1);
  let cursor = 28;
  const segments = langs.map((lang) => {
    const w = lang.share * width;
    const x = cursor;
    cursor += w + gap;
    return `<rect x="${r2(x)}" y="56" width="${r2(w)}" height="10" rx="${r2(Math.min(5, w / 2))}" fill="${lang.color}"/>`;
  });
  const legend = langs.map((lang, i) => {
    const x = i < half ? 28 : 198;
    const y = 92 + (i % half) * 24;
    return `<g class="fade" style="animation-delay:${r2(0.4 + i * 0.08)}s">
<circle cx="${x + 5}" cy="${y - 4}" r="4.5" fill="${lang.color}" filter="url(#soft)"/>
<text class="lang" x="${x + 16}" y="${y}">${esc(lang.name)}<tspan class="share" dx="5">${(lang.share * 100).toFixed(1)}%</tspan></text>
</g>`;
  });

  return card({
    w: 350,
    h: 165,
    t,
    label: `Most Used Languages: ${langs.map((lang) => `${lang.name} ${(lang.share * 100).toFixed(1)}%`).join(', ')}`,
    style: `.title { font-size: 18px; font-weight: 700; }
.lang { font-size: 11.5px; font-weight: 600; fill: ${t.text}; }
.share { font-weight: 400; fill: ${t.muted}; }`,
    motion: `.grow { transform-box: fill-box; transform-origin: left; animation: grow 1s cubic-bezier(0.2, 0.8, 0.2, 1) 0.2s both; }
  @keyframes grow { from { transform: scaleX(0); } }`,
    body: `<text class="title fade" x="28" y="40" fill="url(#accent)">Most Used Languages</text>
<g class="grow" filter="url(#soft)">${segments.join('')}</g>
${legend.join('\n')}`,
  });
}

export function activityCard(m, t) {
  const days = m.recent;
  const x0 = 90;
  const x1 = 1150;
  const top = 116;
  const base = 350;
  const counts = days.map((d) => d.count);
  const peakValue = Math.max(...counts);
  const max = Math.max(1, peakValue);
  const step = niceStep(max / 5);
  const yMax = Math.ceil(max / step) * step;
  const xAt = (i) => x0 + (i * (x1 - x0)) / (days.length - 1);
  const yAt = (v) => base - (v / yMax) * (base - top);
  const points = days.map((d, i) => ({ x: xAt(i), y: yAt(d.count) }));
  const line = monotonePath(points);
  const peak = counts.indexOf(peakValue);
  const last = points.length - 1;
  const sum = counts.reduce((a, b) => a + b, 0);

  const grid = [];
  for (let v = 0; v <= yMax; v += step) {
    grid.push(
      `<line x1="${x0}" x2="${x1}" y1="${r2(yAt(v))}" y2="${r2(yAt(v))}" stroke="${t.text}" stroke-opacity="${v ? 0.07 : 0.18}"/>`,
      `<text class="label" x="${x0 - 16}" y="${r2(yAt(v) + 4)}" text-anchor="end">${num(v)}</text>`,
    );
  }
  const xLabels = days.map(
    (d, i) =>
      `<text class="label${i === last ? ' today' : ''}" x="${r2(xAt(i))}" y="${base + 26}" text-anchor="middle">${Number(d.date.slice(8))}</text>`,
  );
  const dots = points.map(
    (p, i) =>
      `<circle class="dot" style="animation-delay:${r2(0.5 + i * 0.045)}s" cx="${r2(p.x)}" cy="${r2(p.y)}" r="4" fill="${t.bg[1]}" stroke="url(#line)" stroke-width="2.5"/>`,
  );
  const pulse = (p, color) =>
    `<circle class="pulse" cx="${r2(p.x)}" cy="${r2(p.y)}" r="7" stroke="${color}" stroke-width="2"/>
<circle cx="${r2(p.x)}" cy="${r2(p.y)}" r="6" fill="${color}" filter="url(#soft)"/>`;

  return card({
    w: 1200,
    h: 420,
    t,
    label: `${m.name}'s contributions over the last ${days.length} days`,
    style: `.title { font-size: 22px; font-weight: 700; }
.subtitle { font-size: 13px; fill: ${t.muted}; }
.label { font-size: 12px; font-weight: 600; fill: ${t.muted}; }
.today { fill: ${t.text}; }
.peak { font-size: 13px; font-weight: 800; fill: ${t.highlight}; }`,
    motion: `.line { stroke-dasharray: 1000; animation: draw 2.4s ease-in-out both; }
  .area { animation: fade 1.2s ease-in 0.9s both; }
  .dot { animation: fade 0.4s ease-out both; }
  .pulse { transform-box: fill-box; transform-origin: center; animation: pulse 2s ease-out 2.4s infinite; }
  @keyframes draw { from { stroke-dashoffset: 1000; } to { stroke-dashoffset: 0; } }
  @keyframes pulse { from { opacity: 0.9; transform: scale(1); } to { opacity: 0; transform: scale(3); } }`,
    defs: `<linearGradient id="line" x1="${x0}" y1="0" x2="${x1}" y2="0" gradientUnits="userSpaceOnUse">${stops(t.accent)}</linearGradient>
<linearGradient id="area" x1="0" y1="${top}" x2="0" y2="${base}" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="${t.accent[1]}" stop-opacity="0.4"/><stop offset="1" stop-color="${t.accent[1]}" stop-opacity="0"/></linearGradient>
<filter id="neon" filterUnits="userSpaceOnUse" x="0" y="0" width="1200" height="420"><feGaussianBlur stdDeviation="5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>`,
    body: `<text class="title fade" x="600" y="54" text-anchor="middle" fill="url(#accent)">${esc(m.name)}'s Contribution Graph</text>
<text class="subtitle fade" x="600" y="78" text-anchor="middle">Last ${days.length} days · ${num(sum)} contributions</text>
<g class="fade">${grid.join('')}${xLabels.join('')}</g>
<text class="label" x="620" y="404" text-anchor="middle">Days</text>
<text class="label" x="30" y="${(top + base) / 2}" text-anchor="middle" transform="rotate(-90 30 ${(top + base) / 2})">Contributions</text>
<path class="area" fill="url(#area)" d="${line}L${x1},${base}L${x0},${base}Z"/>
<path class="line" pathLength="1000" stroke="url(#line)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" filter="url(#neon)" d="${line}"/>
${dots.join('\n')}
${peak === last ? '' : pulse(points[last], t.accent[2])}
${peakValue ? `${pulse(points[peak], t.hot[1])}\n<text class="peak fade" style="animation-delay:2.2s" x="${r2(points[peak].x)}" y="${r2(points[peak].y - 18)}" text-anchor="middle">${num(peakValue)}</text>` : ''}`,
  });
}
