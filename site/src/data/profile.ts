import type { I18n } from './ui';

export const profile = {
  name: { en: 'Yifan Feng', zh: '丰一帆' } as I18n,
  title: {
    en: 'Postdoctoral Researcher · Postdoctoral Innovation Talent Support Program',
    zh: '博士后 · 博新计划入选者',
  } as I18n,
  affiliation: {
    en: 'Tsinghua University · School of Software',
    zh: '清华大学 · 软件学院',
  } as I18n,
  tags: [
    'AI for Science',
    { en: 'High-Order Correlation Computing', zh: '高阶关联计算' },
    { en: 'High-Order Pattern Discovery', zh: '高阶模式发现' },
  ] as I18n[],
  motto: {
    main: {
      en: 'Making high-order patterns at every scale computable, discoverable, and designable',
      zh: '让每一个尺度上的高阶模式都可计算、可发现、可设计',
    } as I18n,
    accent: {
      en: 'Understand physics, design molecules, decode life',
      zh: '理解物理，设计分子，解析生命',
    } as I18n,
  },
  bio: {
    en: [
      'I lead projects including an NSFC General Program, an NSFC Young Student Basic Research Program (PhD Candidate), and a subproject of a national major S&T program. I have published 40+ papers in Nature Communications, IEEE TPAMI (14 papers), ICLR, etc., with 7500+ Google Scholar citations; my most cited first-author paper has been cited 3000+ times. I led the development of DeepHypergraph, the first hypergraph computation toolbox, and Hyper-Extract, a hypergraph knowledge reasoning toolkit that ranked 2nd on GitHub Trending.',
      'My research centers on high-order correlation computing and pattern discovery. The principles of complex systems often lie not in individual elements, but in how a group of elements co-occur and co-configure — such higher-order correlations are what I make computable. Using hypergraphs as a new tool, I build modeling theory, algorithms, and systems for high-order correlations, and characterize their capability boundaries.',
      'Looking ahead, I am working toward autonomous scientific discovery driven by high-order correlations, from physical intelligence and protein design to tumor microenvironment analysis. Feel free to reach out if you are interested in these directions.',
      'I am currently on the job market for faculty positions, mainly in Beijing — any information or referrals would be greatly appreciated.',
    ],
    zh: [
      '主持国自然面上项目、国自然博士生基础研究项目、国家科技重大专项子课题等。在 Nature Communications、IEEE TPAMI（14 篇）、ICLR 等发表论文 40 余篇，谷歌学术引用 7500 余次，一作论文单篇最高引用 3000 余次。主导构建首个超图计算工具箱 DeepHypergraph 与超图知识推理工具库 Hyper-Extract（GitHub 趋势榜全球第二）。',
      '我的研究围绕高阶关联计算与模式发现。复杂系统的规律往往不取决于单个要素，而取决于一组要素共同出现、共同构型的方式——让这类高阶关联可计算，正是我做的事。我以超图为新工具，建立高阶关联的建模理论、算法与计算系统，并刻画其能力边界。',
      '未来，我致力于推动高阶关联驱动的自主科学发现，从物理智能、蛋白质设计到肿瘤微环境解析，发现高阶模式，走向自主设计。如果你对上述方向感兴趣，欢迎随时与我联系。',
      '目前我正在寻找教职（主要在北京），如有合适的机会或信息，欢迎推荐，非常感谢。',
    ],
  },
  avatar: '/images/fengyifan.jpg',
  email: 'evanfeng97@gmail.com',
  socials: [
    {
      label: 'Google Scholar',
      href: 'https://scholar.google.com/citations?user=WntYF-sAAAAJ',
      icon: 'scholar',
    },
    { label: 'GitHub', href: 'https://github.com/yifanfeng97', icon: 'github' },
    { label: 'Email', href: 'mailto:evanfeng97@gmail.com', icon: 'email' },
  ],
  stats: [
    { num: '40', sup: '+', label: { en: 'Papers', zh: '论文' } as I18n },
    { num: '7500', sup: '+', label: { en: 'Citations', zh: '引用' } as I18n },
    { num: '5000', sup: '+', label: { en: 'GitHub Stars', zh: 'Stars' } as I18n },
  ],
  copyright: { en: '© 2026 Yifan Feng', zh: '© 2026 丰一帆' } as I18n,
};
