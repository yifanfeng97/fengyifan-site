// Shared i18n types, UI strings (nav labels, section titles) and helpers.

export type Lang = 'en' | 'zh';

/** A bilingual string. Use a plain string for language-invariant text. */
export type I18n = string | Record<Lang, string>;

export function t(value: I18n, lang: Lang): string {
  return typeof value === 'string' ? value : value[lang];
}

export const languages: Lang[] = ['en', 'zh'];

export type PageKey = 'home' | 'research' | 'resources';

/** Top-level pages. `path` is the language-relative route. */
export const navPages: { key: PageKey; path: string; label: I18n }[] = [
  { key: 'home', path: '/', label: { en: 'Home', zh: '主页' } },
  { key: 'research', path: '/research/', label: { en: 'Research', zh: '成果' } },
  { key: 'resources', path: '/resources/', label: { en: 'Resources', zh: '资源' } },
];

export const pageTitles: Record<PageKey, I18n> = {
  home: {
    en: 'Yifan Feng · 丰一帆 — Tsinghua University',
    zh: '丰一帆 · Yifan Feng — 清华大学',
  },
  research: {
    en: 'Research · Yifan Feng — Tsinghua University',
    zh: '学术成果 · 丰一帆 — 清华大学',
  },
  resources: {
    en: 'Resources · Yifan Feng — Tsinghua University',
    zh: '资源 · 丰一帆 — 清华大学',
  },
};

export const sections = {
  education: {
    id: 'education',
    title: { en: 'Education', zh: '教育背景' } as I18n,
    hint: '2014 —',
  },
  about: { en: 'About Me', zh: '个人简介' } as I18n,
  honors: {
    id: 'honors',
    title: { en: 'Honors & Awards', zh: '荣誉奖项' } as I18n,
    hint: '2022 — 2026',
  },
  news: {
    id: 'news',
    title: { en: 'News', zh: '新闻' } as I18n,
    hint: '2022 — 2026',
  },
  newsMore: { en: 'Show all', zh: '展开全部' } as I18n,
  newsLess: { en: 'Collapse', zh: '收起' } as I18n,
  expandAll: { en: 'Show all', zh: '展开全部' } as I18n,
  collapse: { en: 'Collapse', zh: '收起' } as I18n,
  publications: {
    id: 'publications',
    title: { en: 'Selected Publications', zh: '精选论文' } as I18n,
    hint: 'Hypergraph',
  },
  /** Link under the home selected-papers grid, pointing to the research page. */
  viewAll: { en: 'View All →', zh: '查看全部成果 →' } as I18n,
  researchPublications: {
    id: 'publications',
    title: { en: 'Publications', zh: '学术论文' } as I18n,
    hint: '2018 — 2026',
    firstGroup: { en: 'First / Co-First Author', zh: '一作 / 学生一作 / 共同一作' } as I18n,
    coGroup: { en: 'Collaborative Papers', zh: '合作论文' } as I18n,
    papersUnit: { en: 'papers', zh: '篇' } as I18n,
    filterAll: { en: 'All', zh: '全部' } as I18n,
    filterFirst: { en: 'First / Co-first', zh: '一作' } as I18n,
    filterCo: { en: 'Collaborative', zh: '合作' } as I18n,
  },
  grants: {
    id: 'grants',
    title: { en: 'Research Grants', zh: '科研项目' } as I18n,
    hint: { en: 'Principal Investigator', zh: '主持' } as I18n,
  },
  opensource: {
    id: 'opensource',
    title: { en: 'Open Source', zh: '开源项目' } as I18n,
    hint: 'GitHub',
  },
  datasets: {
    id: 'datasets',
    title: { en: 'Datasets', zh: '数据集' } as I18n,
    hint: 'Open-Set 3D Retrieval',
  },
};
