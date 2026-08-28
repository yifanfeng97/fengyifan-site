import type { I18n } from './ui';

export interface NewsItem {
  date: I18n;
  /** HTML string; use <span class="hl">…</span> for highlights, <a> for links. */
  html: Record<'en' | 'zh', string>;
  /** Short label pill on the right; plain string if language-invariant. */
  badge?: I18n;
}

// Full timeline (newest first). 2022–2024 entries migrated from the old site
// (src/components/News.vue); 2024.02+ verified against received emails.
// Honors & awards (from 丰一帆-简历.docx) are merged into this timeline;
// their months are approximate when only the year is known.
export const news: NewsItem[] = [
  {
    date: { en: 'Aug. 2026', zh: '2026.08' },
    html: {
      en: 'Awarded an <span class="hl">NSFC General Program</span> grant as Principal Investigator.',
      zh: '获批<span class="hl">国家自然科学基金面上项目</span>（主持）。',
    },
    badge: 'NSFC',
  },
  {
    date: { en: 'Jun. 2026', zh: '2026.06' },
    html: {
      en: 'Selected for the <span class="hl">Postdoctoral Innovation Talent Support Program (BX Program)</span>.',
      zh: '入选<span class="hl">博士后创新人才支持计划（博新计划）</span>。',
    },
    badge: { en: 'BX Program', zh: '博新计划' },
  },
  {
    date: { en: 'Jun. 2026', zh: '2026.06' },
    html: {
      en: '<a href="https://github.com/yifanfeng97/Hyper-Extract" target="_blank" rel="noopener"><span class="hl">Hyper-Extract</span></a> ranked <span class="hl">#2 on GitHub Trending</span> worldwide.',
      zh: '<a href="https://github.com/yifanfeng97/Hyper-Extract" target="_blank" rel="noopener"><span class="hl">Hyper-Extract</span></a> 登上 <span class="hl">GitHub 趋势榜全球第二</span>。',
    },
    badge: 'Trending #2',
  },
  {
    date: { en: 'Jun. 2026', zh: '2026.06' },
    html: {
      en: 'Paper <span class="hl">"How Powerful are Hypergraph Neural Networks?"</span> accepted by <span class="hl">IEEE TPAMI</span>.',
      zh: '论文<span class="hl">《How Powerful are Hypergraph Neural Networks?》</span>被 <span class="hl">IEEE TPAMI</span> 录用。',
    },
    badge: 'IEEE TPAMI',
  },
  {
    date: { en: 'Jun. 2026', zh: '2026.06' },
    html: {
      en: '<span class="hl">Hyper-KGGen</span> received an Oral presentation at KDD 2026.',
      zh: '<span class="hl">Hyper-KGGen</span> 获 KDD 2026 Oral 报告。',
    },
    badge: 'Oral',
  },
  {
    date: { en: 'Mar. 2026', zh: '2026.03' },
    html: {
      en: 'Paper <span class="hl">"Hyper-RAG"</span> accepted by Nature Communications.',
      zh: '论文 <span class="hl">Hyper-RAG</span> 被 Nature Communications 录用。',
    },
    badge: { en: 'Nature Portfolio', zh: 'Nature 子刊' },
  },
  {
    date: { en: 'Mar. 2026', zh: '2026.03' },
    html: {
      en: 'Paper <span class="hl">"Knowledge-Embedded Hypergraph Neural Networks"</span> accepted by <span class="hl">IEEE TPAMI</span>.',
      zh: '论文<span class="hl">《Knowledge-Embedded Hypergraph Neural Networks》</span>被 <span class="hl">IEEE TPAMI</span> 录用。',
    },
    badge: 'IEEE TPAMI',
  },
  {
    date: { en: 'Jan. 2026', zh: '2026.01' },
    html: {
      en: 'Doctoral dissertation nominated for the <span class="hl">CSIG Doctoral Dissertation Incentive Program</span>.',
      zh: '博士学位论文获<span class="hl">中国图像图形学学会博士学位论文激励计划提名</span>。',
    },
    badge: 'Award',
  },
  {
    date: { en: 'Dec. 2025', zh: '2025.12' },
    html: {
      en: '<span class="hl">Three papers</span> (Hypergraph Foundation Model, HGNN Shield, HGNNv2) accepted by <span class="hl">IEEE TPAMI</span>.',
      zh: '<span class="hl">三篇论文</span>（Hypergraph Foundation Model、HGNN Shield、HGNNv2）被 <span class="hl">IEEE TPAMI</span> 录用。',
    },
    badge: 'IEEE TPAMI ×3',
  },
  {
    date: { en: 'Nov. 2025', zh: '2025.11' },
    html: {
      en: 'Paper <span class="hl">Cog-RAG</span> accepted by AAAI 2026.',
      zh: '论文 <span class="hl">Cog-RAG</span> 被 AAAI 2026 录用。',
    },
    badge: 'AAAI',
  },
  {
    date: { en: 'Sep. 2025', zh: '2025.09' },
    html: {
      en: 'Listed among the <span class="hl">World\'s Top 2% Scientists</span> (2024 &amp; 2025).',
      zh: '连续入选<span class="hl">全球前 2% 顶尖科学家</span>（2024、2025）。',
    },
    badge: 'Award',
  },
  {
    date: { en: 'Sep. 2025', zh: '2025.09' },
    html: {
      en: 'Paper <span class="hl">"Reinterpreting Hypergraph Kernels"</span> accepted by <span class="hl">IEEE TPAMI</span>.',
      zh: '论文<span class="hl">《Reinterpreting Hypergraph Kernels》</span>被 <span class="hl">IEEE TPAMI</span> 录用。',
    },
    badge: 'IEEE TPAMI',
  },
  {
    date: { en: 'Jul. 2025', zh: '2025.07' },
    html: {
      en: 'Selected as a <span class="hl">Shuimu Tsinghua Scholar</span>.',
      zh: '入选<span class="hl">清华大学水木学者</span>。',
    },
    badge: 'Award',
  },
  {
    date: { en: 'Jul. 2025', zh: '2025.07' },
    html: {
      en: 'Paper <span class="hl">"Self-Supervised Hypergraph Training Framework"</span> accepted by <span class="hl">IEEE TPAMI</span>.',
      zh: '论文<span class="hl">《Self-Supervised Hypergraph Training Framework》</span>被 <span class="hl">IEEE TPAMI</span> 录用。',
    },
    badge: 'IEEE TPAMI',
  },
  {
    date: { en: 'Jun. 2025', zh: '2025.06' },
    html: {
      en: 'Named <span class="hl">Tsinghua University Academic Rising Star</span> (10 recipients university-wide).',
      zh: '获评<span class="hl">清华大学学术新秀</span>（全校仅 10 人）。',
    },
    badge: 'Award',
  },
  {
    date: { en: 'Jun. 2025', zh: '2025.06' },
    html: {
      en: 'Named <span class="hl">Beijing Outstanding Graduate</span>.',
      zh: '获评<span class="hl">北京市优秀毕业生</span>。',
    },
    badge: 'Award',
  },
  {
    date: { en: 'Jun. 2025', zh: '2025.06' },
    html: {
      en: 'Paper <span class="hl">"Kernelized Hypergraph Neural Networks"</span> accepted by <span class="hl">IEEE TPAMI</span>.',
      zh: '论文<span class="hl">《Kernelized Hypergraph Neural Networks》</span>被 <span class="hl">IEEE TPAMI</span> 录用。',
    },
    badge: 'IEEE TPAMI',
  },
  {
    date: { en: 'Jun. 2025', zh: '2025.06' },
    html: {
      en: 'Paper <span class="hl">Hyper-Depth</span> accepted by ICCV 2025.',
      zh: '论文 <span class="hl">Hyper-Depth</span> 被 ICCV 2025 录用。',
    },
    badge: 'ICCV',
  },
  {
    date: { en: 'Mar. 2025', zh: '2025.03' },
    html: {
      en: 'Paper <span class="hl">"Hypergraph Foundation Model for Brain Disease Diagnosis"</span> accepted by IEEE TNNLS.',
      zh: '论文<span class="hl">《Hypergraph Foundation Model for Brain Disease Diagnosis》</span>被 IEEE TNNLS 录用。',
    },
    badge: 'IEEE TNNLS',
  },
  {
    date: { en: 'Feb. 2025', zh: '2025.02' },
    html: {
      en: 'Paper <span class="hl">"Mode Hypergraph Neural Network"</span> accepted by IEEE TNNLS.',
      zh: '论文<span class="hl">《Mode Hypergraph Neural Network》</span>被 IEEE TNNLS 录用。',
    },
    badge: 'IEEE TNNLS',
  },
  {
    date: { en: 'Jan. 2025', zh: '2025.01' },
    html: {
      en: 'Paper <span class="hl">"Beyond Graphs"</span> accepted by ICLR 2025.',
      zh: '论文<span class="hl">《Beyond Graphs》</span>被 ICLR 2025 录用。',
    },
    badge: 'ICLR',
  },
  {
    date: { en: 'Jan. 2025', zh: '2025.01' },
    html: {
      en: 'Paper <span class="hl">"Residual Fuzzy Alignment on Hypergraph"</span> accepted by IEEE TMM.',
      zh: '论文<span class="hl">《Residual Fuzzy Alignment on Hypergraph》</span>被 IEEE TMM 录用。',
    },
    badge: 'IEEE TMM',
  },
  {
    date: { en: 'Dec. 2024', zh: '2024.12' },
    html: {
      en: '<span class="hl">Two papers</span> (Hyper-YOLO, Cross-Modal 3D Shape Retrieval) accepted by <span class="hl">IEEE TPAMI</span>.',
      zh: '<span class="hl">两篇论文</span>（Hyper-YOLO、Cross-Modal 3D Shape Retrieval）被 <span class="hl">IEEE TPAMI</span> 录用。',
    },
    badge: 'IEEE TPAMI ×2',
  },
  {
    date: { en: 'Nov. 2024', zh: '2024.11' },
    html: {
      en: 'Paper <span class="hl">"Hypergraph-Based Remaining Prototype Alignment"</span> accepted by IEEE TMM.',
      zh: '论文<span class="hl">《Hypergraph-Based Remaining Prototype Alignment》</span>被 IEEE TMM 录用。',
    },
    badge: 'IEEE TMM',
  },
  {
    date: { en: 'Dec. 2024', zh: '2024.12' },
    html: {
      en: 'Received the <span class="hl">First-class Comprehensive Excellence Scholarship</span>, Tsinghua University (third consecutive year, 2022–2024).',
      zh: '获<span class="hl">清华大学综合优秀奖学金（一等）</span>（连续三年，2022–2024）。',
    },
    badge: 'Award',
  },
  {
    date: { en: 'Sep. 2024', zh: '2024.09' },
    html: {
      en: '<span class="hl">Three papers</span> accepted by NeurIPS 2024.',
      zh: '<span class="hl">三篇论文</span>被 NeurIPS 2024 录用。',
    },
    badge: 'NeurIPS ×3',
  },
  {
    date: { en: 'Jul. 2024', zh: '2024.07' },
    html: {
      en: 'Received the <span class="hl">ICME 2024 Best Student Paper Award</span>.',
      zh: '获 <span class="hl">ICME 2024 最佳学生论文奖</span>。',
    },
    badge: 'Award',
  },
  {
    date: { en: 'May. 2024', zh: '2024.05' },
    html: {
      en: 'Awarded the <span class="hl">NSFC Young Student Basic Research Program (PhD Candidate)</span>, first cohort.',
      zh: '获批<span class="hl">首批国家自然科学基金青年学生基础研究项目（博士研究生）</span>。',
    },
    badge: 'NSFC',
  },
  {
    date: { en: 'Apr. 2024', zh: '2024.04' },
    html: {
      en: 'Won the <span class="hl">Silver Medal</span> at the Geneva International Exhibition of Inventions (student first).',
      zh: '获<span class="hl">日内瓦国际发明展银奖</span>（学生第一）。',
    },
    badge: 'Award',
  },
  {
    date: { en: 'Apr. 2024', zh: '2024.04' },
    html: {
      en: 'One paper accepted by <span class="hl">IJCAI 2024</span>.',
      zh: '一篇论文被 <span class="hl">IJCAI 2024</span> 录用。',
    },
    badge: 'IJCAI',
  },
  {
    date: { en: 'Apr. 2024', zh: '2024.04' },
    html: {
      en: 'One paper accepted by <span class="hl">IEEE TIP</span>.',
      zh: '一篇论文被 <span class="hl">IEEE TIP</span> 录用。',
    },
    badge: 'IEEE TIP',
  },
  {
    date: { en: 'Feb. 2024', zh: '2024.02' },
    html: {
      en: '<a href="https://github.com/iMoonLab/DeepHypergraph/releases/tag/v0.9.4" target="_blank" rel="noopener">v0.9.4</a> of <a href="http://deephypergraph.com/" target="_blank" rel="noopener">DHG</a> released: 6 new hypergraph datasets and bug fixes.',
      zh: '<a href="http://deephypergraph.com/" target="_blank" rel="noopener">DHG</a> <a href="https://github.com/iMoonLab/DeepHypergraph/releases/tag/v0.9.4" target="_blank" rel="noopener">v0.9.4</a> 发布：新增 6 个超图数据集并修复已知问题。',
    },
    badge: 'Release',
  },
  {
    date: { en: 'Jan. 2024', zh: '2024.01' },
    html: {
      en: '<span class="hl">Two papers</span> accepted by ICLR 2024.',
      zh: '<span class="hl">两篇论文</span>被 ICLR 2024 录用。',
    },
    badge: 'ICLR',
  },
  {
    date: { en: 'Dec. 2023', zh: '2023.12' },
    html: {
      en: 'Named <span class="hl">Person of the Year 2023 (Research Innovation)</span>, School of Software, Tsinghua University.',
      zh: '获评<span class="hl">清华大学软件学院 2023 年度人物（科研创新）</span>。',
    },
    badge: 'Award',
  },
  {
    date: { en: 'Dec. 2023', zh: '2023.12' },
    html: {
      en: 'One paper accepted by <span class="hl">IEEE TPAMI</span>.',
      zh: '一篇论文被 <span class="hl">IEEE TPAMI</span> 录用。',
    },
    badge: 'IEEE TPAMI',
  },
  {
    date: { en: 'Nov. 2023', zh: '2023.11' },
    html: {
      en: 'One paper accepted by <span class="hl">IEEE TPAMI</span>.',
      zh: '一篇论文被 <span class="hl">IEEE TPAMI</span> 录用。',
    },
    badge: 'IEEE TPAMI',
  },
  {
    date: { en: 'Oct. 2023', zh: '2023.10' },
    html: {
      en: 'Invited talk at <a href="https://mp.weixin.qq.com/s/2mSlWBu7NYo88SjFD8Wn8Q" target="_blank" rel="noopener">PRCV 2023</a>: Hypergraph Computation — Methods and Applications.',
      zh: '受邀在 <a href="https://mp.weixin.qq.com/s/2mSlWBu7NYo88SjFD8Wn8Q" target="_blank" rel="noopener">PRCV 2023</a> 作报告《超图计算：方法与应用》。',
    },
    badge: 'Talk',
  },
  {
    date: { en: 'Oct. 2023', zh: '2023.10' },
    html: {
      en: 'One paper accepted by <span class="hl">IEEE TNNLS</span>.',
      zh: '一篇论文被 <span class="hl">IEEE TNNLS</span> 录用。',
    },
    badge: 'IEEE TNNLS',
  },
  {
    date: { en: 'Dec. 2022', zh: '2022.12' },
    html: {
      en: '<a href="https://github.com/iMoonLab/DeepHypergraph/releases/tag/v0.9.3" target="_blank" rel="noopener">v0.9.3</a> of <a href="http://deephypergraph.com/" target="_blank" rel="noopener">DHG</a> released: a new hypergraph dataset, bug fixes, and new hypergraph operations.',
      zh: '<a href="http://deephypergraph.com/" target="_blank" rel="noopener">DHG</a> <a href="https://github.com/iMoonLab/DeepHypergraph/releases/tag/v0.9.3" target="_blank" rel="noopener">v0.9.3</a> 发布：新增 1 个超图数据集、修复已知问题并新增部分超图操作。',
    },
    badge: 'Release',
  },
  {
    date: { en: 'Sep. 2022', zh: '2022.09' },
    html: {
      en: '<a href="https://github.com/iMoonLab/DeepHypergraph/releases/tag/v0.9.2" target="_blank" rel="noopener">v0.9.2</a> of <a href="http://deephypergraph.com/" target="_blank" rel="noopener">DHG</a> released: 21 datasets, 6 SOTA methods, and structure/feature visualizations.',
      zh: '<a href="http://deephypergraph.com/" target="_blank" rel="noopener">DHG</a> <a href="https://github.com/iMoonLab/DeepHypergraph/releases/tag/v0.9.2" target="_blank" rel="noopener">v0.9.2</a> 发布：新增 21 个数据集、6 个 SOTA 方法以及结构与特征可视化。',
    },
    badge: 'Release',
  },
  {
    date: { en: 'Sep. 2022', zh: '2022.09' },
    html: {
      en: 'One paper accepted by <span class="hl">IEEE TPAMI</span>.',
      zh: '一篇论文被 <span class="hl">IEEE TPAMI</span> 录用。',
    },
    badge: 'IEEE TPAMI',
  },
  {
    date: { en: 'Sep. 2022', zh: '2022.09' },
    html: {
      en: 'Talk at <a href="https://www.micc.unifi.it/3dor2022/" target="_blank" rel="noopener">3DOR 2022</a> on Open-Set 3D Object Retrieval.',
      zh: '在 <a href="https://www.micc.unifi.it/3dor2022/" target="_blank" rel="noopener">3DOR 2022</a> 作报告：开放集 3D 物体检索。',
    },
    badge: 'Talk',
  },
  {
    date: { en: 'Aug. 2022', zh: '2022.08' },
    html: {
      en: 'First version <a href="https://github.com/iMoonLab/DeepHypergraph/releases/tag/v0.9.1" target="_blank" rel="noopener">v0.9.1</a> of <a href="http://deephypergraph.com/" target="_blank" rel="noopener">DeepHypergraph (DHG)</a> released.',
      zh: '发布 <a href="http://deephypergraph.com/" target="_blank" rel="noopener">DeepHypergraph (DHG)</a> 首个版本 <a href="https://github.com/iMoonLab/DeepHypergraph/releases/tag/v0.9.1" target="_blank" rel="noopener">v0.9.1</a>。',
    },
    badge: 'Release',
  },
  {
    date: { en: 'Jul. 2022', zh: '2022.07' },
    html: {
      en: 'One paper accepted by <span class="hl">Computers &amp; Graphics</span>.',
      zh: '一篇论文被 <span class="hl">Computers &amp; Graphics</span> 录用。',
    },
    badge: 'C&G',
  },
  {
    date: { en: 'Jun. 2022', zh: '2022.06' },
    html: {
      en: 'Built an online multi-modal 3D object retrieval system — welcome to <a href="https://moon-lab.tech/vors" target="_blank" rel="noopener">play</a>.',
      zh: '开发在线多模态 3D 物体检索系统，欢迎<a href="https://moon-lab.tech/vors" target="_blank" rel="noopener">体验</a>。',
    },
    badge: 'Demo',
  },
  {
    date: { en: 'May. 2022', zh: '2022.05' },
    html: {
      en: 'One paper accepted by <span class="hl">IEEE TPAMI</span>.',
      zh: '一篇论文被 <span class="hl">IEEE TPAMI</span> 录用。',
    },
    badge: 'IEEE TPAMI',
  },
  {
    date: { en: 'Feb. 2022', zh: '2022.02' },
    html: {
      en: 'Organizing the track "<a href="https://www.moon-lab.tech/shrec22" target="_blank" rel="noopener">Open-Set 3D Object Retrieval</a>" at SHREC\'22.',
      zh: '在 SHREC\'22 组织 Track「<a href="https://www.moon-lab.tech/shrec22" target="_blank" rel="noopener">Open-Set 3D Object Retrieval</a>」。',
    },
    badge: 'Track',
  },
];
