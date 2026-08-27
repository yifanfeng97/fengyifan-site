import type { I18n } from './ui';

export interface OssLink {
  label: I18n;
  href: string;
}

export interface OssProject {
  name: string;
  /** Optional link wrapping the project name. */
  href?: string;
  badges: I18n[];
  desc: I18n;
  /** Optional demo video path (site-relative). */
  video?: string;
  /** Optional screenshot / architecture image path (site-relative). */
  image?: string;
  links: OssLink[];
  meta: string;
}

export const opensource: OssProject[] = [
  {
    name: 'DeepHypergraph (DHG)',
    href: 'https://github.com/iMoonLab/DeepHypergraph',
    badges: [{ en: '870+ Stars', zh: '870+ Stars' }],
    desc: {
      en: 'The first hypergraph computation toolbox: a PyTorch-based deep learning library for graph and hypergraph neural networks, supporting both low-order and high-order message passing (vertex-to-vertex, vertex-to-hyperedge, hyperedge-to-vertex, vertex-set-to-vertex-set, etc.), with a built-in Auto-ML module for automatic hyperparameter tuning. It has been downloaded 50,000+ times and used by 200+ institutions across 24 countries.',
      zh: '首个超图计算工具箱：基于 PyTorch 的图/超图神经网络深度学习库，支持低阶与高阶消息传递（顶点到顶点、顶点到超边、超边到顶点、顶点集到顶点集等），内置 Auto-ML 超参自动调优模块。已被下载 5 万余次，被全球 24 个国家 200 余家研究机构与企业使用。',
    },
    video: '/videos/neuron_actions_4s_v1_wide_text.mp4',
    links: [
      { label: 'Homepage', href: 'http://deephypergraph.com/' },
      { label: 'GitHub', href: 'https://github.com/iMoonLab/DeepHypergraph' },
      { label: 'Documentation', href: 'https://deephypergraph.readthedocs.io/' },
      {
        label: { en: '中文文档', zh: '中文文档' },
        href: 'https://deephypergraph.readthedocs.io/en/latest/zh/overview.html',
      },
    ],
    meta: 'github.com/iMoonLab/DeepHypergraph',
  },
  {
    name: 'Hyper-Extract',
    href: 'https://github.com/yifanfeng97/Hyper-Extract',
    badges: ['GitHub Trending #2', '3300+ Stars'],
    desc: {
      en: 'An LLM-powered knowledge extraction and evolution framework: transform unstructured documents into persistent, strongly-typed Knowledge Abstracts with one command — from simple collections and Pydantic models to knowledge graphs, hypergraphs, and even spatio-temporal graphs. Ships with 10+ extraction engines (GraphRAG, LightRAG, Hyper-RAG, KG-Gen, etc.), 80+ zero-code YAML templates, incremental evolution, and Obsidian export. It ranked 2nd on GitHub Trending worldwide.',
      zh: '基于 LLM 的知识抽取与演化框架：一条命令将非结构化文档转化为持久化、强类型的「知识抽象」——从简单的集合与 Pydantic 模型，到知识图谱、超图乃至时空图。内置 10+ 抽取引擎（GraphRAG、LightRAG、Hyper-RAG、KG-Gen 等）、80+ 零代码 YAML 模板，支持增量演化与 Obsidian 导出。曾登 GitHub Trending 全球第二。',
    },
    image: '/images/hyper-extract-hero.jpg',
    links: [
      { label: 'GitHub', href: 'https://github.com/yifanfeng97/Hyper-Extract' },
      { label: 'Documentation', href: 'https://yifanfeng97.github.io/Hyper-Extract/latest/' },
      { label: 'PyPI', href: 'https://pypi.org/project/hyperextract/' },
    ],
    meta: 'github.com/yifanfeng97/Hyper-Extract',
  },
];
