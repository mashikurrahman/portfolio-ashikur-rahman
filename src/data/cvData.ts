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
  title: "Technical Content Writer | Medical Documentation Specialist | Customer Service Leader",
  contact: {
    address: "Saidnagar, Vatara, Bangladesh (Remote)",
    email: "mashikurrahman7@gmail.com",
    phone: "01568148437"
  },
  summary: "Accomplished technical content writer and medical documentation professional with 6+ years creating clear, user-friendly documentation across healthcare and technology sectors. Progressive career spanning customer service leadership, technical content creation, medical documentation, and web development. Expert in translating complex concepts into accessible language and delivering high-quality documentation meeting strict compliance standards.",
  experience: [
    {
      role: "Team Leader of Customer Service Department",
      company: "Capelli Sports",
      location: "Bangladesh",
      employmentType: "Full-time",
      period: "2025 – Present",
      highlights: [
        "Lead and manage customer service team, ensuring high-quality support and satisfaction.",
        "Oversee daily operations, team performance, and customer issue resolution.",
        "Develop and implement customer service strategies and best practices.",
        "Train and mentor team members on service excellence and company standards."
      ]
    },
    {
      role: "Sr. Technical Content Writer",
      company: "BJIT",
      location: "Bangladesh",
      employmentType: "Full-time",
      period: "2021 – 2025",
      highlights: [
        "Translated complex software and engineering concepts into clear, user-friendly technical documentation and content.",
        "Wrote and optimized website content, product documentation, blogs, case studies aligned with business goals.",
        "Collaborated with developers, product managers, and designers to ensure technical accuracy.",
        "Executed SEO-driven content strategies to improve organic traffic, keyword rankings, and conversions."
      ]
    },
    {
      role: "Sr. Medical Documentation Specialist",
      company: "Augmedix BD",
      location: "Dhaka",
      employmentType: "Full-time",
      period: "July 2019 – March 2021",
      highlights: [
        "Documented complete live patient encounters for 10+ US physicians with 95–100% accuracy.",
        "Earned promotion from medical scribe to senior specialist; managed QA review of peer documentation.",
        "Trained 5 new scribes on EMR workflows, medical terminology, and HIPAA standards."
      ]
    }
  ],
  coreCompetencies: [
    {
      category: "Documentation",
      items: ["SOAP Notes", "H&P Documentation", "Progress & Procedure Notes", "Orders, Imaging & Referrals", "E/M Documentation", "HIPAA Compliance"]
    },
    {
      category: "Content & Writing",
      items: ["Technical Writing", "Persuasive Copy", "SEO-Optimized Content", "Product Documentation", "User Research & Analysis"]
    },
    {
      category: "Leadership",
      items: ["Team Management", "Performance Monitoring", "Staff Training", "Service Standards", "Operational Excellence"]
    }
  ],
  specialties: [
    "Family Medicine", "Orthopedics", "Psychiatry", "Gynecology", "Pediatrics", "Oncology"
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
