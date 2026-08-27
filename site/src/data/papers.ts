import type { I18n } from './ui';

export interface PaperLink {
  label: I18n;
  href: string;
}

export interface Paper {
  title: string;
  /** HTML string; wrap Yifan Feng in <b>…</b>. */
  authorsHtml: string;
  /** Venue with year, e.g. 'IEEE TPAMI · 2026'. */
  venue: string;
  /** Publication year, used for year grouping on the research page. */
  year: number;
  /** Gold venue badge (landmark paper) instead of purple. */
  venueGold?: boolean;
  /** Optional badge line (Oral / award / citation count), only when documented. */
  note?: I18n;
  /** Short method name for the placeholder header, e.g. 'HGNN'. */
  thumb: string;
  /** true = first / student-first / co-first author (per CV grouping). */
  first: boolean;
  /** Show on the home page "Selected Publications" grid. */
  selected?: boolean;
  /** Links; empty when no URL is documented (do not invent). */
  links: PaperLink[];
}

// ---------------------------------------------------------------------------
// First / student-first / co-first author (科研成果（一作/学生一作/共同一作）)
// ---------------------------------------------------------------------------
export const firstAuthorPapers: Paper[] = [
  {
    title:
      'Hyper-RAG: Combating LLM Hallucinations using Hypergraph-Driven Retrieval-Augmented Generation',
    authorsHtml:
      '<b>Yifan Feng*</b>, Hao Hu*, Shihui Ying*, Xingliang Hou, Shiquan Liu, Mingyuan Yang, Junchang Li, Shaoyi Du, Nanning Zheng, Han Hu, Yue Gao',
    venue: 'Nature Communications · 2026',
    year: 2026,
    note: { en: 'Nature Portfolio Journal', zh: 'Nature 子刊' },
    thumb: 'Hyper-RAG',
    first: true,
    selected: true,
    links: [],
  },
  {
    title:
      'Hyper-KGGen: A Skill-Driven Knowledge Extractor for High-Quality Knowledge Hypergraph Generation',
    authorsHtml:
      'Rizhuo Huang#, <b>Yifan Feng#</b>, Rundong Xue, Shihui Ying, Jun-Hai Yong, Chuan Shi, Shaoyi Du, Yue Gao',
    venue: 'KDD · 2026',
    year: 2026,
    note: { en: 'Oral Presentation', zh: 'Oral 报告' },
    thumb: 'Hyper-KGGen',
    first: true,
    selected: true,
    links: [],
  },
  {
    title: 'Hypergraph Foundation Model',
    authorsHtml:
      'Yue Gao, <b>Yifan Feng</b>, Shiquan Liu, Xiangming Han, Shaoyi Du, Zongze Wu, Han Hu',
    venue: 'IEEE TPAMI · 2026',
    year: 2026,
    thumb: 'HFM',
    first: true,
    links: [],
  },
  {
    title: 'How Powerful are Hypergraph Neural Networks?',
    authorsHtml:
      '<b>Yifan Feng</b>, Rizhuo Huang, Yifan Zhang, Shaoyi Du, Shihui Ying, Zongze Wu, Yue Gao',
    venue: 'IEEE TPAMI · 2026',
    year: 2026,
    thumb: 'How Powerful',
    first: true,
    links: [],
  },
  {
    title: 'Knowledge-Embedded Hypergraph Neural Networks',
    authorsHtml:
      '<b>Yifan Feng</b>, Yifan Zhang, Shaoyi Du, Shihui Ying, Zongze Wu, Yue Gao',
    venue: 'IEEE TPAMI · 2026',
    year: 2026,
    thumb: 'KE-HGNN',
    first: true,
    links: [],
  },
  {
    title: 'Hyper-YOLO: When Visual Object Detection Meets Hypergraph Computation',
    authorsHtml:
      '<b>Yifan Feng</b>, Jiangang Huang, Shaoyi Du, Shihui Ying, Xu Zhuang, Jason Wang, Jun-Hai Yong, Guiguang Ding, Rongrong Ji, Yue Gao',
    venue: 'IEEE TPAMI · 2025',
    year: 2025,
    note: { en: '500+ Citations', zh: '谷歌学术引用 500+' },
    thumb: 'Hyper-YOLO',
    first: true,
    selected: true,
    links: [],
  },
  {
    title: 'HGNN Shield: Defending Hypergraph Neural Networks Against High-Order Structure Attack',
    authorsHtml:
      '<b>Yifan Feng</b>, Yifan Zhang, Shaoyi Du, Shihui Ying, Jun-Hai Yong, Yue Gao',
    venue: 'IEEE TPAMI · 2025',
    year: 2025,
    thumb: 'HGNN Shield',
    first: true,
    links: [],
  },
  {
    title: 'Kernelized Hypergraph Neural Networks',
    authorsHtml: '<b>Yifan Feng</b>, Yifan Zhang, Shihui Ying, Shaoyi Du, Yue Gao',
    venue: 'IEEE TPAMI · 2025',
    year: 2025,
    thumb: 'KHGNN',
    first: true,
    links: [],
  },
  {
    title: 'Self-Supervised Hypergraph Training Framework via Structure-Aware Learning',
    authorsHtml:
      '<b>Yifan Feng</b>, Shiquan Liu, Shihui Ying, Shaoyi Du, Zongze Wu, Yue Gao',
    venue: 'IEEE TPAMI · 2025',
    year: 2025,
    thumb: 'SS-HTF',
    first: true,
    links: [],
  },
  {
    title: 'Beyond Graphs: Can Large Language Models Comprehend Hypergraphs?',
    authorsHtml:
      '<b>Yifan Feng</b>, Chengwu Yang, Xingliang Hou, Shaoyi Du, Shihui Ying, Zongze Wu, Yue Gao',
    venue: 'ICLR · 2025',
    year: 2025,
    thumb: 'Beyond Graphs',
    first: true,
    links: [],
  },
  {
    title: 'Hypergraph Isomorphism Computation',
    authorsHtml: '<b>Yifan Feng</b>, Jiashu Han, Shihui Ying, Yue Gao',
    venue: 'IEEE TPAMI · 2024',
    year: 2024,
    thumb: 'HIC',
    first: true,
    links: [
      { label: 'PDF', href: 'https://ieeexplore.ieee.org/abstract/document/10398457' },
      { label: 'Code', href: 'https://github.com/iMoonLab/HIC' },
    ],
  },
  {
    title: 'Hypergraph-Based Multi-Modal Representation for Open-Set 3D Object Retrieval',
    authorsHtml: '<b>Yifan Feng</b>, Shuyi Ji, Yu-Shen Liu, Shaoyi Du, Qionghai Dai, Yue Gao',
    venue: 'IEEE TPAMI · 2024',
    year: 2024,
    thumb: 'HGM2R',
    first: true,
    links: [
      { label: 'PDF', href: 'https://ieeexplore.ieee.org/document/10319392' },
      { label: 'Code', href: 'https://github.com/iMoonLab/HGM2R' },
    ],
  },
  {
    title: 'LightHGNN: Distilling Hypergraph Neural Networks into MLPs for 100x Faster Inference',
    authorsHtml: '<b>Yifan Feng</b>, Yihe Luo, Shihui Ying, Yue Gao',
    venue: 'ICLR · 2024',
    year: 2024,
    thumb: 'LightHGNN',
    first: true,
    links: [
      { label: 'PDF', href: 'https://openreview.net/forum?id=lHasEfGsXL' },
      { label: 'Code', href: 'https://github.com/iMoonLab/LightHGNN' },
    ],
  },
  {
    title: 'HGNN+: Towards General Hypergraph Neural Networks',
    authorsHtml: 'Yue Gao, <b>Yifan Feng</b>, Shuyi Ji, Rongrong Ji',
    venue: 'IEEE TPAMI · 2022',
    year: 2022,
    note: { en: '800+ Citations', zh: '谷歌学术引用 800+' },
    thumb: 'HGNN+',
    first: true,
    links: [
      { label: 'PDF', href: 'https://ieeexplore.ieee.org/document/9795251' },
      {
        label: 'Code',
        href: 'https://deephypergraph.readthedocs.io/en/latest/generated/dhg.models.HGNNP.html',
      },
    ],
  },
  {
    title: "SHREC'22 Track: Open-Set 3D Object Retrieval",
    authorsHtml: '<b>Yifan Feng</b>, Yue Gao, Xibin Zhao, et al.',
    venue: 'Computers & Graphics · 2022',
    year: 2022,
    thumb: "SHREC'22",
    first: true,
    links: [
      {
        label: 'PDF',
        href: 'https://www.sciencedirect.com/science/article/abs/pii/S0097849322001443',
      },
      { label: 'Code', href: 'https://github.com/yifanfeng97/multi-modal-generation-for-shrec22' },
    ],
  },
  {
    title: 'Hypergraph Neural Networks',
    authorsHtml: '<b>Yifan Feng</b>, Haoxuan You, Zizhao Zhang, Rongrong Ji, Yue Gao',
    venue: 'AAAI · 2019',
    year: 2019,
    venueGold: true,
    note: { en: 'Oral · 3000+ Citations', zh: 'Oral · 谷歌学术引用 3000+' },
    thumb: 'HGNN',
    first: true,
    selected: true,
    links: [
      { label: 'PDF', href: 'https://www.aaai.org/ojs/index.php/AAAI/article/download/4235/4113' },
      { label: 'Code', href: 'https://github.com/iMoonLab/HGNN' },
    ],
  },
  {
    title: 'GVCNN: Group-view Convolutional Neural Networks for 3D Shape Recognition',
    authorsHtml: '<b>Yifan Feng</b>, Zizhao Zhang, Xibin Zhao, Rongrong Ji, Yue Gao',
    venue: 'CVPR · 2018',
    year: 2018,
    note: { en: '800+ Citations', zh: '谷歌学术引用 800+' },
    thumb: 'GVCNN',
    first: true,
    links: [
      {
        label: 'PDF',
        href: 'http://openaccess.thecvf.com/content_cvpr_2018/papers/Feng_GVCNN_Group-View_Convolutional_CVPR_2018_paper.pdf',
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// Collaborative papers (科研成果（其他作者）)
// ---------------------------------------------------------------------------
export const coAuthorPapers: Paper[] = [
  {
    title: 'HGNNv2: Stable Hypergraph Neural Networks',
    authorsHtml:
      'Yue Gao, Jielong Yan, <b>Yifan Feng</b>, Xiangmin Han, Shihui Ying, Zongze Wu, Han Hu',
    venue: 'IEEE TPAMI · 2026',
    year: 2026,
    thumb: 'HGNNv2',
    first: false,
    links: [],
  },
  {
    title: 'Reinterpreting Hypergraph Kernels: Insights Through Homomorphism Analysis',
    authorsHtml: 'Yifan Zhang, Shaoyi Du, <b>Yifan Feng</b>, Shihui Ying, Yue Gao',
    venue: 'IEEE TPAMI · 2026',
    year: 2026,
    thumb: 'HG Kernels',
    first: false,
    links: [],
  },
  {
    title:
      'Cog-RAG: Cognitive-Inspired Dual-Hypergraph with Theme Alignment Retrieval-Augmented Generation',
    authorsHtml:
      'Hao Hu, <b>Yifan Feng</b>, Ruoxue Li, Rundong Xue, Xingliang Hou, Zhiqiang Tian, Yue Gao, Shaoyi Du',
    venue: 'AAAI · 2026',
    year: 2026,
    thumb: 'Cog-RAG',
    first: false,
    links: [],
  },
  {
    title: 'Cross-Modal 3D Shape Retrieval via Heterogeneous Dynamic Graph Representation',
    authorsHtml: 'Yue Dai, <b>Yifan Feng</b>, Nan Ma, Xibin Zhao, Yue Gao',
    venue: 'IEEE TPAMI · 2025',
    year: 2025,
    thumb: 'HDGR',
    first: false,
    links: [],
  },
  {
    title: 'Mode Hypergraph Neural Network',
    authorsHtml: 'Shuyi Ji, <b>Yifan Feng</b>, Donglin Di, Shihui Ying, Yue Gao',
    venue: 'IEEE TNNLS · 2025',
    year: 2025,
    thumb: 'ModeHGNN',
    first: false,
    links: [],
  },
  {
    title: 'Hypergraph-Based Remaining Prototype Alignment for Open-Set Cross-Domain Image Retrieval',
    authorsHtml: 'Yang Xu, <b>Yifan Feng</b>, Xiaopin Zhong, Yue Gao, Zongze Wu',
    venue: 'IEEE TMM · 2025',
    year: 2025,
    thumb: 'HG-RPA',
    first: false,
    links: [],
  },
  {
    title: 'Residual Fuzzy Alignment on Hypergraph for Open-Set 3D Cross-Modal Retrieval',
    authorsHtml: 'Yang Xu, <b>Yifan Feng</b>, Xu Zhuang, Jason Wang, Zongze Wu, Yue Gao',
    venue: 'IEEE TMM · 2025',
    year: 2025,
    thumb: 'RFA',
    first: false,
    links: [],
  },
  {
    title: 'Hyper-Depth: Hypergraph-based Multi-Scale Representation Fusion for Monocular Depth Estimation',
    authorsHtml: 'Lin Bie, Siqi Li, <b>Yifan Feng</b>, Yue Gao',
    venue: 'ICCV · 2025',
    year: 2025,
    thumb: 'Hyper-Depth',
    first: false,
    links: [],
  },
  {
    title: 'Hypergraph Foundation Model for Brain Disease Diagnosis',
    authorsHtml:
      'Xiangmin Han, Rundong Xue, Jingxi Feng, <b>Yifan Feng</b>, Shaoyi Du, Jun Shi, Yue Gao',
    venue: 'IEEE TNNLS · 2025',
    year: 2025,
    thumb: 'Brain-HFM',
    first: false,
    links: [],
  },
  {
    title:
      'Structure-aware Residual-Center Representation for Self-Supervised Open-set 3D Cross-Modal Retrieval',
    authorsHtml: 'Yang Xu, <b>Yifan Feng</b>, Yu Jiang',
    venue: 'ICME · 2024',
    year: 2024,
    note: { en: 'Oral · Best Student Paper Award', zh: 'Oral · 最佳学生论文奖' },
    thumb: 'SRCR',
    first: false,
    links: [],
  },
  {
    title: 'Hypergraph Dynamic System',
    authorsHtml: 'Jielong Yan, <b>Yifan Feng</b>, Shihui Ying, Yue Gao',
    venue: 'ICLR · 2024',
    year: 2024,
    thumb: 'HDS',
    first: false,
    links: [
      { label: 'PDF', href: 'https://openreview.net/forum?id=NLbRvr840Q' },
      { label: 'Code', href: 'https://github.com/iMoonLab/HDS-ODE' },
    ],
  },
  {
    title: 'Triadic Elastic Structure Representation for Open-Set Incremental 3D Object Retrieval',
    authorsHtml: 'Yang Xu, <b>Yifan Feng</b>, Lin Bie',
    venue: 'ICMR · 2024',
    year: 2024,
    thumb: 'TESR',
    first: false,
    links: [],
  },
  {
    title: 'Multi-scale Consistency for Robust 3D Registration via Hierarchical Sinkhorn Tree',
    authorsHtml: 'Chengwei Ren, <b>Yifan Feng</b>, Weixiang Zhang, Xiao-Ping Zhang, Yue Gao',
    venue: 'NeurIPS · 2024',
    year: 2024,
    thumb: 'MC-HST',
    first: false,
    links: [],
  },
  {
    title: 'Semi-Open 3D Object Retrieval via Hierarchical Equilibrium on Hypergraph',
    authorsHtml: 'Yang Xu, <b>Yifan Feng</b>, Jun Zhang, Jun-Hai Yong, Yue Gao',
    venue: 'NeurIPS · 2024',
    year: 2024,
    thumb: 'Semi-Open',
    first: false,
    links: [],
  },
  {
    title: 'Assembly Fuzzy Representation on Hypergraph for Open-Set 3D Object Retrieval',
    authorsHtml: 'Yang Xu, <b>Yifan Feng</b>, Jun Zhang, Jun-Hai Yong, Yue Gao',
    venue: 'NeurIPS · 2024',
    year: 2024,
    thumb: 'AFR',
    first: false,
    links: [],
  },
  {
    title: 'Negative Prompt Driven Complementary Parallel Representation for Open-World 3D Object Retrieval',
    authorsHtml: 'Yang Xu, <b>Yifan Feng</b>, Yue Gao',
    venue: 'IJCAI · 2024',
    year: 2024,
    note: { en: 'Oral', zh: 'Oral 报告' },
    thumb: 'NP-CPR',
    first: false,
    links: [],
  },
  {
    title: 'Multi-View Time-Series Hypergraph Neural Network for Action Recognition',
    authorsHtml: 'Nan Ma, Zhixuan Wu, <b>Yifan Feng</b>, Cheng Wang, Yue Gao',
    venue: 'IEEE TIP · 2024',
    year: 2024,
    thumb: 'MV-TS-HGNN',
    first: false,
    links: [],
  },
  {
    title: 'Hierarchical Set-to-set Representation for 3D Cross-modal Retrieval',
    authorsHtml: 'Yu Jiang, Cong Hua, <b>Yifan Feng</b>, Yue Gao',
    venue: 'IEEE TNNLS · 2023',
    year: 2023,
    thumb: 'HSR',
    first: false,
    links: [{ label: 'PDF', href: 'https://ieeexplore.ieee.org/document/10316653' }],
  },
  {
    title:
      'Generating Hypergraph-Based High-Order Representations of Whole-Slide Histopathological Images for Survival Prediction',
    authorsHtml:
      'Donglin Di, Changqing Zou, <b>Yifan Feng</b>, Hanyan Zhou, Rongrong Ji, Qionghai Dai, Yue Gao',
    venue: 'IEEE TPAMI · 2022',
    year: 2022,
    thumb: 'HGSurvNet',
    first: false,
    links: [{ label: 'PDF', href: 'https://ieeexplore.ieee.org/document/9903546' }],
  },
  {
    title: 'Dual Channel Hypergraph Collaborative Filtering',
    authorsHtml: 'Shuyi Ji, <b>Yifan Feng</b>, Rongrong Ji, Xibin Zhao, Wanwan Tang, Yue Gao',
    venue: 'KDD · 2020',
    year: 2020,
    note: { en: '200+ Citations', zh: '谷歌学术引用 200+' },
    thumb: 'DHCF',
    first: false,
    links: [{ label: 'PDF', href: 'https://dl.acm.org/doi/10.1145/3394486.3403253' }],
  },
  {
    title: 'MeshNet: Mesh Neural Network for 3D Shape Representation',
    authorsHtml: 'Yutong Feng, <b>Yifan Feng</b>, Haoxuan You, Xibin Zhao, Yue Gao',
    venue: 'AAAI · 2019',
    year: 2019,
    note: { en: 'Oral · 300+ Citations', zh: 'Oral · 谷歌学术引用 300+' },
    thumb: 'MeshNet',
    first: false,
    links: [
      { label: 'PDF', href: 'https://www.aaai.org/ojs/index.php/AAAI/article/view/4840/4713' },
      { label: 'Code', href: 'https://github.com/iMoonLab/MeshNet' },
    ],
  },
  {
    title: 'PVRNet: Point-View Relation Neural Network for 3D Shape Recognition',
    authorsHtml: 'Haoxuan You, <b>Yifan Feng</b>, Xibin Zhao, Changqing Zou, Rongrong Ji, Yue Gao',
    venue: 'AAAI · 2019',
    year: 2019,
    note: { en: 'Oral', zh: 'Oral 报告' },
    thumb: 'PVRNet',
    first: false,
    links: [
      { label: 'PDF', href: 'https://www.aaai.org/ojs/index.php/AAAI/article/view/4945/4818' },
      { label: 'Code', href: 'https://github.com/iMoonLab/PVRNet' },
    ],
  },
  {
    title: 'Dynamic Hypergraph Neural Networks',
    authorsHtml: 'Jianwen Jiang, Yuxuan Wei, <b>Yifan Feng</b>, Jingxuan Cao, Yue Gao',
    venue: 'IJCAI · 2019',
    year: 2019,
    note: { en: '300+ Citations', zh: '谷歌学术引用 300+' },
    thumb: 'DHGNN',
    first: false,
    links: [
      { label: 'PDF', href: 'https://www.ijcai.org/Proceedings/2019/0366.pdf' },
      { label: 'Code', href: 'https://github.com/iMoonLab/DHGNN' },
    ],
  },
  {
    title: 'Physiological Signals-based Emotion Recognition via High-order Correlation Learning',
    authorsHtml: 'Junjie Zhu, Yuxuan Wei, <b>Yifan Feng</b>, Xibin Zhao, Yue Gao',
    venue: 'ACM TOMM · 2019',
    year: 2019,
    thumb: 'HOCL',
    first: false,
    links: [{ label: 'PDF', href: 'https://dl.acm.org/doi/abs/10.1145/3332374' }],
  },
  {
    title: 'Emotion Recognition by Edge-Weighted Hypergraph Neural Network',
    authorsHtml: 'Jingzhi Shao, Junjie Zhu, Yuxuan Wei, <b>Yifan Feng</b>, Xibin Zhao',
    venue: 'ICIP · 2019',
    year: 2019,
    thumb: 'EW-HGNN',
    first: false,
    links: [{ label: 'PDF', href: 'https://ieeexplore.ieee.org/abstract/document/8803207/' }],
  },
  {
    title: 'PVNet: A Joint Convolutional Network of Point Cloud and Multi-View for 3D Shape Recognition',
    authorsHtml: 'Haoxuan You, <b>Yifan Feng</b>, Rongrong Ji, Yue Gao',
    venue: 'ACM MM · 2018',
    year: 2018,
    note: { en: 'Oral · 200+ Citations', zh: 'Oral · 谷歌学术引用 200+' },
    thumb: 'PVNet',
    first: false,
    links: [
      { label: 'PDF', href: 'https://arxiv.org/pdf/1808.07659' },
      { label: 'Code', href: 'https://github.com/Hxyou/HLWD' },
    ],
  },
];

export const papers: Paper[] = [...firstAuthorPapers, ...coAuthorPapers];
export const selectedPapers: Paper[] = papers.filter((p) => p.selected);

/** Group papers by year, years descending, in-file order kept within a year. */
export function groupByYear(list: Paper[]): [number, Paper[]][] {
  const map = new Map<number, Paper[]>();
  for (const p of list) {
    const arr = map.get(p.year) ?? [];
    arr.push(p);
    map.set(p.year, arr);
  }
  return [...map.entries()].sort((a, b) => b[0] - a[0]);
}
