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
    { en: 'High-order-correlation-driven Scientific Computing', zh: '高阶关联驱动的科学计算' },
  ] as I18n[],
  bio: {
    en: [
      'My research focuses on AI for Science — taking hypergraphs as a new tool for scientific discovery and exploring high-order-correlation-driven computing paradigms, with applications in real-world scenarios such as geometric correlation modeling, protein structure modeling, and tumor microenvironment analysis.',
      'I lead projects including an NSFC General Program, an NSFC Young Student Basic Research Program (PhD Candidate), and a subproject of a national major S&T program. I have published 40+ papers in Nature Communications, IEEE TPAMI (14 papers), ICLR, etc., with 7500+ Google Scholar citations; my most cited first-author paper has been cited 3000+ times. I led the development of DeepHypergraph, the first hypergraph computation toolbox, and Hyper-Extract, a hypergraph knowledge reasoning toolkit that ranked 2nd on GitHub Trending.',
      'Feel free to reach out if you are interested in these directions or would like to collaborate. I am currently on the job market for faculty positions, mainly in Beijing — any information or referrals would be greatly appreciated.',
    ],
    zh: [
      '研究方向为 AI4Science，致力于将超图作为科学发现的新工具，探索高阶关联驱动的科学计算新范式，应用于几何关联建模、蛋白质结构建模、肿瘤微环境关联解析等真实场景。',
      '主持国自然面上项目、国自然博士生基金、国家科技重大专项子课题等。在 Nature Communications、IEEE TPAMI（14 篇）、ICLR 等发表论文 40 余篇，谷歌学术引用 7500 余次，一作论文单篇最高引用 3000 余次。主导构建首个超图计算工具箱 DeepHypergraph 与超图知识推理工具库 Hyper-Extract（GitHub 趋势榜全球第二）。',
      '如果你对上述方向感兴趣，或希望交流合作，欢迎随时与我联系。目前我正在寻找教职（主要在北京），如有合适的机会或信息，欢迎推荐，非常感谢。',
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
