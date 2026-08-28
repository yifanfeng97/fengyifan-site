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
    'AI4Science',
    { en: 'Hypergraph Computation', zh: '超图计算' },
    { en: 'High-order Correlation Learning', zh: '高阶关联驱动的科学计算' },
  ] as I18n[],
  bio: {
    en: [
      'His research focuses on AI4Science and hypergraph computation — taking hypergraphs as a new tool for scientific discovery and exploring high-order-correlation-driven computing paradigms, with applications in complex network analysis, protein structure modeling, and tumor microenvironment analysis.',
      'He leads an NSFC General Program project, an NSFC Young Student Basic Research Program (PhD Candidate) project, a Postdoctoral Innovation Talent Support Program project, and a subproject of a national major S&T program. He has published 30+ papers in Nature Communications, IEEE TPAMI, CVPR, ICLR, etc., with 7500+ Google Scholar citations, including 10 first-author papers in IEEE TPAMI and 5000+ citations of his first-author work. He led the development of DeepHypergraph, the first hypergraph computation toolbox, and Hyper-Extract, a hypergraph knowledge reasoning toolkit that ranked 2nd on GitHub Trending.',
      'Feel free to reach out if you are interested in these directions or would like to collaborate.',
    ],
    zh: [
      '研究方向为 AI4Science 与超图计算，致力于将超图作为科学发现的新工具，探索高阶关联驱动的科学计算新范式，应用于复杂网络分析、蛋白质结构建模、肿瘤微环境关联解析等场景。',
      '主持国自然面上项目、国自然博士生基金、博新计划、国家科技重大专项子课题。在 Nature Communications、IEEE TPAMI、CVPR、ICLR 等国际期刊与会议发表论文 30 余篇，谷歌学术引用 7500 余次，一作发表 IEEE TPAMI 10 篇，一作论文引用 5000 余次。主导构建首个超图计算工具箱 DeepHypergraph 与超图知识推理工具库 Hyper-Extract（GitHub 趋势榜全球第二）。',
      '如果你对上述方向感兴趣，或希望交流合作，欢迎随时与我联系。',
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
    { num: '30', sup: '+', label: { en: 'Papers', zh: '论文' } as I18n },
    { num: '7500', sup: '+', label: { en: 'Citations', zh: '引用' } as I18n },
    { num: '5000', sup: '+', label: { en: 'GitHub Stars', zh: 'Stars' } as I18n },
  ],
  copyright: { en: '© 2026 Yifan Feng', zh: '© 2026 丰一帆' } as I18n,
};
