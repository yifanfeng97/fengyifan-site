import type { I18n } from './ui';

export interface GrantItem {
  years: string;
  name: I18n;
  /** Project title (课题名称). */
  title: I18n;
  /** Funding amount. */
  fund: I18n;
  role: I18n;
}

// From the CV (丰一帆-简历.docx 在研项目), newest first.
export const grants: GrantItem[] = [
  {
    years: '2027 — 2029',
    name: {
      en: 'General Program, National Natural Science Foundation of China (NSFC)',
      zh: '国家自然科学基金面上项目',
    },
    title: {
      en: 'Hypergraph-Driven Cognitive Enhancement of Large Language Models in Low-Resource Scenarios',
      zh: '低资源场景下超图驱动的大模型认知增强机制研究',
    },
    fund: { en: '¥500K', zh: '50 万元' },
    role: { en: 'PI', zh: '主持' },
  },
  {
    years: '2026 — 2027',
    name: {
      en: 'Postdoctoral Innovation Talent Support Program',
      zh: '博士后创新人才支持计划（博新计划）',
    },
    title: {
      en: 'Hypergraph-Driven Hallucination Suppression for Large Language Models in Under-Determined Environments',
      zh: '欠定环境下超图驱动的大模型幻觉抑制机制研究',
    },
    fund: { en: '¥640K', zh: '64 万元' },
    role: { en: 'PI', zh: '主持' },
  },
  {
    years: '2025 — 2029',
    name: {
      en: 'Sub-project, National Science and Technology Major Project',
      zh: '国家科技重大专项子课题',
    },
    title: {
      en: 'Decoding Tumor Immunotherapy Resistance Mechanisms and AI-Driven Intervention Strategies',
      zh: '肿瘤免疫治疗耐药机制解析与 AI 驱动的干预策略研究',
    },
    fund: { en: '¥1M', zh: '100 万元' },
    role: { en: 'PI', zh: '主持' },
  },
  {
    years: '2024 — 2026',
    name: {
      en: 'Young Student Basic Research Program (Doctoral Student), NSFC',
      zh: '国家自然科学基金青年学生基础研究项目（博士研究生）',
    },
    title: {
      en: 'High-Order Correlation Based 3D Protein Structure Modeling and Analysis',
      zh: '基于高阶关联的蛋白质三维结构建模与分析',
    },
    fund: { en: '¥300K', zh: '30 万元' },
    role: { en: 'PI', zh: '主持' },
  },
  {
    years: '2026 — 2030',
    name: {
      en: 'National Science and Technology Major Project',
      zh: '国家科技重大专项',
    },
    title: {
      en: 'Brain-Inspired Hypergraph Foundation Model Based on Neural Computing Mechanisms',
      zh: '基于神经计算机制的类脑超图大模型研究',
    },
    fund: { en: '¥5M', zh: '500 万元' },
    role: { en: 'Participant', zh: '参与' },
  },
];
