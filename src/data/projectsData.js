const projects = [
  {
    id: "certificate-verification",
    title: "Certificate Verification System",
    category: "Web Development",
    desc: "QR-based secure verification platform",
    image:
      "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?w=800&h=400&fit=crop",
    enrolled: 180,
    lessons: 20,
    internship: "1–6 months",
    stipend: "₹3,000",

    heroDesc:
      "Build a secure, real-world certificate verification system using QR codes. Learn how institutions validate credentials digitally and protect against fraud at scale.",

    overview:
      "Manual certificate verification was slow, error-prone, and vulnerable to forgery. This project teaches you to build a full-stack QR-based verification system used by real institutions. You'll design the certificate generation pipeline, embed verifiable QR codes, and build an admin dashboard to manage and audit certificates — all while learning production-grade security practices.",

    problem: "Manual certificate verification was slow and prone to fraud.",
    approach:
      "Implemented a QR-based system with backend validation to ensure authenticity.",

    tech: ["React", "Node.js", "MongoDB", "Express", "JWT", "QRCode.js"],

    content: [
      "Introduction to Certificate Systems",
      "QR Code Generation & Embedding",
      "Backend Validation API",
      "Admin Dashboard & Audit Logs",
      "Deployment & Security Hardening",
    ],

    objectives: [
      "Understand how digital certificate systems work in real institutions.",
      "Generate and embed QR codes with encrypted payload data.",
      "Build a Node.js + Express REST API for certificate validation.",
      "Design a MongoDB schema for storing and auditing certificates.",
      "Implement JWT-based admin authentication and role management.",
      "Create a React frontend for certificate lookup and verification.",
      "Build an admin dashboard with filters, search, and export features.",
      "Deploy the full-stack app with environment-based config management.",
      "Write unit tests for the validation pipeline.",
      "Understand common certificate fraud patterns and how to prevent them.",
    ],

    benefits:
      "After completing this project, you'll have a production-ready portfolio piece that demonstrates real security engineering skills. You'll understand QR-based authentication, full-stack architecture, and admin tooling — making you stand out in web development and backend roles.",

    features: ["QR code scanning", "Real-time verification", "Admin dashboard"],
    results: "Reduced verification time by 70% and improved user trust.",

    media: [
      "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop",
    ],
  },

  {
    id: "ai-chat-app",
    title: "AI Chat App",
    category: "AI",
    desc: "Real-time AI chat using Socket.io",
    image:
      "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&h=400&fit=crop",
    enrolled: 210,
    lessons: 22,
    internship: "1–6 months",
    stipend: "₹3,000",

    heroDesc:
      "Build a real-time AI-powered chat application from scratch using Socket.io, OpenAI APIs, and a full MERN stack. Learn how modern chat platforms handle live messaging at scale.",

    overview:
      "Chat applications are at the heart of modern communication — from customer support bots to AI assistants. This project walks you through building a complete real-time chat app with AI integration. You'll implement WebSocket-based messaging, integrate an LLM for intelligent responses, manage chat history, and build a polished React UI that feels snappy and professional.",

    problem:
      "Users needed a smart, real-time chat interface with AI capabilities beyond static FAQs.",
    approach:
      "Built a Socket.io-powered messaging layer with OpenAI integration and persistent chat history in MongoDB.",

    tech: ["React", "Node.js", "Socket.io", "OpenAI API", "MongoDB", "Express"],

    content: [
      "WebSocket Fundamentals with Socket.io",
      "OpenAI API Integration",
      "Chat History & Session Management",
      "Real-Time UI with React",
      "Deployment on Render & Vercel",
    ],

    objectives: [
      "Understand the difference between HTTP and WebSocket communication.",
      "Set up a Socket.io server with room-based messaging.",
      "Integrate OpenAI's chat completions API for AI responses.",
      "Build a React chat UI with message threading and typing indicators.",
      "Persist chat history in MongoDB with session management.",
      "Handle error states, rate limiting, and API timeouts gracefully.",
      "Add user authentication with JWT and protected chat rooms.",
      "Implement message timestamps, read receipts, and pagination.",
      "Optimize real-time performance with debouncing and batching.",
      "Deploy the app with environment secrets and production config.",
    ],

    benefits:
      "This project gives you hands-on experience with WebSockets, AI APIs, and real-time architecture — three of the most in-demand skills in the industry today. You'll walk away with a live, shareable portfolio project that demonstrates you can build intelligent, production-grade applications.",

    features: [
      "Real-time messaging via WebSockets",
      "AI-generated responses using OpenAI",
      "Persistent chat history",
      "Typing indicators & read receipts",
    ],
    results:
      "Delivered a fully functional AI chat interface with sub-100ms message latency.",

    media: [
      "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=400&fit=crop",
    ],
  },

  {
    id: "food-delivery-app",
    title: "Food Delivery App",
    category: "Web",
    desc: "Swiggy-like full stack app",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=400&fit=crop",
    enrolled: 193,
    lessons: 28,
    internship: "1–6 months",
    stipend: "₹3,000",

    heroDesc:
      "Clone Swiggy's core experience — restaurant listings, cart management, live order tracking, and payments — using a modern MERN stack with real-world architecture.",

    overview:
      "Food delivery platforms are some of the most complex consumer apps in existence. This project teaches you to build the key pillars: dynamic restaurant menus, a real-time cart system, location-based filtering, order management, and a payment gateway integration. You'll learn how to architect a scalable backend that handles concurrent orders while keeping the frontend fast and responsive.",

    problem:
      "Building a scalable food delivery platform with real-time order tracking was a major engineering challenge.",
    approach:
      "Used a microservice-inspired MERN architecture with real-time updates via Socket.io and Razorpay for payments.",

    tech: [
      "React",
      "Redux",
      "Node.js",
      "Express",
      "MongoDB",
      "Razorpay",
      "Socket.io",
    ],

    content: [
      "Restaurant Listing & Menu System",
      "Cart & Order Management",
      "Real-Time Order Tracking",
      "Payment Gateway Integration",
      "Admin & Delivery Partner Portals",
    ],

    objectives: [
      "Design a normalized MongoDB schema for restaurants, menus, and orders.",
      "Build a Redux-powered cart with persistent state across sessions.",
      "Implement location-based restaurant filtering using coordinates.",
      "Create a real-time order tracking pipeline with Socket.io.",
      "Integrate Razorpay for secure payment processing.",
      "Build separate portals for customers, restaurants, and delivery partners.",
      "Handle order state machines (placed → confirmed → picked → delivered).",
      "Add search, filters, sorting, and cuisine-based category navigation.",
      "Implement coupon codes and discount logic on the backend.",
      "Deploy with NGINX reverse proxy and PM2 process management.",
    ],

    benefits:
      "Food delivery apps are a benchmark project that showcases your ability to handle complex state, real-time systems, and third-party integrations. Completing this project proves you can build consumer-scale full-stack applications — a skill highly valued at product companies and startups.",

    features: [
      "Restaurant & menu browsing",
      "Cart with real-time updates",
      "Live order tracking",
      "Razorpay payment gateway",
    ],
    results:
      "Built a fully functional Swiggy clone handling concurrent orders with live status updates.",

    media: [
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=400&fit=crop",
    ],
  },

  {
    id: "portfolio-builder",
    title: "Portfolio Builder",
    category: "Frontend",
    desc: "Dynamic portfolio generator",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=400&fit=crop",
    enrolled: 158,
    lessons: 18,
    internship: "1–3 months",
    stipend: "₹2,000",

    heroDesc:
      "Build a dynamic, customizable portfolio generator that lets users create stunning personal portfolios without writing a single line of code — powered by React and a live preview engine.",

    overview:
      "Every developer needs a portfolio, but building one from scratch is time-consuming. This project teaches you to build a drag-and-drop portfolio generator with live preview, theme switching, and one-click export. You'll master advanced React patterns like compound components, render props, and context-driven theming while building something genuinely useful.",

    problem:
      "Developers struggled to build custom portfolios quickly without deep frontend expertise.",
    approach:
      "Created a form-driven portfolio builder with live preview, multiple themes, and JSON-based data export.",

    tech: [
      "React",
      "Tailwind CSS",
      "Context API",
      "LocalStorage",
      "html2pdf.js",
    ],

    content: [
      "Dynamic Form & Live Preview Architecture",
      "Theme Engine & Custom Styling",
      "Section Management (drag & drop)",
      "Export to PDF & Share Link",
      "Deploy & Custom Domain Setup",
    ],

    objectives: [
      "Design a component architecture that supports dynamic section rendering.",
      "Build a live preview pane that updates in real-time as users type.",
      "Implement a theme engine using CSS variables and React Context.",
      "Create drag-and-drop section reordering with React DnD.",
      "Persist portfolio data in LocalStorage with export/import support.",
      "Generate a shareable public URL using a unique slug.",
      "Add PDF export functionality using html2pdf.js.",
      "Build an undo/redo system for form edits.",
      "Support custom color palettes and font selection.",
      "Deploy to Vercel with automatic preview deployments on PR.",
    ],

    benefits:
      "The Portfolio Builder project teaches advanced React patterns and UX engineering in a practical context. You'll build a tool people actually want to use, sharpen your component design skills, and walk away with a portfolio-worthy project that meta-demonstrates your frontend expertise.",

    features: [
      "Live preview as you type",
      "Multiple themes & color palettes",
      "Drag-and-drop section reordering",
      "PDF export & shareable link",
    ],
    results:
      "Delivered a fully functional portfolio generator used by 50+ beta testers in the first week.",

    media: [
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&h=400&fit=crop",
    ],
  },
];

export default projects;
