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
  {
    name: 'Hypergraph-DB',
    href: 'https://github.com/iMoonLab/Hypergraph-DB',
    badges: [{ en: 'PyPI', zh: 'PyPI' }],
    desc: {
      en: 'A lightweight hypergraph database with built-in hypergraph visualization: native storage and querying of high-order relations, designed as the persistence layer for hypergraph-structured knowledge.',
      zh: '轻量级超图数据库：原生支持高阶关联的存储与查询，内置超图可视化，为超图结构化知识提供持久化底座。',
    },
    image: '/images/hypergraph-db-vis.jpg',
    links: [
      { label: 'GitHub', href: 'https://github.com/iMoonLab/Hypergraph-DB' },
      { label: 'PyPI', href: 'https://pypi.org/project/hypergraph-db/' },
    ],
    meta: 'github.com/iMoonLab/Hypergraph-DB',
  },
  {
    name: 'kfbslide',
    href: 'https://github.com/yifanfeng97/kfbslide',
    badges: [{ en: 'PyPI', zh: 'PyPI' }],
    desc: {
      en: 'A pure-Python reader for KFB (KFBio) digital pathology slides with a fully OpenSlide-compatible API — drop-in replacement for OpenSlide on KFB whole-slide images, no native dependencies.',
      zh: '纯 Python 的 KFB（KFBio）数字病理切片读取库，提供与 OpenSlide 完全兼容的 API，无需原生依赖即可无缝替换。',
    },
    image: '/images/kfbslide-banner.jpg',
    links: [
      { label: 'GitHub', href: 'https://github.com/yifanfeng97/kfbslide' },
      { label: 'PyPI', href: 'https://pypi.org/project/kfbslide/' },
    ],
    meta: 'github.com/yifanfeng97/kfbslide',
  },
  {
    name: 'mrxsslide',
    href: 'https://github.com/yifanfeng97/mrxsslide',
    badges: [{ en: 'PyPI', zh: 'PyPI' }],
    desc: {
      en: 'A pure-Python reader for MRXS (3DHISTECH MIRAX) whole-slide images with an OpenSlide-compatible API, enabling cross-platform access to MIRAX slides without vendor SDKs.',
      zh: '纯 Python 的 MRXS（3DHISTECH MIRAX）全切片图像读取库，OpenSlide 兼容 API，无需厂商 SDK 即可跨平台读取。',
    },
    image: '/images/mrxsslide-hero.jpg',
    links: [
      { label: 'GitHub', href: 'https://github.com/yifanfeng97/mrxsslide' },
      { label: 'PyPI', href: 'https://pypi.org/project/mrxsslide/' },
    ],
    meta: 'github.com/yifanfeng97/mrxsslide',
  },
  {
    name: 'hisalign',
    href: 'https://github.com/yifanfeng97/hisalign',
    badges: [{ en: 'PyPI', zh: 'PyPI' }],
    desc: {
      en: 'Whole-slide image alignment for H&E and multiplex IHC markers: a rigid + non-rigid registration pipeline that aligns multi-stain WSIs at gigapixel scale for spatially-resolved tumor microenvironment analysis.',
      zh: '面向 H&E 与多标记 IHC 的全切片图像对齐流程：刚性 + 非刚性配准，在十亿像素级 WSI 上实现多染色空间对齐，支撑肿瘤微环境空间解析。',
    },
    image: '/images/hisalign-hero.jpg',
    links: [
      { label: 'GitHub', href: 'https://github.com/yifanfeng97/hisalign' },
      { label: 'PyPI', href: 'https://pypi.org/project/hisalign/' },
    ],
    meta: 'github.com/yifanfeng97/hisalign',
  },
  {
    name: 'ihcinfer',
    href: 'https://github.com/yifanfeng97/ihcinfer',
    badges: [{ en: 'PyPI', zh: 'PyPI' }],
    desc: {
      en: 'Fast patch-based immunohistochemistry (IHC) inference on whole-slide images (SVS/KFB), powered by DeepLIIF — virtual IHC staining at WSI scale with batched patch inference.',
      zh: '基于 DeepLIIF 的全切片（SVS/KFB）IHC 快速推理库：分块批量推理，在 WSI 尺度上实现虚拟免疫组化染色。',
    },
    image: '/images/ihcinfer-hero.jpg',
    links: [
      { label: 'GitHub', href: 'https://github.com/yifanfeng97/ihcinfer' },
      { label: 'PyPI', href: 'https://pypi.org/project/ihcinfer/' },
    ],
    meta: 'github.com/yifanfeng97/ihcinfer',
  },
  {
    name: 'ontomem',
    href: 'https://github.com/yifanfeng97/ontomem',
    badges: [{ en: 'PyPI', zh: 'PyPI' }],
    desc: {
      en: 'A self-consolidating semantic memory layer for AI agents: schema-first design with Pydantic, intelligent deduplication, and FAISS vector search — agent memory that organizes itself.',
      zh: '面向 AI 智能体的自整合语义记忆层：Pydantic schema 优先设计，智能去重与 FAISS 向量检索，让智能体记忆自我组织。',
    },
    image: '/images/ontomem-fw.jpg',
    links: [
      { label: 'GitHub', href: 'https://github.com/yifanfeng97/ontomem' },
      { label: 'PyPI', href: 'https://pypi.org/project/ontomem/' },
    ],
    meta: 'github.com/yifanfeng97/ontomem',
  },
  {
    name: 'ontosight',
    href: 'https://github.com/yifanfeng97/ontosight',
    badges: [{ en: 'PyPI', zh: 'PyPI' }],
    desc: {
      en: 'A flexible, AI-ready visualization engine for interactive graph/hypergraph exploration — bridging static graph visualization and dynamic AI-driven analysis with conversational interaction.',
      zh: '灵活的 AI-ready 可视化引擎：交互式图/超图探索，弥合静态可视化与 AI 驱动动态分析之间的鸿沟，支持对话式交互。',
    },
    image: '/images/ontosight-chat.jpg',
    links: [
      { label: 'GitHub', href: 'https://github.com/yifanfeng97/ontosight' },
      { label: 'PyPI', href: 'https://pypi.org/project/ontosight/' },
    ],
    meta: 'github.com/yifanfeng97/ontosight',
  },
];
