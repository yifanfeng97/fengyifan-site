import type { I18n } from './ui';

export interface AwardItem {
  /** Display string: '2026.06' for a specific month, '2024 — 2025' for a range. */
  year: string;
  name: I18n;
  sub?: I18n;
}

// From the CV (丰一帆-简历.docx 荣誉奖励), newest first.
// Top 2% Scientists list is released by Stanford/Elsevier every September.
export const awards: AwardItem[] = [
  {
    year: '2026.06',
    name: {
      en: 'Postdoctoral Innovation Talent Support Program (BX Program)',
      zh: '博士后创新人才支持计划',
    },
    sub: { en: 'BX Program', zh: '博新计划' },
  },
  {
    year: '2026.01',
    name: {
      en: 'CSIG Doctoral Dissertation Incentive Program',
      zh: '中国图像图形学学会博士学位论文激励计划',
    },
    sub: { en: 'Nomination', zh: '提名' },
  },
  {
    year: '2025.09',
    name: { en: "World's Top 2% Scientists", zh: '全球前 2% 顶尖科学家' },
  },
  {
    year: '2025.07',
    name: { en: 'Shuimu Tsinghua Scholar', zh: '清华大学水木学者' },
  },
  {
    year: '2025.06',
    name: { en: 'Tsinghua University Academic Rising Star', zh: '清华大学学术新秀' },
    sub: { en: '10 recipients university-wide', zh: '全校仅 10 人' },
  },
  {
    year: '2025.06',
    name: { en: 'Beijing Outstanding Graduate', zh: '北京市优秀毕业生' },
  },
  {
    year: '2024.12',
    name: {
      en: 'First-class Comprehensive Excellence Scholarship, Tsinghua University',
      zh: '清华大学综合优秀奖学金',
    },
    sub: { en: 'First class', zh: '一等' },
  },
  {
    year: '2024.09',
    name: { en: "World's Top 2% Scientists", zh: '全球前 2% 顶尖科学家' },
  },
  {
    year: '2024.07',
    name: { en: 'ICME 2024 Best Student Paper Award', zh: 'ICME 2024 最佳学生论文奖' },
  },
  {
    year: '2024.05',
    name: {
      en: 'NSFC Young Student Basic Research Program (PhD Candidate), First Cohort',
      zh: '首批国家自然科学基金青年学生基础研究项目（博士研究生）',
    },
  },
  {
    year: '2024.04',
    name: {
      en: 'Silver Medal, Geneva International Exhibition of Inventions',
      zh: '日内瓦国际发明展银奖',
    },
    sub: { en: 'Student first', zh: '学生第一' },
  },
  {
    year: '2024.01',
    name: {
      en: 'Person of the Year 2023 (Research Innovation), School of Software, Tsinghua University',
      zh: '清华大学软件学院 2023 年度人物',
    },
    sub: { en: 'Research Innovation', zh: '科研创新' },
  },
  {
    year: '2023.12',
    name: {
      en: 'First-class Comprehensive Excellence Scholarship, Tsinghua University',
      zh: '清华大学综合优秀奖学金',
    },
    sub: { en: 'First class', zh: '一等' },
  },
  {
    year: '2022.12',
    name: {
      en: 'First-class Comprehensive Excellence Scholarship, Tsinghua University',
      zh: '清华大学综合优秀奖学金',
    },
    sub: { en: 'First class', zh: '一等' },
  },
];
