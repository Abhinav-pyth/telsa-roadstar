export interface Source {
  id: string;
  name: string;
  title: string;
  url: string;
  date: string;
  summary: string;
  type: 'official' | 'media';
}

export interface VideoSource {
  id: string;
  title: string;
  source: string;
  date: string;
  url: string;
  thumbnail?: string;
  description: string;
  embeddable: boolean;
}

export const sources: Source[] = [
  {
    id: 'tesla-official',
    name: 'Tesla (Official)',
    title: 'Tesla Roadster — Official Vehicle Page',
    url: 'https://www.tesla.com/roadster',
    date: '2026',
    summary: 'Official Tesla Roadster product page with vehicle information, design details, and reservation links. Primary source for Tesla\'s stated specifications and configuration options.',
    type: 'official',
  },
  {
    id: 'tesla-india',
    name: 'Tesla India (Official)',
    title: 'Tesla Roadster — India Page',
    url: 'https://www.tesla.com/en_in/roadster',
    date: '2026',
    summary: 'Tesla\'s India-specific Roadster page. Currently does not list Indian pricing, availability dates, or on-road costs.',
    type: 'official',
  },
  {
    id: 'tesla-reserve',
    name: 'Tesla (Official)',
    title: 'Tesla Roadster Reservation Page',
    url: 'https://www.tesla.com/roadster/reserve#payment',
    date: '2026',
    summary: 'Official reservation page showing deposit amounts for Performance ($50,000) and Thrust ($250,000) configurations. Rocket configuration listed as invitation-only.',
    type: 'official',
  },
  {
    id: 'reuters',
    name: 'Reuters',
    title: 'Tesla set to unveil next-generation Roadster sports EV after years of delay',
    url: 'https://www.reuters.com/business/autos-transportation/tesla-set-unveil-next-generation-roadster-sports-ev-after-years-delay-2026-10-15/',
    date: 'October 15, 2026',
    summary: 'Reuters coverage of the Tesla Roadster reveal event, including details about the thruster demonstration, SpaceX collaboration, and production timeline. Provides independent reporting on Tesla\'s claims.',
    type: 'media',
  },
  {
    id: 'techcrunch',
    name: 'TechCrunch',
    title: 'Tesla reveals SpaceX-powered Roadster that flies and falls with style',
    url: 'https://techcrunch.com/2026/10/15/tesla-reveals-spacex-powered-roadster-that-flies-and-falls-with-style/',
    date: 'October 15, 2026',
    summary: 'TechCrunch\'s detailed coverage of the Roadster demonstration, including analysis of the thruster technology, aerial maneuver details, and engineering context. Notes the distinction between demonstration and practical flight.',
    type: 'media',
  },
  {
    id: 'ap',
    name: 'Associated Press',
    title: 'Tesla Musk Roadster Rocket demonstration coverage',
    url: 'https://apnews.com/article/tesla-musk-roadster-rocket-7d5f19665435b7408025bfb7a2f2f0b7',
    date: 'October 15, 2026',
    summary: 'Associated Press reporting on the Tesla Roadster rocket demonstration event, providing wire-service coverage of the announcement, demonstration details, and industry context.',
    type: 'media',
  },
];

export const videos: VideoSource[] = [
  {
    id: 'tesla-official-event',
    title: 'Tesla Roadster Official Reveal — October 2026',
    source: 'Tesla (Official)',
    date: 'October 15, 2026',
    url: 'https://www.tesla.com/roadster',
    description: 'Official Tesla Roadster reveal event. Visit Tesla\'s official website for authorized footage of the demonstration and vehicle reveal.',
    embeddable: false,
  },
  {
    id: 'tesla-x',
    title: 'Tesla Official X (Twitter) Account',
    source: 'Tesla (Official)',
    date: 'October 2026',
    url: 'https://x.com/Tesla',
    description: 'Tesla\'s official X account for announcements, demonstration clips, and official media related to the Roadster reveal.',
    embeddable: false,
  },
  {
    id: 'reuters-video',
    title: 'Reuters: Tesla Roadster Demonstration Coverage',
    source: 'Reuters',
    date: 'October 15, 2026',
    url: 'https://www.reuters.com/business/autos-transportation/tesla-set-unveil-next-generation-roadster-sports-ev-after-years-delay-2026-10-15/',
    description: 'Reuters video and written coverage of the Tesla Roadster reveal event, including demonstration footage and expert analysis.',
    embeddable: false,
  },
  {
    id: 'techcrunch-video',
    title: 'TechCrunch: SpaceX-Powered Roadster Analysis',
    source: 'TechCrunch',
    date: 'October 15, 2026',
    url: 'https://techcrunch.com/2026/10/15/tesla-reveals-spacex-powered-roadster-that-flies-and-falls-with-style/',
    description: 'TechCrunch\'s analysis of the Roadster\'s thruster technology and demonstration, with video content and technical breakdown.',
    embeddable: false,
  },
  {
    id: 'ap-coverage',
    title: 'Associated Press: Roadster Rocket Coverage',
    source: 'Associated Press',
    date: 'October 15, 2026',
    url: 'https://apnews.com/article/tesla-musk-roadster-rocket-7d5f19665435b7408025bfb7a2f2f0b7',
    description: 'AP wire coverage of the Tesla Roadster demonstration event with video and photography.',
    embeddable: false,
  },
];
