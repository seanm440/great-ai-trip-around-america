import type { City } from "@/types";

export const cities: City[] = [
  {
    slug: "nashville",
    name: "Nashville",
    state: "Tennessee",
    stateAbbr: "TN",
    order: 1,
    status: "upcoming",
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
        sourceName: "Xsolis",
        sourceUrl:
          "https://www.xsolis.com/press-release/xsolis-announces-the-official-launch-of-next-generation-ai-powered-platform-dragonfly-at-xchange-24/",
      },
      {
        name: "UnityAI",
        category: "Healthcare AI",
        blurb:
          "Founded by former HCA Healthcare engineers, building AI \"care orchestration\" software that helps hospitals move patients through care faster.",
        sourceName: "Fierce Healthcare",
        sourceUrl:
          "https://www.fiercehealthcare.com/ai-and-machine-learning/nashville-ai-start-secures-4m-seed-funding-boost-patient-flow",
      },
      {
        name: "Soundstripe",
        category: "Creative AI",
        blurb:
          "A Nashville music-licensing platform whose new AI tool, Supe, helps creators find and customize the right licensed track in seconds.",
        sourceName: "Soundstripe",
        sourceUrl: "https://www.soundstripe.com/blogs/supe-soundstripes-ai-search-assistant",
      },
    ],
    dataCenters: [
      {
        name: "Flexential Nashville",
        operator: "Flexential",
        blurb:
          "A colocation and cloud facility in Franklin, TN that's served Middle Tennessee businesses for close to fifteen years.",
        sourceName: "Flexential",
        sourceUrl: "https://www.flexential.com/data-centers/tn/nashville/franklin-data-center",
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
    order: 2,
    status: "upcoming",
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
        sourceName: "ReliaQuest",
        sourceUrl: "https://reliaquest.com/security-operations-platform/",
      },
      {
        name: "Slide Insurance",
        category: "Insurtech",
        blurb:
          "A Tampa-based property insurer using AI-driven underwriting to make faster coverage decisions in one of the country's hardest insurance markets: coastal Florida.",
        sourceName: "Slide Insurance",
        sourceUrl: "https://www.slideinsurance.com/about",
      },
      {
        name: "BlueGrace Logistics",
        category: "Logistics Tech",
        blurb:
          "A Riverview-based freight company whose BlueShip platform helps businesses plan and track shipments across carriers.",
        sourceName: "BlueGrace Logistics",
        sourceUrl: "https://mybluegrace.com/blueship-tms/",
      },
    ],
    dataCenters: [
      {
        name: "Flexential Tampa (West)",
        operator: "Flexential",
        blurb:
          "A 31,600-square-foot colocation and disaster-recovery facility in West Tampa.",
        sourceName: "Flexential",
        sourceUrl:
          "https://www.flexential.com/system/files/file/2021-03/west-tampa-flexential-data-center-data-sheet.pdf",
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
    order: 3,
    status: "upcoming",
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
        sourceName: "Apptronik",
        sourceUrl: "https://apptronik.com/apollo",
      },
      {
        name: "Coder",
        category: "Developer Tools",
        blurb:
          "An Austin startup building the infrastructure engineering teams use to run and manage AI coding agents at scale.",
        sourceName: "Coder",
        sourceUrl: "https://coder.com/solutions/agents",
      },
      {
        name: "Silicon Labs",
        category: "Semiconductors",
        blurb:
          "A fabless chip design company headquartered in Austin, building the microcontrollers and wireless chips that power IoT devices.",
        sourceName: "Silicon Labs",
        sourceUrl: "https://www.silabs.com/about-us",
      },
    ],
    dataCenters: [
      {
        name: "Samsung Taylor Fab",
        operator: "Samsung Foundry",
        blurb:
          "A $17B+ chip fab under construction in nearby Taylor, TX, whose grid buildout is helping fuel a wave of new hyperscale data centers across Central Texas.",
        sourceName: "DataCenterDynamics",
        sourceUrl:
          "https://www.datacenterdynamics.com/en/news/samsung-plans-17-billion-chip-plant-in-taylor-texas/",
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
    order: 4,
    status: "upcoming",
    coordinates: { lat: 36.7378, lng: -119.7871 },
    tagline: "AI is changing how America grows its food.",
    description:
      "The Central Valley grows a huge share of the country's produce — and it's become an unlikely testbed for agricultural AI: autonomous orchard equipment, crop-stress detection, and water-use optimization in a region where every drop counts.",
    themes: ["Agriculture AI", "Water Tech", "Autonomous Equipment"],
    companies: [
      {
        name: "GUSS Automation",
        category: "Autonomous Equipment",
        blurb:
          "Kingsburg-based maker of driverless orchard sprayers that let one operator run up to eight machines at once — real Central Valley engineering, not a Silicon Valley import. The fleet is primarily diesel-powered, with an all-electric model introduced in 2024.",
        sourceName: "GUSS Automation",
        sourceUrl: "https://gussag.com/",
      },
      {
        name: "Netafim USA",
        category: "Water Tech",
        blurb:
          "Manufactures precision drip-irrigation systems at its Fresno facility, helping growers stretch every drop in one of the country's most water-stressed farming regions.",
        sourceName: "The Business Journal",
        sourceUrl: "https://thebusinessjournal.com/fresno-manufacturer-relocating-production-line-from-israel/",
      },
      {
        name: "Ceres AI",
        category: "Agriculture AI",
        blurb:
          "Uses aircraft-mounted imaging and AI to spot crop water stress within 48 hours — born out of California's drought and built for Central Valley growers, though the team itself is based in Oakland.",
        sourceName: "Ceres AI",
        sourceUrl: "https://ceres.ai/aerial-imagery",
      },
    ],
    dataCenters: [],
    universities: ["UC Merced", "Fresno State"],
    highlights: [
      "Ride-along on a driverless orchard sprayer",
      "Farmer interviews on adopting AI tools",
      "A look at precision irrigation in one of the country's most water-stressed regions",
    ],
  },
];

export function getCityBySlug(slug: string): City | undefined {
  return cities.find((city) => city.slug === slug);
}

export function getAllCitySlugs(): string[] {
  return cities.map((city) => city.slug);
}
