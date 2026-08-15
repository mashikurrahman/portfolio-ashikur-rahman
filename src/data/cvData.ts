export interface WorkExperience {
  role: string;
  company: string;
  location: string;
  employmentType: string;
  period: string;
  highlights: string[];
}

export interface Education {
  degree: string;
  institution: string;
  field?: string;
}

export interface CVData {
  name: string;
  title: string;
  contact: {
    address: string;
    email: string;
    phone: string;
  };
  summary: string;
  experience: WorkExperience[];
  coreCompetencies: {
    category: string;
    items: string[];
  }[];
  specialties: string[];
  education: Education[];
  languages: { language: string; level: string }[];
}

export const CV_DATA: CVData = {
  name: "MOHAMMAD ASHIKUR RAHMAN",
  title: "Product Builder | Full-Stack & AI Automation Engineer | Technical Content & Medical Documentation Specialist",
  contact: {
    address: "Saidnagar, Vatara, Bangladesh (Remote)",
    email: "mashikurrahman7@gmail.com",
    phone: "01568148437"
  },
  summary: "Accomplished product builder, technical content writer, and medical documentation professional with 6+ years of multi-disciplinary experience spanning full-stack development, AI automation workflows (n8n, Zapier), WordPress CMS engineering, clinical documentation, and customer support team leadership. Proven track record in translating complex architectures into high-converting products, building automated end-to-end pipelines, and delivering clinical documentation meeting strict HIPAA compliance.",
  experience: [
    {
      role: "Team Leader of Customer Service Department",
      company: "Capelli Sports",
      location: "Bangladesh",
      employmentType: "Full-time",
      period: "2025 – Present",
      highlights: [
        "Lead and manage customer service team, ensuring high-quality support and SLA adherence.",
        "Oversee daily operations, team performance metrics, and rapid issue resolution workflows.",
        "Implement automated customer service routing, ticketing pipelines, and best practices.",
        "Train and mentor team members on service excellence, communication protocols, and brand standards."
      ]
    },
    {
      role: "Sr. Technical Content Writer & Web Builder",
      company: "BJIT",
      location: "Bangladesh",
      employmentType: "Full-time",
      period: "2021 – 2025",
      highlights: [
        "Translated complex software, cloud, and engineering concepts into clear, user-friendly technical documentation and architecture guides.",
        "Developed and maintained WordPress CMS platforms, custom landing pages, and interactive case study portals.",
        "Collaborated with developers, product managers, and UI/UX designers to guarantee technical accuracy.",
        "Executed SEO-driven content strategies and technical keyword optimization, boosting organic search traffic and conversions."
      ]
    },
    {
      role: "Sr. Medical Documentation Specialist",
      company: "Augmedix BD",
      location: "Dhaka",
      employmentType: "Full-time",
      period: "July 2019 – March 2021",
      highlights: [
        "Documented complete live patient encounters for 10+ US physicians with 95–100% clinical accuracy.",
        "Promoted from medical scribe to senior specialist; spearheaded peer review QA protocols.",
        "Trained 5+ new scribes on EMR workflows, medical terminology, and HIPAA security standards."
      ]
    }
  ],
  coreCompetencies: [
    {
      category: "AI & Workflow Automation",
      items: [
        "n8n (Self-Hosted & Cloud)",
        "Zapier Multi-Step Automations",
        "Make (Integromat)",
        "LLM & Webhook Pipelines",
        "Automated Lead Capture & CRM Routing",
        "API Integrations & Data Sync"
      ]
    },
    {
      category: "CMS & Web Development",
      items: [
        "WordPress (Custom Themes & Plugins)",
        "WooCommerce Storefronts",
        "Elementor & Gutenberg Blocks",
        "Headless WordPress & REST API",
        "Webflow",
        "React 19 & Next.js 16",
        "Flutter / Dart"
      ]
    },
    {
      category: "Medical & Technical Documentation",
      items: [
        "SOAP Notes & H&P Documentation",
        "Clinical Charting (95–100% Accuracy)",
        "E/M Coding & HIPAA Compliance",
        "Developer API Docs & Manuals",
        "Product Case Studies & SEO Content"
      ]
    },
    {
      category: "Leadership & Quality Operations",
      items: [
        "CS Team Leadership & SLA Management",
        "Staff Mentorship & Training Programs",
        "QA Peer Review Systems",
        "Workflow Optimization & SOPs",
        "Cross-Functional Team Collaboration"
      ]
    }
  ],
  specialties: [
    "AI Workflow Orchestration (n8n / Zapier)",
    "WordPress & WooCommerce Engineering",
    "Clinical Documentation (HIPAA / SOAP)",
    "Full-Stack Web & Mobile Engineering",
    "Technical Content Strategy & SEO"
  ],
  education: [
    {
      degree: "Bachelor of Science (B.Sc), Computer Science & Engineering",
      institution: "American International University Bangladesh (AIUB)"
    },
    {
      degree: "Higher Secondary Certificate (H.Sc), Science",
      institution: "Bikalpa Model College"
    },
    {
      degree: "Secondary School Certificate (S.Sc), Science",
      institution: "Government Science College Attached High School"
    }
  ],
  languages: [
    { language: "English", level: "Fluent" },
    { language: "Bangla", level: "Native" }
  ]
};
