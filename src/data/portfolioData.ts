import { Project, ExperienceItem, SkillItem } from '../types';

export const HERO_IMAGE = 'https://lh3.googleusercontent.com/aida-public/AB6AXuALIPCHTCqix-hDNIBgBaIaISeQKUFf_bzVn3xBzwDzZU7-9NfgmkIn860SMWtVeZC9Iz99DiP2YNElGDqeJEk3EK4yaZtYYrqRGrSV8_Qt9Ep7qo9X_7MFRKEXR4b3vuaBDX1z_sirG8JGcKqrmF996iZ4_0-Yj6GWwiZgTHdK2PcremNj5ipgfW3204LDoW3LQ96yIBEsCDFaroVhIDHJWSuCNGI9EXKsdDyENpd7zcfBKvsV2-4OHg';

export const ABOUT_IMAGE = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCPbfNXevURvOJpyMKwBAOpYdk24jpV55HFHjEutVvvZ_FjiUKWkT1mMb59qFTTTd5Yzp__xjGslgQRPHHM3lFSsv3V7QMEbHD8LBQgce8jkuaMzmrFTpwIPqciD3hO1_lV6pEGgp0ldaZwKFP70GZvt9sYqldunGvLKbNzemdCC2ZKnEIc6xV-975jH9rRNQNgzgAoKFWxpdadapW4HHL-DeC4AcTG3-wr8NCQ_xY6-q4p-9hV9J3YAA';

export const PROJECTS: Project[] = [
  {
    id: 'moma-redesign',
    title: 'Modern Art Museum Redesign',
    client: 'MOMA',
    role: 'Lead Designer & Engineer',
    year: '2023',
    category: 'WEB',
    tags: ['REACT', 'NEXT.JS', 'TAILWIND CSS'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBELrkP6OdLGR536ftsPv6dTKWp-9cNyfjev3TqFLXdRt1kiFPn5vd8PkyNouAZoM48HqV65RoDbF0XL7eMz5ZjfMV0SbK8zsDmezLDX9Cfuxqa-Y4YugEYuss4Cf7GIx6ISuS_v1otuI2S0yqi_xyulLuIj_EPti3nrr-3fDosg0mTiIQ6j-4ukxsw346jRJ_KrxWIGPLigVYyuspJLohbLBFCL9eeFTCJ_82DoTY2qr8fNKUVUKkH5g',
    shortDescription: 'A complete digital transformation focusing on a tactile, app-like experience for web visitors.',
    fullDescription: 'A complete digital transformation for the Modern Art Museum, focusing on a tactile, app-like experience for web visitors. The project involved rethinking the ticketing flow, digitizing the archival collection, and creating an immersive editorial experience that mirrors the physical space\'s architectural elegance.',
    techStack: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Three.js'],
    highlights: [
      {
        title: 'Immersive Discovery',
        description: 'Created a fluid, spatial navigation system allowing users to browse the collection as if walking through the physical galleries.',
        icon: 'auto_awesome'
      },
      {
        title: 'Optimized Performance',
        description: 'Achieved a perfect lighthouse score despite heavy WebGL usage, ensuring a smooth experience across all devices.',
        icon: 'speed'
      }
    ],
    liveUrl: 'https://moma.org',
    caseStudyUrl: '#case-study-moma',
    featured: true,
  },
  {
    id: 'fintech-vision',
    title: 'Fintech Vision',
    client: 'Apex Financial',
    role: 'Mobile Architect',
    year: '2023',
    category: 'MOBILE',
    tags: ['REACT NATIVE', 'UX DESIGN'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCy88xSWe9mEiPhUEuPLoNpLN7kjBjWtD3d3cKy-hv-vz6iU8tmuEtFpJZtah2HKnP0RjgUtBuT1jrCLhet5czse9vLIwBhnWOl4kXtBveE4f3sYhTEGeuUlWAdIH_slDrB-TQwLu3Mdd7G4WkfidqqCqnGaI5gqYzBfXfoXA0bmbtwQpIEAQN32YcgfqZK9528RX-CGTnce4_30lFgHOE6LxV8U780kastLxsEzVZM4yKSUzxg7C3Lgg',
    shortDescription: 'Next-generation mobile banking experience built with warm cream aesthetics and biometrics.',
    fullDescription: 'A sleek, modern mobile banking application interface built with warm cream backgrounds, bold serif typography, and tactile burnt terracotta buttons. Features real-time transaction streaming and effortless international fund transfers.',
    techStack: ['React Native', 'Expo', 'TypeScript', 'Tailwind', 'Reanimated'],
    highlights: [
      {
        title: 'Biometric Security',
        description: 'Zero-friction FaceID & TouchID authentication pipeline with hardware enclave encryption.',
        icon: 'fingerprint'
      },
      {
        title: 'Tactile Micro-interactions',
        description: 'Haptic feedback tuned to feel like physical button presses on high-frequency transactions.',
        icon: 'touch_app'
      }
    ],
    liveUrl: 'https://fintechvision.app',
    featured: true,
  },
  {
    id: 'artisan-roasters',
    title: 'Artisan Roasters',
    client: 'Stillwater Coffee',
    role: 'Creative Developer',
    year: '2023',
    category: 'WEB',
    tags: ['NEXT.JS', 'TAILWIND'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuABrlbBYDwad3f8_qMnzni7CtClZU6WJlkE-nhiba5ZTcL9mvpzSm_IPgcCNJmRGTb6qgW5V9Dw4PeBu1ilsHgOeKBSkhuQj0RunLXxsyhRSy82AtoGsxDkC_Q7TfOOl-lydIAPNJRLGRJCTbmAmdfkdojXz3KBtzBVCX1OHKZx7UrrN_K2jAHyKUatVvte8mwaXpMJU5frI6YZZ2UMp2aceidhw5DpgXsO8b_bhgaWnl2TT75242O8tQ',
    shortDescription: 'An artisanal coffee e-commerce showcase featuring rich storytelling and single-origin roast selector.',
    fullDescription: 'An editorial showcase of an artisanal coffee shop website shown on a minimalist tablet. The design uses heavy whitespace, fluid grid layouts, and high-contrast espresso-colored serif text over warm cream backgrounds.',
    techStack: ['Next.js 14', 'Tailwind CSS', 'Shopify Storefront API', 'Framer Motion'],
    highlights: [
      {
        title: 'Roast Selector',
        description: 'Interactive flavor profile radar chart helping customers find their exact single-origin bean preferences.',
        icon: 'coffee'
      },
      {
        title: 'Sub-second Checkout',
        description: 'Integrated Apple Pay & Google Pay for seamless mobile single-tap coffee subscriptions.',
        icon: 'shopping_bag'
      }
    ],
    liveUrl: 'https://artisanroasters.com',
    featured: true,
  },
  {
    id: 'luxe-real-estate',
    title: 'Luxe Real Estate',
    client: 'Elite Estates',
    role: 'Fullstack Lead',
    year: '2022',
    category: 'UI',
    tags: ['VUE.JS', 'WEBGL'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCQpoWDS-JlsM1WlhW1czMC37s7MfiKhRG6kMFKB66lxfSZBmFUJotHlFoAjCmVrKbIpQcqn0OPjDTFdE9yIuE0HfJPLqkWSakryKKPLkXcd5nchwR59CjwBwi_5fxGqzC4xHNPPgH98R--sY2qNWlZtd3ALb2exWsekW5iPieWvRjDffg6tSMNBeorPtSozkYkBBqtSa5iZ3iV2i0CMBal85zRc6rCcCssZyQYldR3gjcbqPCCGm3pwA',
    shortDescription: 'A luxury real estate dashboard with interactive 3D spatial walkthroughs and real-time telemetry.',
    fullDescription: 'A sophisticated dashboard interface for a luxury real estate platform. The UI features asymmetrical bento grid layouts, glassmorphism cards, and thin warm gray dividers against a soft cream background.',
    techStack: ['Vue.js 3', 'Three.js', 'WebGL', 'Tailwind CSS', 'D3.js'],
    highlights: [
      {
        title: '3D Floorplan Viewer',
        description: 'Photorealistic WebGL render of high-value architectural properties with ambient light simulations.',
        icon: 'view_in_ar'
      },
      {
        title: 'Market Intelligence',
        description: 'Predictive valuation analytics with interactive charts and regional demographic heatmaps.',
        icon: 'insights'
      }
    ],
    liveUrl: 'https://luxerealestate.com',
    featured: true,
  },
  {
    id: 'tactile-synth',
    title: 'Tactile Sound Engine',
    client: 'AudioLab Studio',
    role: 'Audio/UI Engineer',
    year: '2022',
    category: 'WEB',
    tags: ['REACT', 'WEB AUDIO'],
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1200&auto=format&fit=crop',
    shortDescription: 'In-browser analog synthesizer synthesizer with real-time WebAudio WebGL waveform visualizers.',
    fullDescription: 'An interactive audio workstation built natively for browser environments. Features multi-oscillator polyphonic synthesis, physical modeled filters, and customizable macro knobs.',
    techStack: ['React', 'Web Audio API', 'Canvas API', 'Tailwind CSS'],
    highlights: [
      {
        title: 'Low Latency Audio',
        description: 'Sub-10ms audio buffer processing using AudioWorklet nodes for immediate keyboard response.',
        icon: 'graphic_eq'
      }
    ],
    liveUrl: 'https://tactilesynth.io',
    featured: false,
  },
  {
    id: 'editorial-journal',
    title: 'Editorial Publishing CMS',
    client: 'Monocle Press',
    role: 'Fullstack Engineer',
    year: '2021',
    category: 'UI',
    tags: ['TYPESCRIPT', 'GRAPHQL'],
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1200&auto=format&fit=crop',
    shortDescription: 'Headless publishing engine designed specifically for long-form editorial essays and digital zines.',
    fullDescription: 'Designed and engineered for prestigious publishing houses requiring rich typography controls, real-time co-authoring, and automated print PDF layout generation.',
    techStack: ['TypeScript', 'GraphQL', 'Tailwind CSS', 'PostgreSQL'],
    highlights: [
      {
        title: 'Distraction-Free Editor',
        description: 'ProseMirror powered block editor supporting custom typographical scales and footnotes.',
        icon: 'edit_note'
      }
    ],
    liveUrl: 'https://editorialjournal.dev',
    featured: false,
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Senior Frontend Engineer',
    period: '2021 — PRESENT',
    description: 'Leading UI architecture for premium FinTech applications. Focused on micro-interactions, performance optimization, and bridging the gap between design and engineering.'
  },
  {
    id: 'exp-2',
    role: 'Creative Developer',
    period: '2018 — 2021',
    description: 'Developed award-winning marketing sites and interactive web experiences for boutique agencies. Specialized in WebGL and complex CSS animations.'
  },
  {
    id: 'exp-3',
    role: 'UI Designer',
    period: '2015 — 2018',
    description: 'Started career in product design, establishing a strong foundation in typography, layout, and user empathy before transitioning to code.'
  }
];

export const SKILLS: SkillItem[] = [
  { name: 'React & Next.js', level: 'expert', category: 'Frontend' },
  { name: 'TypeScript', level: 'expert', category: 'Language' },
  { name: 'CSS Architecture', level: 'expert', category: 'Styling' },
  { name: 'WebGL & Three.js', level: 'advanced', category: 'Creative' },
  { name: 'Figma', level: 'advanced', category: 'Design' },
  { name: 'Framer Motion', level: 'advanced', category: 'Animation' },
  { name: 'Node.js & Express', level: 'advanced', category: 'Backend' },
  { name: 'Python', level: 'proficient', category: 'Language' },
  { name: 'GraphQL', level: 'proficient', category: 'Data' },
  { name: 'AWS & Cloud Run', level: 'proficient', category: 'DevOps' },
  { name: 'Docker', level: 'proficient', category: 'DevOps' }
];
