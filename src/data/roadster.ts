export interface Variant {
  id: string;
  name: string;
  tagline: string;
  seating: string;
  thrusterEquipment: string;
  intendedUse: string;
  reservationInfo: string;
  regulatoryCaveat: string;
  features: string[];
  highlight?: boolean;
}

export interface Specification {
  label: string;
  value: string;
  metric?: string;
  source: string;
  verified: boolean;
}

export interface TimelineStep {
  step: number;
  title: string;
  description: string;
  detail: string;
}

export interface TechItem {
  id: string;
  title: string;
  icon: string;
  whatItDoes: string;
  howItWorks: string;
  benefits: string;
  limitations: string;
  safety: string;
  source: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const variants: Variant[] = [
  {
    id: 'performance',
    name: 'Performance',
    tagline: 'Road-Ready',
    seating: 'Two seats',
    thrusterEquipment: 'Active aerodynamics and multi-mode suction system',
    intendedUse: 'High-performance road vehicle with experimental grip enhancement',
    reservationInfo: 'Reported US reservation deposit: $50,000',
    regulatoryCaveat: 'Standard road vehicle regulations apply. Final specifications subject to change.',
    features: [
      'Active aerodynamics',
      'Multi-mode suction system',
      'Electric powertrain',
      'Two-seat configuration',
      'Reported sub-1 second 0-60 mph (enhanced config claim)',
    ],
  },
  {
    id: 'thrust',
    name: 'Thrust',
    tagline: 'Race-Ready',
    seating: 'Two seats',
    thrusterEquipment: 'Additional acceleration thrusters beyond Performance configuration',
    intendedUse: 'Track and demonstration use with enhanced thruster capability',
    reservationInfo: 'Reported US reservation deposit: $250,000',
    regulatoryCaveat: 'Not certified for all road use. Enhanced thruster system may require special operating conditions.',
    features: [
      'Everything in Performance',
      'Additional acceleration thrusters',
      'Enhanced aerodynamic systems',
      'Experimental thrust demonstration capability',
      'Two-seat configuration',
    ],
    highlight: true,
  },
  {
    id: 'rocket',
    name: 'Rocket',
    tagline: 'Air-Ready',
    seating: 'Single-seat configuration',
    thrusterEquipment: 'Full experimental flight system including cold-gas thrusters',
    intendedUse: 'Experimental aerial demonstration only — not approved for public-road use',
    reservationInfo: 'Invitation-only availability. No confirmed public reservation amount.',
    regulatoryCaveat: '⚠️ The Rocket configuration\'s experimental flying functionality is NOT approved for public-road use according to reported Tesla disclaimer. This is an experimental demonstration platform, not a certified production aircraft.',
    features: [
      'Full experimental flight system',
      'Cold-gas thrusters for aerial maneuvers',
      'Single-seat configuration',
      'Invitation-only',
      'Experimental aerial demonstration capability',
    ],
  },
];

export const specifications: Specification[] = [
  {
    label: 'Vehicle',
    value: 'Redesigned second-generation Tesla Roadster',
    source: 'Tesla official reveal, October 2026',
    verified: true,
  },
  {
    label: 'Propulsion',
    value: 'Electric vehicle with experimental thruster configurations',
    source: 'Tesla official, media reports',
    verified: true,
  },
  {
    label: 'Acceleration (0–60 mph)',
    value: 'Under 1 second (claimed for enhanced configuration)',
    metric: '< 1.0s',
    source: 'Tesla claim — independently unverified',
    verified: false,
  },
  {
    label: 'Top Speed',
    value: 'Reported above 250 mph (402 km/h)',
    metric: '> 250 mph / 402 km/h',
    source: 'Tesla/media reports — independently unverified',
    verified: false,
  },
  {
    label: 'Range',
    value: 'Reported above 620 miles (1,000 km)',
    metric: '> 620 mi / 1,000 km',
    source: 'Tesla/media reports — independently unverified',
    verified: false,
  },
  {
    label: 'Demonstration',
    value: 'Brief aerial maneuvers using cold-gas thrusters',
    source: 'October 15, 2026 event observation',
    verified: true,
  },
  {
    label: 'Production Target',
    value: '2028 (target — subject to change)',
    source: 'Tesla announcement',
    verified: false,
  },
  {
    label: 'Final Retail Price',
    value: 'Not officially announced',
    source: 'No official pricing released',
    verified: true,
  },
];

export const demoTimeline: TimelineStep[] = [
  {
    step: 1,
    title: 'Active Aerodynamics & Surface Suction',
    description: 'The vehicle engaged its suction system to maintain grip on a specially designed surface, using fans and pressure differentials to create adhesion.',
    detail: 'Multi-mode suction system activated',
  },
  {
    step: 2,
    title: 'Experimental Thruster Activation',
    description: 'Cold-gas thrusters — using compressed gas expelled through nozzles — were activated to generate upward and directional thrust.',
    detail: 'SpaceX-inspired cold-gas thruster technology',
  },
  {
    step: 3,
    title: 'Brief Aerial Maneuver',
    description: 'The vehicle performed a brief aerial rotation, demonstrating the thrusters\' ability to momentarily lift and reposition the vehicle.',
    detail: 'Aerial rotation and repositioning demonstrated',
  },
  {
    step: 4,
    title: 'Landing & Demonstration Conclusion',
    description: 'The vehicle returned to the surface, completing the demonstration sequence. This was a controlled showcase, not sustained flight.',
    detail: 'Controlled landing on demonstration surface',
  },
];

export const technologies: TechItem[] = [
  {
    id: 'cold-gas',
    title: 'Cold-Gas Thrusters',
    icon: 'flame',
    whatItDoes: 'Generate brief thrust by expelling compressed gas through nozzles, enabling momentary vehicle movement and aerial repositioning.',
    howItWorks: 'High-pressure gas (typically nitrogen or similar inert gas) is stored in tanks and released through precision nozzles. The expelled gas creates thrust via Newton\'s third law. Unlike rocket engines, no combustion occurs — hence "cold gas."',
    benefits: 'Precise thrust control, no combustion byproducts, relatively simple mechanical design, proven in spacecraft attitude control.',
    limitations: 'Limited total impulse due to finite gas supply. Not suitable for sustained flight or significant altitude gain. Gas must be replenished between uses.',
    safety: 'Requires high-pressure gas storage systems. Regulatory approval for road-vehicle integration remains unclear. SpaceX uses similar systems for spacecraft orientation.',
    source: 'SpaceX cold-gas thruster technology; Tesla October 2026 demonstration',
  },
  {
    id: 'suction',
    title: 'Multi-Mode Suction System',
    icon: 'wind',
    whatItDoes: 'Increases vehicle grip on suitable surfaces by using fans and pressure differentials to create downward adhesion force.',
    howItWorks: 'Electrically driven fans create a low-pressure zone beneath the vehicle. Atmospheric pressure above pushes the vehicle down, increasing effective grip. Multiple modes allow different levels of suction for different surfaces and conditions.',
    benefits: 'Enhanced cornering stability, improved braking performance on suitable surfaces, potential for controlled surface transitions.',
    limitations: 'Requires relatively smooth, sealed surfaces to function effectively. Performance degrades on rough or porous surfaces. Adds weight and complexity.',
    safety: 'System failure during high-speed operation could result in sudden loss of enhanced grip. Surface requirements limit where the system can operate.',
    source: 'Tesla October 2026 demonstration; ground-effect vehicle principles',
  },
  {
    id: 'aero',
    title: 'Active Aerodynamics',
    icon: 'move',
    whatItDoes: 'Movable aerodynamic components adjust airflow around the vehicle to optimize downforce, stability, and drag based on driving conditions.',
    howItWorks: 'Motorized panels, splitters, and wing elements change position in real-time based on speed, steering input, and driving mode. Sensors feed data to control systems that calculate optimal positions.',
    benefits: 'Optimal downforce at high speed, reduced drag at cruising speed, improved stability during braking and cornering.',
    limitations: 'Mechanical complexity adds weight and potential failure points. Moving parts require maintenance. Effectiveness varies with speed.',
    safety: 'System must fail safely — defaulting to a stable aerodynamic configuration. Active systems must not create unexpected handling changes.',
    source: 'Standard high-performance automotive engineering; Tesla Roadster design',
  },
  {
    id: 'collaboration',
    title: 'Tesla × SpaceX Engineering',
    icon: 'rocket',
    whatItDoes: 'Reported collaboration between Tesla and SpaceX to develop experimental thruster and propulsion systems for the Roadster demonstration.',
    howItWorks: 'SpaceX contributes expertise in cold-gas thruster systems, pressure vessel design, and lightweight composite materials developed for spacecraft. Tesla provides vehicle integration, electric powertrain, and control systems.',
    benefits: 'Access to space-grade engineering expertise, lightweight materials, and precision thruster control systems.',
    limitations: 'Spacecraft systems are designed for vacuum operation. Adapting them for atmospheric, road-vehicle use requires significant redesign. Regulatory frameworks for such hybrid systems do not yet exist.',
    safety: 'Integration of spacecraft-derived systems into road vehicles raises novel safety questions. No established regulatory framework exists for consumer vehicles with thruster systems.',
    source: 'Tesla announcement; Reuters, TechCrunch, AP reporting October 2026',
  },
];

export const faqItems: FAQItem[] = [
  {
    question: 'Is the Tesla Roadster a flying car?',
    answer: 'No. The Tesla Roadster is not a flying car or air taxi. During the October 2026 demonstration, it performed brief aerial maneuvers using cold-gas thrusters — momentary lifts and rotations, not sustained flight. This is fundamentally different from practical passenger air transportation. The vehicle remains a road car with experimental thruster-assisted capabilities.',
  },
  {
    question: 'How did the demonstration work?',
    answer: 'On October 15, 2026, Tesla demonstrated the Roadster using a multi-mode suction system for surface grip and cold-gas thrusters for brief aerial maneuvers. The vehicle performed an aerial rotation and controlled landing on a specially designed surface. This was a controlled engineering showcase, not a practical transportation demonstration.',
  },
  {
    question: 'What is the difference between Performance, Thrust, and Rocket?',
    answer: 'Performance is the road-ready configuration with active aerodynamics and suction ($50,000 deposit). Thrust adds acceleration thrusters for race/demonstration use ($250,000 deposit). Rocket is the full experimental flight system in a single-seat, invitation-only configuration. None have confirmed final prices.',
  },
  {
    question: 'How much does the vehicle cost?',
    answer: 'Final retail pricing has NOT been officially announced by Tesla. The $50,000 and $250,000 figures are reported US reservation deposits, not purchase prices. The Rocket configuration is invitation-only with no confirmed reservation amount.',
  },
  {
    question: 'Are $50,000 and $250,000 the final purchase prices?',
    answer: 'No. These are reported reservation deposits, not final vehicle prices. Reservation deposits are refundable (per Tesla\'s stated policy) and do not represent the cost to purchase the vehicle. Final pricing has not been announced.',
  },
  {
    question: 'Is the Rocket configuration road legal?',
    answer: 'According to reported Tesla disclaimers, the Rocket configuration\'s experimental flying functionality is NOT approved for public-road use. It is described as an experimental demonstration platform, not a certified production vehicle for road or air use.',
  },
  {
    question: 'When is production expected to begin?',
    answer: 'Tesla has announced a production target of 2028. However, Tesla\'s production timelines have historically been subject to significant delays. The original second-generation Roadster was announced in 2017 with an initial 2020 production target that was not met. The 2028 date is a target, not a guarantee.',
  },
  {
    question: 'Is an Indian price available?',
    answer: 'No. Tesla has not announced any Indian pricing, on-road costs, taxes, import duties, registration fees, or delivery timelines for the Roadster in India. Any figures circulating online are speculative and not based on official announcements.',
  },
  {
    question: 'Can the vehicle fly like an aircraft?',
    answer: 'No. The demonstrated capability involves brief thruster-assisted aerial maneuvers — momentary lifts and rotations — not sustained flight. Cold-gas thrusters have limited total impulse and cannot support continuous flight. This is not equivalent to aircraft capability.',
  },
  {
    question: 'Where can the original demonstration video be watched?',
    answer: 'The demonstration was announced via Tesla\'s official channels. Check Tesla\'s official X (Twitter) account and website for authorized footage. This site provides links to official sources and credible media coverage. We do not host or embed unofficial recordings.',
  },
];

export const productionTimeline = [
  {
    year: '2017',
    title: 'Original Announcement',
    description: 'Tesla unveils the second-generation Roadster concept at the Tesla Semi event in November 2017, with claimed specifications and a tentative production timeline.',
    type: 'announcement' as const,
  },
  {
    year: '2018–2024',
    title: 'Extended Development & Delays',
    description: 'Production is repeatedly delayed. Tesla focuses on Model 3, Model Y, Cybertruck, and other priorities. The Roadster remains in development with limited public updates.',
    type: 'delay' as const,
  },
  {
    year: '2026',
    title: 'October 15 Demonstration',
    description: 'Tesla reveals the redesigned Roadster with experimental thruster technology. A live demonstration showcases suction systems and brief cold-gas thruster aerial maneuvers.',
    type: 'milestone' as const,
  },
  {
    year: '2028',
    title: 'Production Target',
    description: 'Tesla\'s announced production target for customer deliveries. This is a target subject to change — Tesla\'s historical production timelines have frequently been delayed.',
    type: 'target' as const,
  },
];
