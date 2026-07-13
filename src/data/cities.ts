import type { City } from "@/types";

export const cities: City[] = [
  {
    slug: "washington-dc",
    name: "Washington",
    state: "District of Columbia",
    stateAbbr: "DC",
    order: 1,
    status: "upcoming",
    dateWindow: "Aug 2026",
    coordinates: { lat: 38.9072, lng: -77.0369 },
    tagline: "Where AI policy is being written — by people who rarely meet the builders.",
    description:
      "We're starting the trip in DC on purpose. This is where AI regulation gets written, where federal agencies are quietly modernizing decades-old systems, and where govtech founders are trying to move fast inside one of the slowest-moving customers in the world. It's the right place to ask what responsible AI adoption actually looks like at scale.",
    themes: ["GovTech", "Policy AI", "Civic Innovation"],
    companies: [
      {
        name: "Govini",
        category: "GovTech",
        blurb:
          "Arlington-based team behind Ark.ai, an AI decision-science platform that helps the Department of Defense untangle supply-chain and acquisition data legacy systems can't touch.",
      },
      {
        name: "POPVOX Foundation",
        category: "Civic Innovation",
        blurb:
          "A nonprofit founded by former Congressional staffers that runs free AI training for Congress and builds open-source tools that help legislatures use modern data.",
      },
      {
        name: "Center for AI and Digital Policy",
        category: "Policy AI",
        blurb:
          "A DC-based nonprofit that assesses national AI policies against democratic-governance standards and trains the next generation of AI policy leaders.",
      },
    ],
    dataCenters: [
      {
        name: "Data Center Alley — AWS Ashburn Campus",
        operator: "Amazon Web Services",
        blurb:
          "The original home of AWS's cloud infrastructure since 2006, anchoring the highest concentration of data centers on Earth in nearby Loudoun County, VA.",
      },
    ],
    universities: ["Georgetown University", "George Washington University"],
    highlights: [
      "Founder roundtable on building AI products for government customers",
      "Interview with a federal agency's AI modernization team",
      "A look inside a nonprofit teaching Congress how to use AI tools",
    ],
  },
  {
    slug: "nashville",
    name: "Nashville",
    state: "Tennessee",
    stateAbbr: "TN",
    order: 2,
    status: "upcoming",
    dateWindow: "Sept 2026",
    coordinates: { lat: 36.1627, lng: -86.7816 },
    tagline: "Music City is quietly becoming a healthcare AI city.",
    description:
      "Nashville built its name on songwriting and studios — now the same city is home to a fast-growing cluster of healthcare AI companies and a music industry experimenting with AI-powered tools. It's proof that AI adoption isn't confined to the coasts.",
    themes: ["Healthcare AI", "Creative Tools"],
    companies: [
      {
        name: "Xsolis",
        category: "Healthcare AI",
        blurb:
          "Franklin-based team behind Dragonfly, an AI platform hospitals and insurers use to make faster, more consistent medical-necessity decisions.",
      },
      {
        name: "UnityAI",
        category: "Healthcare AI",
        blurb:
          "Founded by former HCA Healthcare engineers, building AI \"care orchestration\" software that helps hospitals move patients through care faster.",
      },
      {
        name: "Soundstripe",
        category: "Creative AI",
        blurb:
          "A Nashville music-licensing platform whose new AI tool, Supe, helps creators find and customize the right licensed track in seconds.",
      },
    ],
    dataCenters: [
      {
        name: "Flexential Nashville",
        operator: "Flexential",
        blurb:
          "A colocation and cloud facility in Franklin, TN that's served Middle Tennessee businesses for close to fifteen years.",
      },
    ],
    universities: ["Vanderbilt University", "Tennessee State University"],
    highlights: [
      "Founder roundtable on AI in regulated industries",
      "Studio visit: how an AI music-licensing tool actually gets used",
      "Behind the scenes at a healthcare AI startup built by former hospital engineers",
    ],
  },
  {
    slug: "tampa",
    name: "Tampa",
    state: "Florida",
    stateAbbr: "FL",
    order: 3,
    status: "upcoming",
    dateWindow: "Oct 2026",
    coordinates: { lat: 27.9506, lng: -82.4572 },
    tagline: "Where logistics, insurance, and cybersecurity collide.",
    description:
      "Tampa Bay's economy runs on logistics, insurance, and cybersecurity — three industries being quietly reshaped by AI. We're visiting the insurers pricing climate risk with real-time data, the security teams defending against AI-powered attacks, and the freight platforms keeping cargo moving.",
    themes: ["Cybersecurity AI", "Insurtech", "Logistics Tech"],
    companies: [
      {
        name: "ReliaQuest",
        category: "Cybersecurity AI",
        blurb:
          "Tampa-headquartered security company behind GreyMatter, an agentic AI platform that helps enterprise teams detect and respond to cyber threats in real time.",
      },
      {
        name: "Slide Insurance",
        category: "Insurtech",
        blurb:
          "A Tampa-based property insurer using AI-driven underwriting to make faster coverage decisions in one of the country's hardest insurance markets: coastal Florida.",
      },
      {
        name: "BlueGrace Logistics",
        category: "Logistics Tech",
        blurb:
          "A Riverview-based freight company whose BlueShip platform helps businesses plan and track shipments across carriers.",
      },
    ],
    dataCenters: [
      {
        name: "Flexential Tampa (West)",
        operator: "Flexential",
        blurb:
          "A 91,000-square-foot colocation and disaster-recovery facility in West Tampa.",
      },
    ],
    universities: ["University of South Florida"],
    highlights: [
      "Tour of an agentic AI security operations platform",
      "Founder interviews in the insurtech corridor",
      "Behind the scenes at a Tampa Bay colocation facility",
    ],
  },
  {
    slug: "austin",
    name: "Austin",
    state: "Texas",
    stateAbbr: "TX",
    order: 4,
    status: "upcoming",
    dateWindow: "Nov 2026",
    coordinates: { lat: 30.2672, lng: -97.7431 },
    tagline: "One of the highest concentrations of AI startups per capita in the country.",
    description:
      "Austin's startup density and university pipeline have made it a magnet for applied-AI teams — from robotics to developer tools. We'll spend extra time here meeting founders who left Big Tech to build, and the students at UT Austin who are building alongside them.",
    themes: ["Robotics", "Developer Tools", "Semiconductors"],
    companies: [
      {
        name: "Apptronik",
        category: "Robotics",
        blurb:
          "Builder of Apollo, a general-purpose humanoid robot designed for warehouse and industrial work — spun out of UT Austin's own robotics lab.",
      },
      {
        name: "Coder",
        category: "Developer Tools",
        blurb:
          "An Austin startup building the infrastructure engineering teams use to run and manage AI coding agents at scale.",
      },
      {
        name: "Silicon Labs",
        category: "Semiconductors",
        blurb:
          "A fabless chip design company headquartered in Austin, building the microcontrollers and wireless chips that power IoT devices.",
      },
    ],
    dataCenters: [
      {
        name: "Samsung Taylor Fab",
        operator: "Samsung Foundry",
        blurb:
          "A $17B+ chip fab under construction in nearby Taylor, TX, whose grid buildout is helping fuel a wave of new hyperscale data centers across Central Texas.",
      },
    ],
    universities: ["University of Texas at Austin", "Texas State University"],
    highlights: [
      "A look at the Central Texas chip fab driving a new wave of data centers",
      "Founder interview: the UT Austin robotics spinout building humanoid robots",
      "Student showcase at UT Austin's robotics lab",
    ],
  },
  {
    slug: "central-valley",
    name: "Central Valley",
    state: "California",
    stateAbbr: "CA",
    order: 5,
    status: "planned",
    dateWindow: "2027 — route in progress",
    coordinates: { lat: 36.7378, lng: -119.7871 },
    tagline: "AI is changing how America grows its food.",
    description:
      "The Central Valley grows a huge share of the country's produce — and it's become an unlikely testbed for agricultural AI: autonomous orchard equipment, crop-stress detection, and water-use optimization in a region where every drop counts. Details for this stop are still being finalized.",
    themes: ["Agriculture AI", "Water Tech", "Autonomous Equipment"],
    companies: [
      {
        name: "GUSS Automation",
        category: "Autonomous Equipment",
        blurb:
          "Kingsburg-based maker of driverless, all-electric orchard sprayers that let one operator run up to eight machines at once — real Central Valley engineering, not a Silicon Valley import.",
      },
      {
        name: "Netafim USA",
        category: "Water Tech",
        blurb:
          "Manufactures precision drip-irrigation systems at its Fresno facility, helping growers stretch every drop in one of the country's most water-stressed farming regions.",
      },
      {
        name: "Ceres AI",
        category: "Agriculture AI",
        blurb:
          "Uses aircraft-mounted imaging and AI to spot crop water stress within 48 hours — born out of California's drought and built for Central Valley growers, though the team itself is based in Oakland.",
      },
    ],
    dataCenters: [],
    universities: ["UC Merced", "Fresno State"],
    highlights: [
      "Ride-along on a driverless orchard sprayer",
      "Farmer interviews on adopting AI tools",
      "Full itinerary announced closer to the visit",
    ],
  },
];

export function getCityBySlug(slug: string): City | undefined {
  return cities.find((city) => city.slug === slug);
}

export function getAllCitySlugs(): string[] {
  return cities.map((city) => city.slug);
}
