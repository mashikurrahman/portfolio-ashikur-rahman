export interface CaseStudy {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  year: string;
  category: 'AI & LLM' | 'Mobile / Flutter' | 'Web Apps' | 'SEO & Marketing' | 'Enterprise Tooling';
  role: string;
  summary: string;
  problem: string;
  solution: string;
  metrics: { label: string; value: string; icon?: string }[];
  tags: string[];
  image: string;
  shotImage?: string;
  liveUrl?: string;
  githubUrl?: string;
  isFeatured?: boolean;
  keyFeatures: string[];
  architectureHighlights: string[];
}

export interface ProfileInfo {
  name: string;
  title: string;
  subtitle: string;
  tagline: string;
  bio: string;
  email: string;
  phone: string;
  location: string;
  status: string;
  avatar: string;
  cvPdf: string;
  stats: { label: string; value: string; detail: string }[];
  skills: {
    category: string;
    items: string[];
  }[];
}

export const PROFILE_DATA: ProfileInfo = {
  name: "Mohammad Ashikur Rahman",
  title: "Technical Content Writer | Medical Documentation Specialist | Customer Service Leader | Full-Stack & AI Product Builder",
  subtitle: "Engineering user-centric AI solutions, scalable web/mobile platforms, and technical documentation with 6+ years of multi-disciplinary excellence.",
  tagline: "Bridging complex technical architecture, clinical accuracy, and seamless customer experiences.",
  bio: "Accomplished technical content writer, medical documentation professional, and full-stack product builder with over 6 years of experience across healthcare, e-commerce, AI tooling, and customer support leadership. Expert at building end-to-end applications with React, Next.js 16, Flutter, Node.js, and multi-provider AI frameworks (Google Gemini, Groq/Llama 3.1, Cloudflare Workers AI) while maintaining strict HIPAA & security compliance.",
  email: "mashikurrahman7@gmail.com",
  phone: "01568148437",
  location: "Saidnagar, Vatara, Bangladesh (Remote)",
  status: "Available for Full-Stack, AI Engineering & Technical Leadership Roles",
  avatar: "/assets/ashikur-hero.jpg",
  cvPdf: "/assets/mohammad-ashikur-rahman-cv-modern.pdf",
  stats: [
    { label: "Active Shipped Projects", value: "9", detail: "Web, Mobile, RAG AI & SEO Static platforms" },
    { label: "AI & LLM Platforms", value: "3", detail: "InsightPilot, CS Assistant & Expense Dashboard" },
    { label: "Doc Accuracy", value: "95–100%", detail: "Live patient encounter documentation for US MDs" },
    { label: "Years Experience", value: "6+", detail: "Tech writing, CS leadership, medical doc & coding" },
  ],
  skills: [
    {
      category: "Full-Stack & Mobile Engineering",
      items: ["React 19", "Next.js 16", "TypeScript", "Node.js", "Express", "Flutter / Dart", "Prisma", "PostgreSQL", "SQLite / SQLCipher", "Firebase Auth / Firestore", "Tailwind CSS 4", "REST & GraphQL"]
    },
    {
      category: "AI & LLM Integrations",
      items: ["Google Gemini API", "Groq (Llama 3.1)", "Cloudflare Workers AI", "pgvector RAG Semantic Search", "Web Workers In-Browser Profiling", "Tesseract OCR", "Multi-Provider AI Failover Architecture"]
    },
    {
      category: "Technical Content & Medical Writing",
      items: ["SOAP Notes", "H&P Documentation", "E/M Coding Standards", "HIPAA Compliance", "User Manuals & Technical Docs", "SEO Content Strategy", "Developer Documentation", "Product Case Studies"]
    },
    {
      category: "Leadership & Quality Operations",
      items: ["CS Team Leadership", "Staff Mentorship & Training", "QA Peer Review Management", "Workflow Optimization", "Issue Escalation Protocols", "Cross-Functional Collaboration"]
    }
  ]
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "anot-health",
    number: "01",
    title: "Anot Health",
    subtitle: "Official Marketing Website for Clinical AI Platform",
    year: "2026",
    category: "SEO & Marketing",
    role: "Full-Stack Developer & Security Hardener",
    summary: "Public-facing marketing site for Anot Health, a clinical documentation and revenue-cycle company pairing AI speed with human-validated review for documentation, coding, billing and payroll workflows.",
    problem: "Healthcare organizations require extreme trust, strict Content-Security-Policy (CSP) headers, and high-performance site loads when evaluating AI documentation platforms.",
    solution: "Engineered a fast, security-conscious static site featuring a strict CSP, cache-busting asset pipeline, Open Graph SEO metadata, and interactive demo booking workflow.",
    metrics: [
      { label: "Security", value: "CSP Hardened", icon: "Shield" },
      { label: "Target Sector", value: "Clinical Tech", icon: "Activity" },
      { label: "SEO Rating", value: "100%", icon: "Search" }
    ],
    tags: ["HTML5", "CSS3", "JavaScript", "Lucide Icons", "Responsive Design", "CSP Hardening", "Open Graph SEO"],
    image: "/assets/case-studies/case-study-01-anot-health.png",
    shotImage: "/assets/shots/anothealth.png",
    liveUrl: "https://anot.health",
    isFeatured: true,
    keyFeatures: [
      "Strict Content-Security-Policy header implementation protecting healthcare visitors.",
      "Cache-busted static asset distribution for ultra-fast CDN delivery.",
      "Interactive product service breakdown with high-converting demo booking funnel.",
      "Open Graph & Twitter Card metadata optimized for organic medical tech search."
    ],
    architectureHighlights: [
      "Zero-dependency static frontend architecture for near-instant first contentful paint (FCP).",
      "Modular CSS design system optimized for dark/light contrast standards.",
      "Structured JSON-LD schema for healthcare organization indexation."
    ]
  },
  {
    id: "anot-scribe",
    number: "02",
    title: "Anot Scribe",
    subtitle: "Cross-Platform Flutter Mobile Companion App",
    year: "2026",
    category: "Mobile / Flutter",
    role: "Mobile Engineer & Lead Architect",
    summary: "The shipped mobile companion to Anot Health: a Flutter app medical scribes use in the field to sign in securely, pull up daily patient lists, and capture encrypted visit audio with live waveforms.",
    problem: "Clinical scribes needed a secure mobile app to record patient encounters offline and in clinic environments without risking HIPAA privacy breaches or data loss.",
    solution: "Developed a Flutter cross-platform mobile application utilizing SQLCipher encrypted database, biometric lock via local_auth, real-time waveform audio capture, and automated Codemagic CI/CD builds for iOS TestFlight and Android Play Store.",
    metrics: [
      { label: "Platforms", value: "iOS + Android", icon: "Smartphone" },
      { label: "Security", value: "SQLCipher", icon: "Lock" },
      { label: "Build Pipeline", value: "Codemagic CI/CD", icon: "Cpu" }
    ],
    tags: ["Flutter", "Dart", "Provider State", "sqflite_sqlcipher", "local_auth", "flutter_secure_storage", "Codemagic CI/CD", "TestFlight", "Play Store"],
    image: "/assets/case-studies/case-study-02-anot-scribe.png",
    isFeatured: true,
    keyFeatures: [
      "Secure biometric authentication (FaceID/TouchID) protecting sensitive health data.",
      "Real-time audio recording with interactive waveform visualizer and MRN context.",
      "Encrypted local-first database storing offline encounter records safely.",
      "Seamless synchronization pipeline to Anot Health cloud backends upon reconnection."
    ],
    architectureHighlights: [
      "SQLCipher database encryption with device key stored in native Secure Enclave / KeyStore.",
      "Provider state management pattern driving seamless async offline sync states.",
      "Automated Codemagic CI/CD shipping builds straight to TestFlight and Play Store internal tracks."
    ]
  },
  {
    id: "insightpilot",
    number: "03",
    title: "InsightPilot",
    subtitle: "Open-Access AI Dashboard Generator — Next.js 16 Web App",
    year: "2026",
    category: "AI & LLM",
    role: "Lead Full-Stack Architect",
    summary: "A no-login, browser-first analytics platform: upload CSV or Excel files and InsightPilot profiles and charts them in-browser via Web Workers, featuring Story Mode, Scenario Lab, Boardroom Briefings, and Action Studio.",
    problem: "Users are reluctant to upload confidential financial or business spreadsheet data to cloud servers just to generate executive dashboards.",
    solution: "Created an in-browser processing platform using Web Workers and IndexedDB. Raw rows never leave the client unless optional multi-provider AI (Gemini/Groq/Cloudflare) is enabled by the user.",
    metrics: [
      { label: "Privacy Mode", value: "Zero Server Upload", icon: "EyeOff" },
      { label: "Processing", value: "In-Browser Workers", icon: "Zap" },
      { label: "Export Bundle", value: ".insightpilot", icon: "FileText" }
    ],
    tags: ["Next.js 16", "React 19", "TypeScript", "Prisma", "PostgreSQL", "Web Workers", "IndexedDB", "Recharts", "Google Gemini", "Groq", "Clerk Auth"],
    image: "/assets/case-studies/case-study-03-insightpilot.png",
    shotImage: "/assets/shots/insightpilot.png",
    liveUrl: "http://localhost:3000",
    isFeatured: true,
    keyFeatures: [
      "Client-side CSV/Excel parsing powered by Web Workers preventing UI thread freezes.",
      "IndexedDB Project Vault allowing complete offline data persistence.",
      "Action Studio algorithm ranking business next steps by Impact, Effort, and Confidence scores.",
      "Presenter-ready Boardroom Briefing mode with exportable .insightpilot bundle files."
    ],
    architectureHighlights: [
      "Web Worker thread isolation for multi-thousand row data transformation.",
      "Local-first IndexedDB schema with portable JSON/binary vault export capabilities.",
      "Privacy-first LLM prompt builder stripping sensitive columns before external AI submission."
    ]
  },
  {
    id: "bow-and-tie",
    number: "04",
    title: "Bow & Tie",
    subtitle: "Full-Stack Boutique E-commerce Storefront + Admin Dashboard",
    year: "2026",
    category: "Web Apps",
    role: "Full-Stack Developer",
    summary: "A complete boutique e-commerce store for hair clips and accessories featuring catalog search, wishlist, cart, guest checkout, WhatsApp ordering, and a full admin panel with profit margin tracking.",
    problem: "Client required accurate product margin tracking and reliable order notification delivery despite host outbound SMTP port restrictions.",
    solution: "Built a React + TypeScript Vite frontend with Node/Express Prisma backend. Implemented server-authoritative coupon & price validation and integrated Brevo HTTP API to overcome cloud provider SMTP blocking.",
    metrics: [
      { label: "Checkout", value: "Server-Authoritative", icon: "ShieldCheck" },
      { label: "Profit Tracking", value: "Margin per SKU", icon: "TrendingUp" },
      { label: "Email Engine", value: "Brevo HTTP API", icon: "Mail" }
    ],
    tags: ["React", "TypeScript", "Vite", "Node.js", "Express", "Prisma", "PostgreSQL", "SQLite", "Docker Compose", "Brevo API", "Render"],
    image: "/assets/case-studies/case-study-04-bow-and-tie.png",
    shotImage: "/assets/shots/bowandtie.png",
    liveUrl: "https://bow-and-ties.vercel.app",
    isFeatured: true,
    keyFeatures: [
      "Server-authoritative checkout validating stock, discounts, and prices server-side.",
      "Comprehensive Admin Profit Dashboard displaying real-time cost vs revenue margins.",
      "Direct WhatsApp quick checkout option for instant localized ordering.",
      "Transactional automated email notifications using Brevo HTTP REST endpoints."
    ],
    architectureHighlights: [
      "Express REST API coupled with Prisma ORM and Docker Compose staging environment.",
      "Recomputed coupon table rules preventing front-end price tampering.",
      "Resilient Brevo REST integration avoiding legacy SMTP port blockages."
    ]
  },
  {
    id: "cs-assistant",
    number: "05",
    title: "CS Assistant (Capelli Workflow Coach)",
    subtitle: "Internal RAG-Powered AI Support Tool & Browser Extension",
    year: "2026",
    category: "AI & LLM",
    role: "AI Lead & Extension Architect",
    summary: "An internal AI assistant for customer service teams walking agents through a 9-step ticket resolution workflow grounded in internal training docs via pgvector semantic search.",
    problem: "Customer support representatives struggled to maintain consistent policy compliance across complex customer ticket escalations.",
    solution: "Architected a Next.js RAG assistant with pgvector document embeddings, automated PII redaction prior to LLM submission, and a companion browser extension for in-context use inside ticketing systems.",
    metrics: [
      { label: "RAG Engine", value: "pgvector Semantic", icon: "Database" },
      { label: "PII Security", value: "Auto-Redaction", icon: "EyeOff" },
      { label: "Extension", value: "In-Context Overlay", icon: "Layers" }
    ],
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "pgvector", "NextAuth", "Groq (Llama 3.1)", "Cloudflare Workers AI", "Browser Extension", "Vercel"],
    image: "/assets/case-studies/case-study-05-cs-assistant.png",
    shotImage: "/assets/shots/csassistant.png",
    liveUrl: "https://bdcsteamassistant.vercel.app",
    isFeatured: true,
    keyFeatures: [
      "9-step structured ticket resolution workflow guiding agents step-by-step.",
      "Automatic PII regex & entity scrubber ensuring customer data privacy.",
      "Role-based access control (Admin, Team Lead, Trainer, Agent, QA).",
      "Companion Chrome/Edge browser extension overlaying guidance inside Zendesk/Kustomer."
    ],
    architectureHighlights: [
      "pgvector vector search finding exact matching internal policy chunks.",
      "Groq Llama 3.1 high-throughput LLM inference engine delivering answers in < 400ms.",
      "Full audit logging of sensitive administrative override actions."
    ]
  },
  {
    id: "dispatch",
    number: "06",
    title: "Dispatch",
    subtitle: "Multi-Tenant Emergency SOS Platform (Web Portal)",
    year: "2026",
    category: "Enterprise Tooling",
    role: "Full-Stack Cloud Architect",
    summary: "A multi-tenant emergency-dispatch platform for security agencies: super admins onboard agencies, agency admins register customers/dispatchers, and dispatchers monitor live map alert boards.",
    problem: "Security agencies need isolated tenant data management and real-time alert mapping without expensive server infrastructure.",
    solution: "Designed a multi-tenant platform using React, TypeScript, and Firebase. Database isolation is enforced via Firestore security rules, running entirely on Firebase's free tier with zero server costs.",
    metrics: [
      { label: "Multi-Tenancy", value: "Firestore Rules", icon: "Shield" },
      { label: "Map Engine", value: "OpenStreetMap", icon: "MapPin" },
      { label: "Server Cost", value: "$0 / Month", icon: "DollarSign" }
    ],
    tags: ["React", "TypeScript", "Vite", "Firebase Auth", "Firestore Security Rules", "OpenStreetMap", "Flutter (Planned)"],
    image: "/assets/case-studies/case-study-06-dispatch.png",
    shotImage: "/assets/shots/dispatch.png",
    isFeatured: false,
    keyFeatures: [
      "Multi-tenant database structure isolating agency client data completely.",
      "Real-time OpenStreetMap alert board with audio ping notifications for dispatchers.",
      "Dispatcher status tracking: Acknowledge, In-Progress, Resolved, Callback.",
      "Planned Flutter mobile app integration for instant emergency trigger."
    ],
    architectureHighlights: [
      "Firestore Security Rules checking request.auth.token.agencyId for zero-leak multi-tenancy.",
      "Serverless architecture leveraging Firebase Authentication & Firestore realtime snapshots.",
      "Leaflet/OpenStreetMap wrapper rendering low-latency live geolocation markers."
    ]
  },
  {
    id: "expense-dashboard",
    number: "07",
    title: "Expense Dashboard (Expense Manager Pro)",
    subtitle: "Offline-First Excel Tracker with AI Receipt Capture",
    year: "2026",
    category: "AI & LLM",
    role: "Lead Developer",
    summary: "A single-file, offline-first expense dashboard reading/writing existing Excel workbooks while preserving formulas, colors, and layout. Features Smart Capture photo receipt scanning including Bangla text.",
    problem: "Users wanted AI receipt scanning and rich visual analytics without transferring sensitive local Excel spreadsheets to third-party cloud tools.",
    solution: "Created an in-place SheetJS Excel dashboard with Smart Capture photo receipt scanning powered by a hybrid Gemini-vision / offline Tesseract OCR engine with automatic failover to Grok and Cloudflare Workers AI.",
    metrics: [
      { label: "Excel Sync", value: "In-Place SheetJS", icon: "FileSpreadsheet" },
      { label: "AI Failover", value: "3x Fallback", icon: "RefreshCw" },
      { label: "Language", value: "Bangla OCR", icon: "Globe" }
    ],
    tags: ["React", "SheetJS (xlsx)", "Node.js", "Google Gemini", "xAI Grok", "Cloudflare Workers AI", "Tesseract OCR", "Local-First"],
    image: "/assets/case-studies/case-study-07-expense-dashboard.png",
    shotImage: "/assets/shots/expense.png",
    isFeatured: false,
    keyFeatures: [
      "Smart Capture OCR recognizing printed & handwritten store receipts (English & Bangla).",
      "Automatic multi-provider AI failover (Gemini → Grok → Cloudflare Workers AI).",
      "Deterministic natural-language search query assistant for instant expense insights.",
      "Local PIN-code lock protection and automatic daily file backup generation."
    ],
    architectureHighlights: [
      "SheetJS binary parsing keeping native Excel formulas and cell formatting intact.",
      "Resilient LLM API router switching keys automatically on rate-limit detection.",
      "Zero cloud reliance for basic tracking with offline Tesseract engine fallback."
    ]
  },
  {
    id: "webants-digital",
    number: "08",
    title: "WebAnts Digital",
    subtitle: "Niche-Focused Marketing Agency Platform — Next.js 16",
    year: "2026",
    category: "SEO & Marketing",
    role: "Frontend Engineer & UX Designer",
    summary: "A marketing website for WebAnts Digital, a digital marketing agency targeting real estate and home service niches — realtors, brokerages, property managers, and investors.",
    problem: "Agency needed a high-converting digital platform showcasing service offerings across SEO, CRM automation, reputation management, and creative video production.",
    solution: "Built a high-performance Next.js 16 marketing site using React 19 and Tailwind CSS 4 with interactive service cards, project portfolios, and clear lead acquisition forms.",
    metrics: [
      { label: "Stack", value: "Next.js 16", icon: "Code" },
      { label: "Target Niche", value: "Real Estate & Services", icon: "Home" },
      { label: "Style Framework", value: "Tailwind CSS 4", icon: "Palette" }
    ],
    tags: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4", "SEO Optimization", "Framer Motion"],
    image: "/assets/case-studies/case-study-08-webants-digital.png",
    shotImage: "/assets/shots/webants.png",
    liveUrl: "https://webantsdigital.com",
    isFeatured: false,
    keyFeatures: [
      "Tailored service offerings for real estate brokerages and home service providers.",
      "Modern dark/light glassmorphic UI layout with high-converting CTA funnels.",
      "Dynamic service matrix detailing SEO, local visibility, and automated CRM workflows."
    ],
    architectureHighlights: [
      "Next.js App Router with Server Components for zero client JS bundle overhead on static pages.",
      "Tailwind CSS 4 engine utilizing modern CSS variables for theme customization."
    ]
  },
  {
    id: "devfinity-bd",
    number: "09",
    title: "Devfinity BD",
    subtitle: "High-Performance Static Business Website — SEO Rebuild",
    year: "2026",
    category: "SEO & Marketing",
    role: "Performance Engineer & Content Strategist",
    summary: "A fast, SEO-optimized static rebuild of devfinitybd.com, repositioned from a security-agency audience to businesses of every kind spanning digital, finance, operations, and support.",
    problem: "The original WordPress site was bloated, slow-loading, and constrained to a narrow niche.",
    solution: "Deliberately rewrote the site into zero-dependency static HTML/CSS/JS with structured JSON-LD schema, automated Web3Forms handling, sitemap, and robots.txt.",
    metrics: [
      { label: "Lighthouse", value: "99/100 Speed", icon: "Zap" },
      { label: "Architecture", value: "Zero Dependency", icon: "Feather" },
      { label: "Form Engine", value: "Web3Forms API", icon: "Send" }
    ],
    tags: ["HTML5", "CSS3", "JavaScript", "Web3Forms", "JSON-LD SEO", "Static Hosting", "Performance Optimization"],
    image: "/assets/case-studies/case-study-09-devfinity-bd.png",
    shotImage: "/assets/shots/devfinity.png",
    liveUrl: "https://devfinitybd.com",
    isFeatured: false,
    keyFeatures: [
      "Zero-dependency static HTML rebuild yielding lightning fast page loads.",
      "Structured JSON-LD schema for rich snippet Google search indexation.",
      "Repositioned service architecture spanning digital, finance, payroll, and support."
    ],
    architectureHighlights: [
      "Eliminated heavy WordPress PHP plugins in favor of clean semantic HTML5 markup.",
      "Web3Forms API integration delivering client contact submissions directly to email inbox."
    ]
  }
];
