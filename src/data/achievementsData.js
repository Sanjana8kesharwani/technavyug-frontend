// achievementsData.js

const achievements = [
  {
    id: "1",
    name: "Aryan Sharma",
    role: "AI Research Intern",
    domain: "AI",
    batch: "2023",
    highlight:
      "Published paper on transformer optimization at NeurIPS 2023 with 94% accuracy improvement.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop&crop=face",
    bio: "Aryan is a passionate AI researcher who interned at IIT Delhi's NLP lab and published groundbreaking work on transformer optimization. He loves building intelligent systems that solve real-world problems.",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    description:
      "During his internship at IIT Delhi, Aryan worked on optimizing transformer architectures for low-resource NLP tasks. His paper was accepted at NeurIPS 2023, one of the most prestigious AI conferences in the world, achieving a 94% accuracy improvement over baseline models.",
    highlights: [
      "Published research paper at NeurIPS 2023",
      "94% accuracy improvement over baseline transformer models",
      "Worked under Prof. Rajeev Sangal at IIT Delhi NLP Lab",
      "Open-sourced the model weights on HuggingFace with 500+ downloads",
      "Awarded Best Intern of the Year at Technavyug 2023",
    ],
    skills: [
      "Python",
      "PyTorch",
      "Transformers",
      "NLP",
      "HuggingFace",
      "CUDA",
      "Research Writing",
      "Git",
    ],
    projects: [
      {
        title: "TransformerLite",
        description:
          "Lightweight transformer model optimized for edge devices with 3x faster inference.",
        image:
          "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=400&h=250&fit=crop",
      },
      {
        title: "NeuroBench",
        description:
          "Benchmarking suite for comparing NLP model performance across Indian languages.",
        image:
          "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=250&fit=crop",
      },
      {
        title: "AIAssist",
        description:
          "Context-aware AI assistant fine-tuned on academic research papers.",
        image:
          "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&h=250&fit=crop",
      },
    ],
    certificates: [
      {
        title: "Deep Learning Specialization — Coursera",
        image:
          "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=250&fit=crop",
      },
      {
        title: "NeurIPS 2023 Presenter Certificate",
        image:
          "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=400&h=250&fit=crop",
      },
    ],
    categories: [
      "Machine Learning",
      "Deep Learning",
      "Natural Language Processing",
    ],
  },

  {
    id: "2",
    name: "Priya Mehta",
    role: "Full Stack Developer",
    domain: "Web Dev",
    batch: "2024",
    highlight:
      "Built an open-source React component library with 2.4k GitHub stars in under 6 months.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=250&fit=crop&crop=face",
    bio: "Priya is a full stack developer who turned her internship project into a widely adopted open-source library. She is passionate about developer tooling, accessible UI, and building products that make other engineers' lives easier.",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    description:
      "Priya built a production-grade React component library during her internship that gained massive traction in the open-source community. Within 6 months of launch, the library accumulated 2.4k GitHub stars and was adopted by over 50 startups across India.",
    highlights: [
      "2.4k GitHub stars on open-source React library in 6 months",
      "Adopted by 50+ startups as their primary UI component library",
      "Contributed to accessibility (a11y) standards in the library",
      "Featured in JavaScript Weekly newsletter",
      "Conducted 3 open-source workshops at college fests",
    ],
    skills: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Storybook",
      "Jest",
      "Figma",
      "Git",
    ],
    projects: [
      {
        title: "ReactUI Kit",
        description:
          "Open-source component library with 60+ accessible, customizable React components.",
        image:
          "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop",
      },
      {
        title: "DevDashboard",
        description:
          "Full stack developer productivity dashboard with GitHub, Jira and Slack integrations.",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      },
      {
        title: "FormWizard",
        description:
          "Dynamic form builder with drag-and-drop support and JSON schema export.",
        image:
          "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=250&fit=crop",
      },
    ],
    certificates: [
      {
        title: "Meta Frontend Developer Certificate — Coursera",
        image:
          "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=250&fit=crop",
      },
      {
        title: "AWS Certified Cloud Practitioner",
        image:
          "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=400&h=250&fit=crop",
      },
    ],
    categories: ["Full Stack Web Development", "Frontend Development"],
  },

  {
    id: "3",
    name: "Rohan Verma",
    role: "ML Engineer",
    domain: "AI",
    batch: "2022",
    highlight:
      "Deployed a real-time fraud detection model saving ₹1.2Cr in transactions at a fintech startup.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=250&fit=crop&crop=face",
    bio: "Rohan is an ML engineer with a deep interest in financial technology. His fraud detection system is currently live in production at a leading fintech startup and has prevented crores of rupees in fraudulent transactions.",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    description:
      "Rohan designed and deployed an end-to-end real-time fraud detection pipeline during his internship at a Bangalore-based fintech startup. The system processes over 10,000 transactions per minute with sub-100ms latency and has saved ₹1.2 crore in prevented fraud within the first quarter of deployment.",
    highlights: [
      "Saved ₹1.2 Crore in fraudulent transactions in Q1 itself",
      "Model processes 10,000+ transactions per minute in real-time",
      "Achieved 99.2% precision with less than 0.1% false positive rate",
      "Integrated with existing payment gateway with zero downtime deployment",
      "Presented findings at Fintech India Summit 2023",
    ],
    skills: [
      "Python",
      "Scikit-learn",
      "XGBoost",
      "Kafka",
      "Docker",
      "FastAPI",
      "PostgreSQL",
      "Redis",
    ],
    projects: [
      {
        title: "FraudGuard",
        description:
          "Real-time fraud detection system using ensemble ML models and streaming data pipelines.",
        image:
          "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=250&fit=crop",
      },
      {
        title: "RiskScore API",
        description:
          "REST API that returns a risk score for any transaction within 50ms using ML inference.",
        image:
          "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=250&fit=crop",
      },
      {
        title: "DataStream Monitor",
        description:
          "Real-time Kafka dashboard for monitoring ML model performance in production.",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      },
    ],
    certificates: [
      {
        title: "Machine Learning — Stanford Online (Coursera)",
        image:
          "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=250&fit=crop",
      },
      {
        title: "Google Professional ML Engineer Certificate",
        image:
          "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=400&h=250&fit=crop",
      },
    ],
    categories: ["Machine Learning", "Data Science"],
  },

  {
    id: "4",
    name: "Sneha Gupta",
    role: "IoT Solutions Architect",
    domain: "IoT",
    batch: "2023",
    highlight:
      "Designed a smart irrigation system adopted by 200+ farms across Rajasthan, reducing water use by 40%.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=250&fit=crop&crop=face",
    bio: "Sneha is an IoT engineer driven by the mission to use technology for social good. Her smart irrigation project has transformed farming practices across rural Rajasthan and is being scaled to other states with government support.",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    description:
      "Sneha designed an end-to-end IoT-based smart irrigation system using soil moisture sensors, weather APIs, and automated water pumps. The system was piloted in 10 farms and scaled to 200+ farms across Rajasthan within a year, reducing water consumption by 40% and increasing crop yield by 25%.",
    highlights: [
      "Deployed across 200+ farms in Rajasthan",
      "40% reduction in water usage saving millions of liters annually",
      "25% increase in average crop yield reported by farmers",
      "Partnered with Rajasthan State Agriculture Department for scaling",
      "Won 1st place at Smart India Hackathon 2023",
    ],
    skills: [
      "Arduino",
      "Raspberry Pi",
      "MQTT",
      "Python",
      "AWS IoT",
      "Node-RED",
      "C++",
      "Firebase",
    ],
    projects: [
      {
        title: "AquaSmart",
        description:
          "IoT-based smart irrigation system with automated scheduling and soil monitoring.",
        image:
          "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=250&fit=crop",
      },
      {
        title: "FarmDashboard",
        description:
          "Mobile-friendly dashboard for farmers to monitor field conditions and control irrigation remotely.",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      },
      {
        title: "WeatherBridge",
        description:
          "Micro-weather station with IoT sensors that feeds hyperlocal data to the irrigation algorithm.",
        image:
          "https://images.unsplash.com/photo-1504608524841-42584120d693?w=400&h=250&fit=crop",
      },
    ],
    certificates: [
      {
        title: "AWS IoT Core Fundamentals — AWS Training",
        image:
          "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=250&fit=crop",
      },
      {
        title: "Smart India Hackathon 2023 — Winner Certificate",
        image:
          "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=400&h=250&fit=crop",
      },
    ],
    categories: ["IoT Systems", "Embedded Systems"],
  },

  {
    id: "5",
    name: "Karan Joshi",
    role: "Frontend Engineer",
    domain: "Web Dev",
    batch: "2024",
    highlight:
      "Interned at Google and contributed to core Web Vitals tooling shipped to Chrome DevTools.",
    image:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=250&fit=crop&crop=face",
    bio: "Karan is a frontend engineer who landed a coveted internship at Google and shipped real features to Chrome DevTools used by millions of developers worldwide. He specializes in performance optimization and developer tooling.",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    description:
      "Karan interned at Google's Chrome DevTools team where he contributed to Web Vitals tooling — a set of performance metrics used by developers globally. His contributions were shipped in Chrome 118 and are currently used by millions of developers to improve website performance.",
    highlights: [
      "Contributed to Chrome DevTools shipped in Chrome 118",
      "Worked on Core Web Vitals panel used by millions of developers",
      "Received a return offer from Google for full-time position",
      "Fixed 12 open bugs in the Chromium open-source repository",
      "Presented work at Google I/O 2024 Extended event",
    ],
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "Chrome DevTools",
      "Web Performance",
      "CSS",
      "Webpack",
      "Lighthouse",
    ],
    projects: [
      {
        title: "VitalsView",
        description:
          "Chrome extension that overlays Core Web Vitals metrics directly on any webpage.",
        image:
          "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop",
      },
      {
        title: "PerfLens",
        description:
          "Performance analysis tool that gives actionable suggestions to improve Lighthouse scores.",
        image:
          "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=250&fit=crop",
      },
      {
        title: "BundleGuard",
        description:
          "Webpack plugin that alerts developers when bundle size exceeds performance budgets.",
        image:
          "https://images.unsplash.com/photo-1555066931-4365d14431b9?w=400&h=250&fit=crop",
      },
    ],
    certificates: [
      {
        title: "Google Internship Completion Certificate — 2024",
        image:
          "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=250&fit=crop",
      },
      {
        title: "Web Performance Fundamentals — Frontend Masters",
        image:
          "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=400&h=250&fit=crop",
      },
    ],
    categories: ["Frontend Development", "Full Stack Web Development"],
  },

  {
    id: "6",
    name: "Ananya Rao",
    role: "Deep Learning Researcher",
    domain: "AI",
    batch: "2022",
    highlight:
      "Developed a multilingual NLP model for 11 Indian languages, featured in Times of India.",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=250&fit=crop&crop=face",
    bio: "Ananya is a deep learning researcher passionate about making AI inclusive for all Indian language speakers. Her multilingual NLP model is one of the first to support 11 regional Indian languages and has been featured in major national publications.",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    description:
      "Ananya developed a multilingual transformer model that supports 11 Indian languages including Hindi, Tamil, Telugu, Bengali, Kannada, Malayalam, Marathi, Gujarati, Punjabi, Odia, and Urdu. The model was trained on a custom dataset of 50 million sentences and achieves state-of-the-art results on sentiment analysis, NER, and text classification tasks.",
    highlights: [
      "Supports 11 Indian languages in a single unified model",
      "Trained on a custom dataset of 50 million sentences",
      "State-of-the-art results on 3 downstream NLP benchmarks",
      "Featured in Times of India and The Hindu",
      "Model available on HuggingFace with 1,200+ monthly downloads",
    ],
    skills: [
      "Python",
      "TensorFlow",
      "HuggingFace",
      "Multilingual NLP",
      "BERT",
      "Data Scraping",
      "Research Writing",
      "Colab",
    ],
    projects: [
      {
        title: "BharatBERT",
        description:
          "Multilingual BERT model pretrained on 11 Indian languages for downstream NLP tasks.",
        image:
          "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=400&h=250&fit=crop",
      },
      {
        title: "IndoSentiment",
        description:
          "Sentiment analysis API supporting all 11 languages powered by BharatBERT.",
        image:
          "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=250&fit=crop",
      },
      {
        title: "LangDataset",
        description:
          "Open dataset of 50 million cleaned sentences across 11 Indian languages.",
        image:
          "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=400&h=250&fit=crop",
      },
    ],
    certificates: [
      {
        title: "Natural Language Processing Specialization — Coursera",
        image:
          "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=250&fit=crop",
      },
      {
        title: "Research Excellence Award — Technavyug 2022",
        image:
          "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=400&h=250&fit=crop",
      },
    ],
    categories: [
      "Deep Learning",
      "Natural Language Processing",
      "Research & Publication",
    ],
  },
];

export default achievements;
