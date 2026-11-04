export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  tagline: string;
  description: string;
  impact: string[];
  technologies: string[];
  mockupImage: string;
  featured: boolean;
  liveUrl?: string;
  githubUrl?: string;
  isAiPowered: boolean;
  details: {
    overview: string;
    architecture: string;
    challenges: string;
    outcomes: string[];
  };
}

export interface ServiceCategory {
  id: string;
  title: string;
  shortTitle: string;
  icon: string;
  serviceCount: number;
  badge: string;
  description: string;
  services: string[];
}

export interface CreativeItem {
  id: string;
  number?: string;
  title: string;
  category: string;
  thumbnail: string;
  description: string;
  tags: string[];
  tools?: string[];
  aspectRatio?: 'landscape' | 'portrait' | 'square';
}

export interface JourneyMilestone {
  year: string;
  title: string;
  subtitle: string;
  organization: string;
  type: 'education' | 'freelance' | 'fulltime';
  description: string;
  highlights: string[];
  icon: string;
}

export interface TechItem {
  name: string;
  category: 'frontend' | 'backend' | 'ai' | 'database' | 'devops' | 'tools';
  icon: string;
  highlight?: boolean;
}

export const PERSONAL_INFO = {
  name: "Karthikeyan Prabakaran",
  shortName: "KP",
  headline: "Software Developer | Full-Stack Engineer | AI Automation Developer",
  email: "karthikeyanprabakaran23@gmail.com",
  phone: "+91 99768 93141",
  location: "Thanjavur, Tamil Nadu, India",
  linkedin: "https://www.linkedin.com/in/karthikeyan-prabakaran-36b87a3a3/",
  github: "https://github.com/karthikeyanprabakaran23-gif",
  portfolio: "https://karthikeyanprabakra-portfolio.netlify.app/",
  resumeUrl: "/assets/Karthik_Resume.pdf",
  bio: "I'm Karthikeyan Prabakaran, a software developer and AI automation engineer from Thanjavur, Tamil Nadu. I build web applications, automation systems, AI-powered solutions, and digital products that turn complex ideas into practical, real-world solutions.",
  stats: [
    { label: "Years Experience", value: "2+" },
    { label: "Projects Built", value: "7+" },
    { label: "Technologies", value: "20+" },
    { label: "Ideas In Progress", value: "∞" },
  ]
};

export const PROJECTS: Project[] = [
  {
    id: "campuscv",
    title: "CampusCV",
    subtitle: "Digital Portfolio SaaS Platform",
    category: "SaaS / Full Stack",
    tagline: "Create, customize and publish stunning portfolios with ease.",
    description: "A comprehensive SaaS platform that empowers students and developers to design, customize, and publish professional digital portfolios with zero coding required.",
    mockupImage: "/assets/caampuscv.png",
    featured: true,
    isAiPowered: false,
    impact: [
      "Modular template-based editor with instant live preview",
      "One-click public portfolio hosting with custom shareable vanity URLs",
      "Dynamic PDF resume generator and light/dark theme customization",
      "Zero-latency state persistence with Supabase and SQLite backends"
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "SQLite", "Supabase SSR", "clsx"],
    liveUrl: "https://campuscv.com",
    githubUrl: "https://github.com/karthikeyanprabakaran23-gif/campuscv",
    details: {
      overview: "CampusCV was engineered to bridge the gap between academic resumes and live web portfolios. It features a WYSIWYG editor allowing users to choose from curated, industry-tailored themes, configure section hierarchies, and publish live on the web with permanent vanity URLs.",
      architecture: "Architected using Next.js 15 with App Router, server-rendered preview engines, dynamic template bundling, and multi-tenant persistence. Strict separation between preview engines and core SaaS state prevents layout pollution.",
      challenges: "Ensuring exact 1:1 fidelity between the interactive template editor canvas and the final compiled public static pages across diverse screen sizes.",
      outcomes: [
        "Enabled students to generate recruiter-ready portfolios in under 5 minutes",
        "Streamlined template switching without losing user content",
        "Integrated client-side PDF compilation for synchronized physical resumes"
      ]
    }
  },
  {
    id: "spark-ai",
    title: "SparkAI Chat",
    subtitle: "AI Chat & Business Automation Platform",
    category: "AI / Chatbots",
    tagline: "Conversational AI fused with multi-channel business automation.",
    description: "An enterprise-grade business automation platform combining intelligent LLM conversational agents with multi-channel messaging and lead lifecycle pipelines.",
    mockupImage: "/assets/sparkaichat.png",
    featured: true,
    isAiPowered: true,
    impact: [
      "Autonomous conversational AI agents for 24/7 customer engagement",
      "Direct integration with WhatsApp Cloud API and webhooks",
      "SaaS dashboard for monitoring active conversations, leads, and analytics",
      "Dynamic prompt orchestration with contextual RAG retrieval"
    ],
    technologies: ["Node.js", "JavaScript", "OpenAI / Claude LLMs", "WhatsApp APIs", "Express", "MongoDB", "WebSockets"],
    liveUrl: "https://sparkaichat.com",
    githubUrl: "https://github.com/karthikeyanprabakaran23-gif/spark-ai",
    details: {
      overview: "SparkAI Chat delivers an omnichannel conversational hub that connects custom-tuned language models to real-time communication channels. Businesses can configure custom agent personas, ingest support documents, and orchestrate campaign broadcasts.",
      architecture: "Built on event-driven Node.js microservices with persistent WebSocket connections, queue-based message routing to prevent API rate exhaustion, and stateful multi-turn dialog tracking.",
      challenges: "Maintaining sub-second response latencies while orchestrating complex multi-turn context retrieval and handling concurrent WhatsApp inbound webhooks.",
      outcomes: [
        "Automated over 80% of repetitive customer inquiries",
        "Seamlessly routed qualified leads into CRM databases",
        "Empowered non-technical staff to train and deploy specialized support bots"
      ]
    }
  },
  {
    id: "sendi",
    title: "Sendi",
    subtitle: "WhatsApp Campaign & Broadcast System",
    category: "SaaS / Automation",
    tagline: "High-throughput messaging and campaign orchestration at scale.",
    description: "A dashboard-driven communication engine designed for executing targeted broadcast campaigns, automated drip sequences, and two-way subscriber workflows.",
    mockupImage: "/assets/sendi - whatsapp.png",
    featured: true,
    isAiPowered: false,
    impact: [
      "Scheduled broadcast workflows capable of processing thousands of contacts",
      "Dynamic message variable templating with media attachment support",
      "Automated unsubscribe, opt-in compliance, and delivery receipt tracking",
      "Zero ban-rate queuing algorithm respecting WhatsApp throughput limits"
    ],
    technologies: ["Node.js", "Express", "WhatsApp Cloud API", "Redis Queues", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "https://sendi.co.in",
    githubUrl: "https://github.com/karthikeyanprabakaran23-gif/whatsapp-campaign-engine",
    details: {
      overview: "Built to replace clunky legacy SMS services, this platform provides businesses with rich interactive WhatsApp campaigns featuring quick-reply buttons, call-to-action cards, and real-time read-receipt analytics.",
      architecture: "Node.js core with Redis-backed message queuing (BullMQ) to strictly adhere to Meta API rate-limiting tiers, automated retry handling with exponential backoff, and webhook listeners.",
      challenges: "Preventing rate-limit throttling and handling transient delivery failures across heterogeneous cellular carriers.",
      outcomes: [
        "Achieved 98% message delivery rate across test campaigns",
        "Tripled client engagement compared to traditional email campaigns",
        "Provided live webhook-driven delivery telemetry"
      ]
    }
  },
  {
    id: "ai-hr-assistant",
    title: "AI HR Assistant",
    subtitle: "Candidate Screening & Resume NLP Engine",
    category: "AI / Automation",
    tagline: "Natural Language Processing to evaluate, match and rank talent.",
    description: "An intelligent HR assistant that parses resumes in PDF/Word formats, analyzes candidate skill graphs against job descriptions, and provides objective ranking scores.",
    mockupImage: "/assets/art/ai_hr_art.png",
    featured: true,
    isAiPowered: true,
    impact: [
      "Automated extraction of skills, education, and career experience from unformatted PDFs",
      "Semantic cosine-similarity matching against technical job criteria",
      "Objective candidate scorecard generation with bias-reduced evaluations",
      "Cut preliminary resume screening turnaround from hours to seconds"
    ],
    technologies: ["Python", "NLP", "spaCy", "Scikit-Learn", "pdfminer", "FastAPI", "React"],
    githubUrl: "https://github.com/karthikeyanprabakaran23-gif/ai-hr-assistant",
    details: {
      overview: "Designed to assist technical recruiters in sifting through hundreds of applicants. The system extracts named entities, constructs a candidate capability matrix, and computes semantic alignment with required tech stacks.",
      architecture: "FastAPI microservice leveraging customized spaCy NLP pipelines for entity recognition and TF-IDF / vector embeddings for semantic relevance scoring.",
      challenges: "Overcoming diverse resume layouts, non-standard headings, and multi-column document formats without losing contextual semantic tokens.",
      outcomes: [
        "Demonstrated 85%+ accuracy in identifying essential technical qualifications",
        "Significantly accelerated recruiter shortlisting time",
        "Generated automated talent scorecards comparing applicants side-by-side"
      ]
    }
  }
];

// ─── ALL PROJECTS (full catalogue shown on /projects page) ──────────────────
export interface ProjectEntry {
  id: string;
  title: string;
  subtitle?: string;
  category: string;
  description: string;
  highlights?: string[];
  liveUrl?: string;
  isService?: boolean;
  image?: string;
}

export const ALL_PROJECTS: ProjectEntry[] = [
  {
    id: "campuscv",
    title: "CampusCV",
    subtitle: "Digital Portfolio SaaS Platform",
    category: "SaaS / Full Stack",
    description: "A comprehensive digital portfolio builder empowering students, software developers, and creatives to design, customize, and publish recruiter-ready portfolios with zero code.",
    highlights: [
      "WYSIWYG template editor with instant multi-device live preview",
      "One-click public hosting with permanent custom vanity URLs",
      "Dynamic client-side PDF resume generation synchronized with web profile"
    ],
    liveUrl: "https://campuscv.com",
    image: "/assets/caampuscv.png",
  },
  {
    id: "sendi",
    title: "Sendi",
    subtitle: "WhatsApp Campaign & Broadcast Automation Engine",
    category: "SaaS / Automation",
    description: "High-throughput messaging and broadcast orchestration platform designed to replace legacy SMS with rich, interactive WhatsApp campaigns, automated drip sequences, and analytics.",
    highlights: [
      "Zero ban-rate queue algorithm strictly honoring Meta Cloud API throughput tiers",
      "Dynamic variable templating with interactive call-to-action cards and media",
      "98%+ verified message delivery rate with live webhook read-receipt tracking"
    ],
    liveUrl: "https://sendi.co.in",
    image: "/assets/sendi - whatsapp.png",
  },
  {
    id: "spark-ai",
    title: "Spark AI",
    subtitle: "Omnichannel AI Conversational Hub & Agent Workflows",
    category: "AI / Chatbots",
    description: "Enterprise conversational intelligence system combining custom-tuned LLM agents with multi-channel business messaging, contextual knowledge bases, and lead qualification.",
    highlights: [
      "Autonomous 24/7 conversational AI agents with stateful multi-turn context memory",
      "Dynamic RAG document ingestion for instant, accurate customer inquiry resolution",
      "Automated webhook synchronization routing qualified leads into CRM databases"
    ],
    liveUrl: "https://sparkaichat.com",
    image: "/assets/sparkaichat.png",
  },
  {
    id: "ai-receptionist",
    title: "AI Receptionist",
    subtitle: "Voice AI Inbound & Appointment Automation",
    category: "Voice AI",
    description: "Voice-first autonomous telephone receptionist that handles inbound calls, screens callers, answers company FAQs, and books appointments directly into calendars.",
    highlights: [
      "Sub-second voice synthesis and transcription for natural phone conversations",
      "Automated calendar booking and caller intent qualification",
      "Instant post-call summaries dispatched via WhatsApp and SMS"
    ],
    image: "/assets/modern_ai_receptionist.png",
  },
  {
    id: "xtraleads",
    title: "XtraLeads",
    subtitle: "Geospatial B2B Lead Extraction & Targeted Outreach",
    category: "Data Engineering",
    description: "Automated growth pipeline that scrapes verified merchant leads from Google Maps, qualifies prospective clients, and dispatches personalized WhatsApp outreach messages.",
    highlights: [
      "Automated scraping of verified local business contacts, ratings, and phone numbers",
      "Zero-touch lead qualification with hyper-personalized merchant pitch copy",
      "Embedded dynamic demo website links proven to boost prospect response rates"
    ],
    liveUrl: "https://api.sendi.co.in",
    image: "/assets/modern_xtraleads.png",
  },
  {
    id: "ai-blind-vision",
    title: "AI Blind Vision",
    subtitle: "Computer Vision Accessibility & Real-Time Narration",
    category: "Computer Vision",
    description: "Real-time assistive computer vision application designed for sight-impaired individuals, providing instant audio narration of surroundings, obstacles, and objects.",
    highlights: [
      "Low-latency camera object detection and spatial obstacle recognition",
      "Natural language audio feedback describing surroundings in real time",
      "Edge-optimized inference architecture for fluid on-device mobile execution"
    ],
    image: "/assets/modern_blind_vision.png",
  },
  {
    id: "cinemas-qr-ordering",
    title: "Cinemas QR Ordering",
    subtitle: "In-Seat Digital Ordering & Kitchen Fulfillment System",
    category: "Full Stack / Business",
    description: "In-seat cinema food and beverage ordering platform allowing moviegoers to scan a seat-specific QR code, browse menus, pay online, and receive food delivered to their seat.",
    highlights: [
      "Zero-app-install web checkout with seat-specific order routing",
      "Live kitchen fulfillment display with real-time order status tracking",
      "Automated payment gateway reconciliation and item inventory tracking"
    ],
    image: "/assets/modern_cinemas_qr.png",
  },
  {
    id: "ai-revenue-brain",
    title: "AI Revenue Brain",
    subtitle: "Predictive Commercial Analytics & Growth Recommendations",
    category: "AI / Product Architecture",
    description: "AI-driven commercial intelligence dashboard that analyzes historical business metrics, detects early customer churn signals, and recommends targeted revenue expansion strategies.",
    highlights: [
      "Automated pattern recognition identifying upsell and churn risks early",
      "Predictive revenue modeling and dynamic price elasticity simulations",
      "Executive growth summaries synthesized automatically from transactional data"
    ],
    image: "/assets/modern_revenue_brain.png",
  },
  {
    id: "website-to-app",
    title: "Website-to-App Conversion",
    subtitle: "Native & Hybrid Mobile Transformation Service",
    category: "Service",
    description: "End-to-end engineering service converting web applications and portals into high-performance mobile apps with native capabilities, push notifications, and store deployment.",
    highlights: [
      "Smooth 60fps mobile responsiveness with native navigation patterns",
      "Offline caching, secure device storage, and background sync",
      "Guaranteed publishing approval on Google Play Store and Apple App Store"
    ],
    isService: true,
    image: "/assets/modern_website_to_app.png",
  },
  {
    id: "mobile-app-dev",
    title: "Full Mobile App Development",
    subtitle: "Cross-Platform React Native & Flutter Engineering",
    category: "Service",
    description: "Turnkey mobile app development from interactive wireframes to production deployment, delivering polished user experiences across iOS and Android.",
    highlights: [
      "High-performance cross-platform codebases built with React Native and Flutter",
      "Biometric authentication, secure payment APIs, and real-time push engines",
      "Automated CI/CD build distribution and crash-monitoring telemetry"
    ],
    isService: true,
    image: "/assets/modern_mobile_dev.png",
  },
  {
    id: "review-coupon-loyalty",
    title: "Review, Coupon & Loyalty System",
    subtitle: "Customer Retention & Gamified Reward Engine",
    category: "Full Stack / Business",
    description: "Full-stack customer engagement platform that automates authentic review generation, distributes single-use digital coupons, and operates loyalty points programs.",
    highlights: [
      "Automated post-purchase review triggers with Google Review boost routing",
      "Single-use cryptographic digital coupons preventing redemption abuse",
      "Gamified points ledger and tier progression driving repeat visits"
    ],
    image: "/assets/modern_loyalty_coupon.png",
  },
  {
    id: "website-development",
    title: "Website Development",
    subtitle: "Bespoke Modern Web Architectures & SaaS Frontends",
    category: "Service",
    description: "Full-stack web engineering delivering fast, responsive, and SEO-optimized digital platforms using Next.js, React, Tailwind CSS, and scalable cloud backends.",
    highlights: [
      "Sub-second First Contentful Paint with Next.js App Router and server rendering",
      "Bespoke interactive animations, responsive fluid layouts, and accessibility",
      "Integrated Headless CMS, database schema design, and secure API gateways"
    ],
    isService: true,
    image: "/assets/modern_website_dev.png",
  },
  {
    id: "saas-product-development",
    title: "SaaS Product Development",
    subtitle: "End-to-End Multi-Tenant Cloud Product Engineering",
    category: "Service",
    description: "Complete SaaS product development covering architectural planning, database multi-tenancy, Stripe subscription billing, MVP engineering, and production deployment.",
    highlights: [
      "Robust multi-tenant database isolation and role-based access control (RBAC)",
      "Automated Stripe subscription billing, webhook handling, and customer portals",
      "Fast-track delivery moving from specification to production launch in weeks"
    ],
    isService: true,
    image: "/assets/modern_saas_dev.png",
  },
];

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "software-engineering",
    title: "Software Engineering",
    shortTitle: "Software Eng",
    icon: "Code2",
    serviceCount: 12,
    badge: "12+ Services",
    description: "Architecting reliable, scalable, and maintainable software systems from backend engines to distributed architectures.",
    services: [
      "Custom Enterprise Software Development",
      "Microservices Architecture & Design",
      "Legacy System Refactoring & Modernization",
      "High-Throughput Distributed Systems",
      "CLI Developer Tooling & SDK Engineering",
      "Multi-Tenant SaaS Architecture",
      "Real-Time Stream Processing Engines",
      "Database Modeling & Performance Tuning",
      "System Profiling & Bottleneck Optimization",
      "Event-Driven Architecture (Kafka/RabbitMQ)",
      "Cross-Platform Core Libraries",
      "Fault-Tolerant System Failover"
    ]
  },
  {
    id: "web-engineering",
    title: "Web Engineering",
    shortTitle: "Web Eng",
    icon: "Globe",
    serviceCount: 15,
    badge: "15+ Services",
    description: "Building blazing-fast modern web applications using Next.js, React, TypeScript, and modern CSS frameworks.",
    services: [
      "Next.js App Router Web Applications",
      "Full-Stack React Platform Engineering",
      "Progressive Web Apps (PWA) with Offline Support",
      "High-Performance Marketing Landing Pages",
      "Headless CMS Integration (Strapi, Sanity)",
      "Server-Side Rendering (SSR) & Static Generation (SSG)",
      "Responsive & Adaptive UI Architecture",
      "Web Core Vitals & Performance Optimization",
      "Enterprise State Management (Zustand, Redux)",
      "Design-to-Code Pixel Perfection",
      "WCAG 2.1 AA Accessibility Compliance",
      "Cross-Browser Compatibility Testing",
      "Micro-Frontend Architecture",
      "Search Engine Optimization (Technical SEO)",
      "Interactive SVG & Data Visualizations"
    ]
  },
  {
    id: "mobile-engineering",
    title: "Mobile Engineering",
    shortTitle: "Mobile Eng",
    icon: "Smartphone",
    serviceCount: 10,
    badge: "10+ Services",
    description: "Developing cross-platform mobile apps for iOS and Android with smooth animations and native responsiveness.",
    services: [
      "Flutter Cross-Platform App Development",
      "React Native Application Engineering",
      "Native iOS & Android Integration",
      "Offline-First Local Storage (SQLite/Hive)",
      "Push Notification Pipelines (FCM/OneSignal)",
      "In-App Purchases & Payment Gateways",
      "App Store & Google Play Store Publishing",
      "Biometric Authentication & Security",
      "Mobile Crash Reporting & Analytics",
      "Custom Mobile UI Component Kits"
    ]
  },
  {
    id: "ai-intelligence",
    title: "AI & Machine Intelligence",
    shortTitle: "AI & Machine Intel",
    icon: "Brain",
    serviceCount: 14,
    badge: "14+ Services",
    description: "Integrating Large Language Models, autonomous agent workflows, computer vision, and cognitive intelligence into modern software.",
    services: [
      "LLM & Generative AI Integration (GPT-4, Claude, Gemini)",
      "Custom Conversational Chatbots & Support Agents",
      "Retrieval Augmented Generation (RAG) Pipelines",
      "Semantic Search & Vector Database Engineering",
      "Autonomous Multi-Agent Task Orchestration",
      "Prompt Engineering & Automated Evaluation",
      "Natural Language Processing (NLP) & Classification",
      "Document AI & Intelligent Information Extraction",
      "Computer Vision & Object Recognition",
      "AI Speech-to-Text & Audio Transcription",
      "Predictive Machine Learning Modeling",
      "Scikit-Learn Data Mining Pipelines",
      "Open-Source LLM Local Hosting (Ollama/vLLM)",
      "AI Ethics & Guardrails Configuration"
    ]
  },
  {
    id: "data-analytics",
    title: "Data & Analytics",
    shortTitle: "Data & Analytics",
    icon: "BarChart3",
    serviceCount: 12,
    badge: "12+ Services",
    description: "Transforming raw unstructured data into clean structured intelligence, real-time dashboards, and automated reporting.",
    services: [
      "End-to-End Data Pipeline Architecture",
      "Automated Web Scraping & Data Extraction",
      "ETL/ELT Data Processing Workflows",
      "Interactive Business Intelligence Dashboards",
      "Data Cleaning, Normalization & Imputation",
      "Exploratory Data Analysis (EDA) & Statistical Reporting",
      "Big Data Processing with Pandas & NumPy",
      "Real-Time Event Stream Analytics",
      "Data Warehouse Schema Design",
      "Geospatial Data Processing & Mapping",
      "Automated Scheduled KPI Reporting",
      "Data Integrity Validation & Unit Testing"
    ]
  },
  {
    id: "cloud-engineering",
    title: "Cloud Engineering",
    shortTitle: "Cloud Eng",
    icon: "Cloud",
    serviceCount: 10,
    badge: "10+ Services",
    description: "Designing resilient, scalable cloud architectures on AWS, GCP, and modern serverless platforms.",
    services: [
      "AWS Cloud Infrastructure Setup & Management",
      "Google Cloud Platform (GCP) Solutions",
      "Serverless Functions & Lambda Microservices",
      "Cloud Cost Optimization & Right-Sizing",
      "Virtual Private Cloud (VPC) & Security Groups",
      "Multi-Region High Availability Configuration",
      "Cloud Object Storage (S3 / Cloud Storage)",
      "Automated Cloud Backup & Disaster Recovery",
      "Edge Computing & CDN Acceleration (Cloudflare)",
      "Cloud Migration & Modernization Strategy"
    ]
  },
  {
    id: "devops-platform",
    title: "DevOps & Platform",
    shortTitle: "DevOps & Platform",
    icon: "Terminal",
    serviceCount: 10,
    badge: "10+ Services",
    description: "Automating deployments, containerizing applications, and implementing continuous integration and delivery pipelines.",
    services: [
      "Docker Containerization & Image Optimization",
      "CI/CD Pipelines (GitHub Actions, GitLab CI)",
      "Kubernetes Cluster Deployment & Ingress",
      "Infrastructure as Code (IaC) with Terraform",
      "Linux Server Administration & Hardening",
      "Zero-Downtime Blue/Green Deployments",
      "Prometheus & Grafana Monitoring & Alerting",
      "Log Aggregation & Centralized Tracing",
      "Environment Parity & Secrets Management",
      "Automated Release Notes & SemVer Tagging"
    ]
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    shortTitle: "Cybersecurity",
    icon: "ShieldCheck",
    serviceCount: 10,
    badge: "10+ Services",
    description: "Fortifying applications, APIs, user credentials, and corporate data against modern attack vectors and vulnerabilities.",
    services: [
      "Web Application Security Auditing",
      "OWASP Top 10 Vulnerability Remediation",
      "Role-Based Access Control (RBAC) & Permissions",
      "OAuth 2.0, OpenID Connect & JWT Authentication",
      "Data Encryption at Rest & in Transit (AES-256)",
      "API Rate Limiting & DDoS Mitigation",
      "SQL Injection & Cross-Site Scripting (XSS) Prevention",
      "Security Headers & Content Security Policy (CSP)",
      "Credential Vaulting & Token Secret Rotation",
      "Third-Party Dependency Vulnerability Auditing"
    ]
  },
  {
    id: "uiux-design",
    title: "UI/UX & Product Design",
    shortTitle: "UI/UX & Design",
    icon: "Layout",
    serviceCount: 11,
    badge: "11+ Services",
    description: "Crafting modern, intuitive, and conversion-focused visual interfaces with meticulous attention to detail.",
    services: [
      "Figma UI/UX Design & High-Fidelity Wireframing",
      "Interactive Clickable Design Prototypes",
      "Comprehensive Design System & Token Creation",
      "User Journey Mapping & Information Architecture",
      "Micro-Interactions & Animation Choreography",
      "Dark Mode & Light Mode Visual Adaptation",
      "Mobile-First Responsive Layouts",
      "Usability Testing & User Feedback Synthesis",
      "Design Handoff & Developer Asset Kits",
      "Conversion Rate Optimization (CRO) Interfaces",
      "Typography & Visual Identity Guidelines"
    ]
  },
  {
    id: "api-integration",
    title: "API & Integration",
    shortTitle: "API & Integration",
    icon: "Network",
    serviceCount: 9,
    badge: "9+ Services",
    description: "Building robust RESTful & GraphQL APIs and seamlessly connecting third-party platforms and webhooks.",
    services: [
      "RESTful API Design & OpenAPI / Swagger Specs",
      "GraphQL API Development & Schema Federation",
      "Third-Party SaaS Integrations (Stripe, Razorpay)",
      "Real-Time Webhooks & Event-Driven Ingestion",
      "API Gateway Routing & Throttling Policies",
      "Reverse Proxying & CORS Configuration",
      "Secure API Authentication & Token Lifecycle",
      "CRM & ERP API Data Connectors",
      "Automated API Mocking & Regression Suites"
    ]
  },
  {
    id: "automation-rpa",
    title: "Automation & RPA",
    shortTitle: "Automation & RPA",
    icon: "Cpu",
    serviceCount: 11,
    badge: "11+ Services",
    description: "Eliminating manual overhead through intelligent workflow automation, browser scraping, and scheduled tasks.",
    services: [
      "Python Headless Scripting & Process Automation",
      "Browser Automation via Playwright & Puppeteer",
      "WhatsApp Business API Campaign Automation",
      "Automated Transactional & Marketing Email Drips",
      "No-Code / Low-Code Workflows (n8n, Zapier, Make)",
      "Document & Form Data Extraction (PDF / OCR)",
      "Lead Enrichment & Verification Pipelines",
      "Cron Job Orchestration & Scheduled Tasks",
      "Social Media Auto-Publishing Engines",
      "E-Commerce Inventory Sync Automation",
      "Robotic Desktop Process Automation (RPA)"
    ]
  },
  {
    id: "enterprise-systems",
    title: "Enterprise Systems",
    shortTitle: "Enterprise Systems",
    icon: "Building2",
    serviceCount: 8,
    badge: "8+ Services",
    description: "Building custom internal portals, CRM systems, and administrative software tailored to business operations.",
    services: [
      "Custom CRM Development & Deal Pipelines",
      "Internal Admin Portals & Staff Backoffices",
      "Role-Based Access Dashboards",
      "Inventory & Asset Tracking Platforms",
      "Subscription Billing & Invoicing Systems",
      "Approval Workflows & Audit Logs",
      "Document Storage & Archive Management",
      "Legacy Database Synchronization"
    ]
  },
  {
    id: "ecommerce",
    title: "E-Commerce",
    shortTitle: "E-Commerce",
    icon: "ShoppingBag",
    serviceCount: 10,
    badge: "10+ Services",
    description: "High-converting online store engineering with streamlined checkout, inventory sync, and global payment gateways.",
    services: [
      "Custom Next.js Headless E-Commerce Frontends",
      "Shopify & WooCommerce Custom Integration",
      "Stripe & Razorpay Checkout Integration",
      "Real-Time Cart & Multi-Step Checkout Flow",
      "Product Catalog Search, Filtering & Facets",
      "Discount Codes, Gift Cards & Referral Systems",
      "Automated Order Processing & Shipping Webhooks",
      "Customer Account Portals & Order History",
      "Abandoned Cart Recovery Workflows",
      "Multi-Currency & Tax Engine Integration"
    ]
  },
  {
    id: "fintech",
    title: "FinTech",
    shortTitle: "FinTech",
    icon: "CreditCard",
    serviceCount: 9,
    badge: "9+ Services",
    description: "Secure financial transaction infrastructure, billing engines, and compliance-aware digital payment pipelines.",
    services: [
      "Payment Gateway Integration (Razorpay, Stripe, PayPal)",
      "Recurring Subscription & Tiered Billing Engines",
      "Digital Wallet & Balance Ledger Systems",
      "Automated Invoicing & GST / VAT Calculation",
      "Financial Transaction Audit Logging",
      "Fraud Detection & Risk Heuristics",
      "Bank Account Verification & Payout Automation",
      "Financial Analytics & Revenue Forecasting",
      "PCI-DSS Sensitive Data Compliance Architecture"
    ]
  },
  {
    id: "healthtech",
    title: "HealthTech",
    shortTitle: "HealthTech",
    icon: "Activity",
    serviceCount: 9,
    badge: "9+ Services",
    description: "Digital health applications, clinic automation, patient portals, and automated hospital workflows.",
    services: [
      "Hospital Discharge Management Automation",
      "Patient Appointment Scheduling Platforms",
      "Doctor-Patient Consultation Portals",
      "Electronic Health Record (EHR) Data Ingestion",
      "Prescription & Pharmacy Inventory Systems",
      "HIPAA-Compliant Secure Data Transmission",
      "Lab Test Result Distribution Engines",
      "Symptom Checker & Triage Workflows",
      "Medical Diagnostic Data Dashboards"
    ]
  },
  {
    id: "edtech",
    title: "EdTech",
    shortTitle: "EdTech",
    icon: "GraduationCap",
    serviceCount: 8,
    badge: "8+ Services",
    description: "Building engaging learning platforms, student management portals, and automated assessment systems.",
    services: [
      "Custom Learning Management Systems (LMS)",
      "Interactive Student & Instructor Portals",
      "Video Course Streaming & Progress Tracking",
      "Automated Quiz, Coding Tests & Grading Engines",
      "Digital Certificate Generation & Verification",
      "Discussion Forums & Peer Review Systems",
      "Student Performance & Engagement Analytics",
      "Gamified Learning Badges & Leaderboards"
    ]
  },
  {
    id: "iot-connected",
    title: "IoT & Connected Systems",
    shortTitle: "IoT & Connected",
    icon: "Radio",
    serviceCount: 9,
    badge: "9+ Services",
    description: "Connecting physical hardware, sensor telemetry, and smart device controllers to web dashboards.",
    services: [
      "IoT Device Telemetry Ingestion via MQTT",
      "Real-Time Hardware Monitoring Dashboards",
      "WebSocket Bidirectional Hardware Control",
      "Sensor Data Logging & Time-Series Storage",
      "Over-The-Air (OTA) Firmware Management",
      "Geofencing & GPS Asset Tracking",
      "Automated Threshold Alerting & SMS Triggers",
      "Edge Node Data Preprocessing",
      "Smart Home & Industrial IoT Integration"
    ]
  },
  {
    id: "ar-vr-spatial",
    title: "AR/VR & Spatial",
    shortTitle: "AR/VR & Spatial",
    icon: "Layers",
    serviceCount: 8,
    badge: "8+ Services",
    description: "Interactive web-based spatial experiences, 3D product visualizers, and virtual showcase tours.",
    services: [
      "WebXR Interactive Browser Experiences",
      "3D Product Visualizers & Configurator Tools",
      "Virtual Real Estate & Showroom Walkthroughs",
      "Augmented Reality Quick-Look Integration",
      "3D Model Compression & Asset Optimization",
      "Interactive 360-Degree Panoramic Viewers",
      "Spatial UI Elements & Guided Tours",
      "Lightweight WebGL Interactive Canvas"
    ]
  },
  {
    id: "blockchain-web3",
    title: "Blockchain & Web3",
    shortTitle: "Blockchain & Web3",
    icon: "Coins",
    serviceCount: 10,
    badge: "10+ Services",
    description: "Building decentralized applications, smart contract integrations, and Web3 wallet connections.",
    services: [
      "EVM Smart Contract Development & Testing",
      "Web3 Wallet Integration (MetaMask, WalletConnect)",
      "Decentralized App (dApp) Frontend Engineering",
      "Token & NFT Minting Smart Contracts",
      "IPFS Decentralized Media Storage",
      "Blockchain Transaction Indexing & Querying",
      "Web3 Identity & Token-Gated Portals",
      "Smart Contract Gas Optimization",
      "Automated Contract Interaction Scripts",
      "DeFi Protocol API Connectors"
    ]
  },
  {
    id: "robotics-autonomous",
    title: "Robotics & Autonomous",
    shortTitle: "Robotics & Auto",
    icon: "Bot",
    serviceCount: 8,
    badge: "8+ Services",
    description: "Algorithms and automation for robotics, computer vision guidance, and autonomous script agents.",
    services: [
      "Autonomous Decision-Making Scripts",
      "Computer Vision Object Tracking",
      "Sensor Fusion & State Estimation Logic",
      "Robotic Task Path Planning Concepts",
      "Hardware Controller Serial Communication",
      "Automated Robotic Process Supervision",
      "Simulation Environment Interaction",
      "Safety Boundary Enforcement Logic"
    ]
  },
  {
    id: "game-interactive",
    title: "Game & Interactive",
    shortTitle: "Game & Interactive",
    icon: "Gamepad2",
    serviceCount: 10,
    badge: "10+ Services",
    description: "Developing browser-based canvas games, physics logic, Unity prototypes, and gamified web apps.",
    services: [
      "HTML5 Canvas 2D Game Development",
      "Unity & C# Gameplay Prototyping",
      "Web Audio Sound Synthesis & Routing",
      "Real-Time Multiplayer with WebSockets",
      "Custom Physics & Collision Detection",
      "Cross-Platform Touch & Gamepad Controls",
      "Sprite Sheet Animation Management",
      "Leaderboards, High Scores & Achievements",
      "Gamified Marketing & Loyalty Mini-Games",
      "Procedural Generation Algorithms"
    ]
  },
  {
    id: "testing-qa",
    title: "Software Testing & QA",
    shortTitle: "Testing & QA",
    icon: "CheckCircle2",
    serviceCount: 10,
    badge: "10+ Services",
    description: "Comprehensive automated quality assurance, end-to-end user testing, and performance profiling.",
    services: [
      "Automated End-to-End Testing with Playwright",
      "Unit & Integration Testing (Jest, Vitest)",
      "Automated API Regression Testing",
      "Lighthouse & Core Web Vitals Auditing",
      "Cross-Browser & Multi-Device Testing",
      "Load & Stress Testing (k6 / Artillery)",
      "Automated Visual Regression Verification",
      "Accessibility Standards Compliance Audits",
      "Continuous Quality Checks in CI/CD",
      "Bug Triage & Defect Reporting"
    ]
  },
  {
    id: "it-infrastructure",
    title: "IT Infrastructure",
    shortTitle: "IT Infrastructure",
    icon: "Server",
    serviceCount: 9,
    badge: "9+ Services",
    description: "Robust server provisioning, reverse proxies, automated SSL certificates, and network stability.",
    services: [
      "Linux Server Deployment & Maintenance",
      "Nginx & Caddy Reverse Proxy Configuration",
      "DNS Management & Custom Domain Routing",
      "Let's Encrypt SSL/TLS Certificate Automation",
      "UFW Firewall & SSH Key Security Hardening",
      "Automated Database Backup Snapshots",
      "System Resource Monitoring & Disk Cleanup",
      "Storage Volume Mounting & RAID Basics",
      "Zero-Downtime Daemon Process Supervisors (PM2)"
    ]
  },
  {
    id: "digital-transformation",
    title: "Digital Transformation",
    shortTitle: "Digital Transform",
    icon: "Sparkles",
    serviceCount: 11,
    badge: "11+ Services",
    description: "Modernizing traditional businesses with digital workflows, cloud migration, and intelligent systems.",
    services: [
      "Legacy Paper-to-Digital Workflow Migration",
      "Business Process Modernization Strategy",
      "Custom Internal Tooling & Automation",
      "Omnichannel Customer Experience Setup",
      "Centralized Cloud Database Architecture",
      "Data Synchronization Across Disparate Tools",
      "Digital Product MVP Rapid Development",
      "Developer Experience & Vibe Coding Training",
      "Technology Stack Audit & Recommendations",
      "Continuous Innovation & Automation Roadmap",
      "Scalable Digital Infrastructure Planning"
    ]
  },
  {
    id: "creative-media-studio",
    title: "AI Creative & Digital Media Studio",
    shortTitle: "Creative Studio",
    icon: "Film",
    serviceCount: 8,
    badge: "Featured Studio",
    description: "4K Videos • Motion Graphics • Posters • Social Media • Product Videos • Commercials",
    services: [
      "AI Video Generation & Prompt Direction",
      "Cinematic Video Editing & Color Grading",
      "Motion Graphics & Animated Title Sequences",
      "High-Impact Advertising Posters & Creatives",
      "Social Media Visual Asset Packs (Reels, TikTok, X)",
      "3D Product Showcase & Mockup Videos",
      "Promotional Commercials & Brand Trailers",
      "Dynamic Storyboard Visualization"
    ]
  }
];

export const CREATIVE_ITEMS: CreativeItem[] = [
  {
    id: "ai-video-generation",
    number: "01",
    title: "AI Video Generation",
    category: "AI Video",
    thumbnail: "/assets/art/service_01_ai_video.jpg",
    description: "Create cinematic visuals, imaginative scenes and AI-generated video content using modern generative tools.",
    tags: ["AI video", "Cinematic scenes", "Image-to-video", "Creative storytelling"],
    tools: ["Runway Gen-3", "Midjourney v6", "Topaz AI", "Premiere Pro"],
    aspectRatio: "landscape"
  },
  {
    id: "video-editing",
    number: "02",
    title: "Video Editing & Post-Production",
    category: "Video Editing",
    thumbnail: "/assets/art/service_02_video_editing.jpg",
    description: "Transform raw footage into polished videos with precise editing, color grading, sound design and smooth transitions.",
    tags: ["Video editing", "Color grading", "Sound design", "Reels", "Post-production"],
    tools: ["Premiere Pro", "DaVinci Resolve", "After Effects", "Audition"],
    aspectRatio: "landscape"
  },
  {
    id: "motion-graphics",
    number: "03",
    title: "Motion Graphics & Animation",
    category: "Motion Graphics",
    thumbnail: "/assets/art/service_03_motion_graphics.jpg",
    description: "Bring ideas to life through animated typography, visual effects, 2D motion design and engaging animated sequences.",
    tags: ["2D animation", "Motion design", "Visual effects", "Kinetic typography"],
    tools: ["Blender 3D", "After Effects", "Illustrator", "Cinema 4D"],
    aspectRatio: "landscape"
  },
  {
    id: "posters-creatives",
    number: "04",
    title: "Posters & Digital Creatives",
    category: "Posters",
    thumbnail: "/assets/art/service_04_posters.jpg",
    description: "Design visually striking posters, promotional graphics and branded digital assets for products, businesses and campaigns.",
    tags: ["Posters", "Brand creatives", "Promotional graphics", "Digital artwork"],
    tools: ["Photoshop", "Illustrator", "Figma", "Blender 3D"],
    aspectRatio: "landscape"
  },
  {
    id: "product-videos",
    number: "05",
    title: "Product Videos & Launch Films",
    category: "Product Videos",
    thumbnail: "/assets/art/service_05_product_videos.jpg",
    description: "Showcase products through cinematic demonstrations, feature highlights, launch videos and visually engaging product stories.",
    tags: ["Product showcases", "Launch films", "Product animations", "Demonstrations"],
    tools: ["Blender 3D", "DaVinci Resolve", "After Effects", "Topaz AI"],
    aspectRatio: "square"
  },
  {
    id: "commercial-advertisements",
    number: "06",
    title: "Commercial Advertisements",
    category: "Advertisements",
    thumbnail: "/assets/art/service_06_commercial_ads.jpg",
    description: "Create promotional video concepts and branded campaigns that communicate product value and capture audience attention.",
    tags: ["Commercial videos", "Brand campaigns", "Promotional films", "Ad creatives"],
    tools: ["Premiere Pro", "Runway Gen-3", "Midjourney v6", "After Effects"],
    aspectRatio: "landscape"
  },
  {
    id: "social-media-content",
    number: "07",
    title: "Social Media Content",
    category: "Social Media",
    thumbnail: "/assets/art/service_07_social_media.jpg",
    description: "Develop platform-ready reels, short-form videos, carousel designs and promotional content for digital audiences.",
    tags: ["Instagram Reels", "Social posts", "Carousels", "Short-form videos"],
    tools: ["CapCut Pro", "Figma", "Photoshop", "After Effects"],
    aspectRatio: "landscape"
  },
  {
    id: "cartoon-character-animation",
    number: "08",
    title: "Cartoon & Character Animation",
    category: "Cartoons",
    thumbnail: "/assets/art/service_08_cartoons.jpg",
    description: "Create expressive animated characters, illustrated scenes and storytelling visuals for creative projects and promotional content.",
    tags: ["3D cartoon visuals", "Character concepts", "Animated storytelling", "Illustration"],
    tools: ["Blender 3D (Grease Pencil)", "Illustrator", "After Effects", "Midjourney"],
    aspectRatio: "landscape"
  }
];

export const JOURNEY_MILESTONES: JourneyMilestone[] = [
  {
    year: "2022 - 2026",
    title: "B.Tech AI & Data Science",
    subtitle: "PRIST University, Thanjavur",
    organization: "PRIST University",
    type: "education",
    description: "Pursuing Artificial Intelligence & Data Science degree with honors. Focused on core software principles, machine learning architectures, statistical modeling, and hands-on system building.",
    highlights: [
      "Artificial Intelligence, Machine Learning & NLP",
      "Data Structures, Algorithms & Database Systems",
      "Independent real-world product development alongside coursework",
      "Honours Diploma in Full Stack Development (HDFD) certification"
    ],
    icon: "GraduationCap"
  },
  {
    year: "Aug 2025 - Dec 2025",
    title: "Freelance Developer",
    subtitle: "AI Automation & Data Systems",
    organization: "Self-Employed / Independent",
    type: "freelance",
    description: "Delivered custom automation, web scraping pipelines, and data systems for business clients, cutting manual operational workload by 60-70%.",
    highlights: [
      "Built automated Google Maps lead generation and data enrichment engines",
      "Engineered automated email and messaging communication workflows",
      "Cleaned, structured, and transformed massive raw datasets for commercial use",
      "Developed custom client dashboards and web prototypes"
    ],
    icon: "Briefcase"
  },
  {
    year: "Jan 2026 - Present",
    title: "AI Web Developer / Software Developer",
    subtitle: "Infowaves",
    organization: "Infowaves",
    type: "fulltime",
    description: "Architecting client-facing web applications, SaaS dashboards, AI-powered automation systems, and API integrations utilizing modern vibe coding and full-stack engineering.",
    highlights: [
      "Building SaaS dashboards for messaging, lead management, and AI chat",
      "Leveraging modern AI-assisted engineering workflows for rapid MVP shipping",
      "Integrating WhatsApp Cloud APIs, OpenAI/Claude models, and database systems",
      "Shipping high-performance frontend and backend production code"
    ],
    icon: "Building"
  }
];

export const TECH_STACK: TechItem[] = [
  { name: "React", category: "frontend", icon: "react", highlight: true },
  { name: "Next.js", category: "frontend", icon: "nextjs", highlight: true },
  { name: "Node.js", category: "backend", icon: "nodejs", highlight: true },
  { name: "Python", category: "backend", icon: "python", highlight: true },
  { name: "TypeScript", category: "frontend", icon: "typescript", highlight: true },
  { name: "Django", category: "backend", icon: "django" },
  { name: "PostgreSQL", category: "database", icon: "postgresql", highlight: true },
  { name: "MongoDB", category: "database", icon: "mongodb" },
  { name: "Docker", category: "devops", icon: "docker", highlight: true },
  { name: "AWS", category: "devops", icon: "aws" },
  { name: "Git", category: "tools", icon: "git", highlight: true },
  { name: "Tailwind CSS", category: "frontend", icon: "tailwind", highlight: true },
  { name: "Supabase", category: "database", icon: "supabase" },
  { name: "FastAPI", category: "backend", icon: "fastapi" },
  { name: "Playwright", category: "tools", icon: "playwright" },
  { name: "Figma", category: "tools", icon: "figma" }
];

