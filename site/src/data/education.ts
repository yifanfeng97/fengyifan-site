import type { I18n } from './ui';

export interface EducationItem {
  years: I18n;
  name: I18n;
  sub?: I18n;
}

export const education: EducationItem[] = [
  {
    years: { en: 'Jul. 2025 —', zh: '2025.7 —' },
    name: {
      en: 'Postdoctoral Researcher, School of Software, Tsinghua University',
      zh: '清华大学 · 软件学院 · 博士后',
    },
    sub: { en: 'Supervisor: Yue Gao', zh: '合作导师：高跃' },
  },
  {
    years: { en: 'Sep. 2021 — Jun. 2025', zh: '2021.9 — 2025.6' },
    name: {
      en: 'Ph.D. in Software Engineering, Tsinghua University',
      zh: '清华大学 · 软件工程 · 工学博士',
    },
    sub: { en: 'Supervisor: Yue Gao', zh: '导师：高跃' },
  },
  {
    years: { en: 'Sep. 2018 — Jun. 2021', zh: '2018.9 — 2021.6' },
    name: {
      en: 'M.Eng. in Intelligence Science and Technology, Xiamen University',
      zh: '厦门大学 · 智能科学与技术 · 工学硕士',
    },
    sub: { en: 'Supervisor: Rongrong Ji', zh: '导师：纪荣嵘' },
  },
  {
    years: { en: 'Sep. 2014 — Jun. 2018', zh: '2014.9 — 2018.6' },
    name: {
      en: 'B.Eng. in Computer Science and Technology, Xidian University',
      zh: '西安电子科技大学 · 计算机科学与技术 · 工学学士',
    },
  },
];
