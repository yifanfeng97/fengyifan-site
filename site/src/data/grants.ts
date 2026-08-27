import type { I18n } from './ui';

export interface GrantItem {
  years: string;
  name: I18n;
  role: I18n;
}

export const grants: GrantItem[] = [
  {
    years: '2027 — 2029',
    name: {
      en: 'General Program, National Natural Science Foundation of China (NSFC)',
      zh: '国家自然科学基金面上项目',
    },
    role: { en: 'PI', zh: '主持' },
  },
  {
    years: '2026 — 2027',
    name: {
      en: 'Postdoctoral Innovation Talent Support Program',
      zh: '博士后创新人才支持计划（博新计划）',
    },
    role: { en: 'PI', zh: '主持' },
  },
  {
    years: '2025 — 2029',
    name: {
      en: 'Sub-project, National Science and Technology Major Project',
      zh: '国家科技重大专项子课题',
    },
    role: { en: 'PI', zh: '主持' },
  },
  {
    years: '2024 — 2026',
    name: {
      en: 'Young Student Basic Research Program (Doctoral Student), NSFC',
      zh: '国家自然科学基金青年学生基础研究项目（博士研究生）',
    },
    role: { en: 'PI', zh: '主持' },
  },
];
