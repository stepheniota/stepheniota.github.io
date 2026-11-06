// All publications. To add one, copy an entry and edit it.
// `selected: true` also shows the paper on the home page.
// Mark equal contribution with a trailing `*` in the author name.

export type Publication = {
  title: string;
  authors: string[];
  venue: string;
  year: number;
  selected?: boolean;
  links?: Partial<
    Record<'arxiv' | 'pdf' | 'code' | 'website' | 'url' | 'poster' | 'slides', string>
  >;
};

/** How your own name appears in author lists (it gets bolded). */
export const ME = 'Stephen Iota';

export const publications: Publication[] = [
  {
    title:
      'GalilAI: Out-of-Task Distribution Detection using Causal Active Experimentation for Safe Transfer RL',
    authors: [
      'Sumedh A. Sontakke*',
      'Stephen Iota*',
      'Zizhao Hu*',
      'Arash Mehrjou',
      'Laurent Itti',
      'Bernhard Schölkopf',
    ],
    venue: 'AISTATS',
    year: 2022,
    selected: true,
    links: {
      arxiv: 'https://arxiv.org/abs/2110.15489',
      pdf: 'https://proceedings.mlr.press/v151/sontakke22a/sontakke22a.pdf',
      code: 'https://github.com/Galil-AI/GalilAI',
      website: 'https://galil-ai.github.io',
    },
  },
  {
    title: 'Scale-free degree distributions, homophily and the glass ceiling effect in directed networks',
    authors: [
      'Buddhika Nettasinghe',
      'Nazanin Alipourfard',
      'Stephen Iota',
      'Vikram Krishnamurthy',
      'Kristina Lerman',
    ],
    venue: 'Journal of Complex Networks',
    year: 2022,
    selected: true,
    links: {
      url: 'https://doi.org/10.1093/comnet/cnac007',
      pdf: 'https://academic.oup.com/comnet/article-pdf/10/2/cnac007/43221600/cnac007.pdf',
    },
  },
  {
    title: 'Automatic Detection and Classification of Rock Microstructures through Machine Learning',
    authors: [
      'Stephen Iota',
      'Junyi Liu',
      'Ming Lyu',
      'Bolong Pan',
      'Xiaoyu Wang',
      'Yolanda Gil',
      'Wael AbdAlmageed',
      'Gurman Gill',
      'Matty Mookerjee',
    ],
    venue: 'AGU Fall Meeting',
    year: 2021,
    links: {
      url: 'https://doi.org/10.1002/essoar.10508800.1',
      code: 'https://github.com/drizzle98/sigma-clast-project',
      poster:
        'https://figshare.com/articles/figure/Automatic_detection_and_classification_of_rock_microstructures_through_machine_learning/14758575',
    },
  },
  {
    title: 'Micromagnetic Study of Magnon Thermodynamics',
    authors: ['Rudy Rodriguez', 'Stephen Iota', 'M.R.K. Akanda', 'Roger Lake', 'Igor Barsukov'],
    venue: 'EFRC PI Meeting',
    year: 2019,
  },
  {
    title: 'Fiber Detection and Tracking for microCT Analysis of Entry Systems Parachute',
    authors: [
      'Stephen Iota',
      'Mike MacNeil',
      'Francesco Panerai',
      'Dula Parkinson',
      'Harold Barnard',
      'Dani Ushizima',
    ],
    venue: 'ALS User Meeting',
    year: 2018,
    links: {
      poster: 'https://drive.google.com/file/d/1M-TMeE2Pv4qcCTmtendvrjPiJjFDz7Oh/view?usp=sharing',
      slides:
        'https://docs.google.com/presentation/d/1t7lh9jEhgdZ6uH1LsalC24AobCqMEAnjLEKTHGTNiF4/edit?usp=sharing',
    },
  },
];
