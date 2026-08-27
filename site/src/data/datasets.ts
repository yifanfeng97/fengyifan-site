import type { I18n } from './ui';

export interface DatasetLink {
  label: I18n;
  href: string;
}

export interface DatasetItem {
  name: string;
  desc: I18n;
  size: string;
}

export interface Dataset {
  name: string;
  badges: I18n[];
  desc: I18n;
  /** Optional single illustrative image. */
  image?: { src: string; alt: string };
  /** Optional gallery of figures with captions. */
  figures?: { src: string; caption: string }[];
  /** Optional per-dataset size list. */
  items?: DatasetItem[];
  links: DatasetLink[];
  meta: string;
}

export const datasets: Dataset[] = [
  {
    name: 'OS-MN40 & OS-MN40-Miss',
    badges: ["SHREC'22 Track"],
    desc: {
      en: "Open-set 3D object retrieval datasets built upon ModelNet40, released at the SHREC'22 Track: Open-Set 3D Object Retrieval. OS-MN40 contains 12,309 objects from 40 categories, each with multi-resolution representations in four modalities (point cloud, voxel, multi-view, and mesh); OS-MN40-Miss targets the missing-modality problem, where each modality of an object is randomly dropped with a probability of 0.4.",
      zh: "基于 ModelNet40 构建的开放集 3D 物体检索数据集，于 SHREC'22 Track: Open-Set 3D Object Retrieval 发布。OS-MN40 含 40 类 12,309 个对象，每个对象含四种模态（点云、体素、多视图、Mesh）多分辨率表示；OS-MN40-Miss 面向模态缺失问题，每个对象以 0.4 概率随机丢弃模态。",
    },
    image: {
      src: '/images/datasets/shrec22-track.png',
      alt: "SHREC'22 Open-Set 3D Object Retrieval",
    },
    links: [
      {
        label: { en: 'Track Homepage', zh: 'Track 主页' },
        href: 'https://www.moon-lab.tech/shrec22',
      },
      {
        label: 'OS-MN40 (~46G)',
        href: 'https://data.shrec22.moon-lab.tech:18443/SHREC22/OS-MN40.tar.gz',
      },
      {
        label: 'OS-MN40-Miss (~28G)',
        href: 'https://data.shrec22.moon-lab.tech:18443/SHREC22/OS-MN40-Miss.tar.gz',
      },
      { label: 'Example Code', href: 'https://github.com/yifanfeng97/OS-MN40-Example' },
    ],
    meta: 'moon-lab.tech/shrec22',
  },
  {
    name: 'OS-ESB-core / OS-NTU-core / OS-MN40-core',
    badges: [],
    desc: {
      en: 'Three open-set 3D object retrieval datasets. Each object includes three modalities: multi-view images (256×256), point clouds, and voxels (.ply, extracted with Open3D).',
      zh: '三个开放集 3D 物体检索数据集。每个对象含三种模态：多视图（256×256）、点云、体素（.ply，由 Open3D 提取）。',
    },
    figures: [
      { src: '/images/datasets/vis_esb.jpg', caption: 'OS-ESB-core' },
      { src: '/images/datasets/vis_ntu.jpg', caption: 'OS-NTU-core' },
      { src: '/images/datasets/vis_mn40.jpg', caption: 'OS-MN40-core' },
    ],
    items: [
      {
        name: 'OS-ESB-core',
        desc: { en: '41 categories of engineering shapes', zh: '41 类工程形状' },
        size: '~100M',
      },
      { name: 'OS-NTU-core', desc: { en: '67 categories', zh: '67 类' }, size: '~260M' },
      { name: 'OS-MN40-core', desc: { en: '40 categories', zh: '40 类' }, size: '~1.9G' },
    ],
    links: [
      {
        label: { en: 'Project Homepage', zh: '项目主页' },
        href: 'https://moon-lab.tech/os3dor/',
      },
      { label: 'Dataloader', href: 'https://github.com/yifanfeng97/OS3D' },
    ],
    meta: 'moon-lab.tech/os3dor',
  },
];
