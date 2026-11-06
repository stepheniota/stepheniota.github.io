// Site-wide identity and links. Edit these to change the header, footer, and page titles.

export const site = {
  name: 'Stephen Iota',
  tagline: 'ML/NLP @ Abstract · CS @ USC',
  description:
    'Stephen Iota — Machine Learning Engineer at Abstract Security and CS MSc student at USC.',
  // Email is stored in pieces and assembled in the browser, so the full
  // address never appears in the page HTML (keeps it away from scrapers).
  email: { user: 'iota.stephen', domain: 'gmail.com' },
  resume: '/assets/pdf/resume.pdf',
};

export const socials: { label: string; href: string }[] = [
  { label: 'Scholar', href: 'https://scholar.google.com/citations?user=pl26kBsAAAAJ' },
  { label: 'GitHub', href: 'https://github.com/stepheniota' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/iota' },
  { label: 'Strava', href: 'https://www.strava.com/athletes/59785368' },
];
