// This "database" will power our entire course system.
// We use a "slug" (like 'software-engineering') as the ID.

export const allCourses = [
  {
    slug: 'software-engineering',
    title: 'Software Engineering',
    icon: '💻',
    description: 'Master front-end and back-end development to build complete, scalable web applications from scratch.',
    price: 'Ksh 80,000', // This is the 'default' price shown on cards
    overview: 'This comprehensive 16-week program is designed to take you from a beginner to a job-ready software engineer. You will learn by building real-world projects, mastering both the client-side (React) and the server-side (Python/Django) to become a full-stack developer.',
    plans: {
      fullTime: {
        duration: '16 Weeks',
        hours: 'Mon - Fri, 9:00 AM - 4:00 PM',
        price: 'Ksh 80,000',
      },
      partTime: {
        duration: '32 Weeks',
        hours: 'Tues & Thurs, 6:00 PM - 9:00 PM; Sat, 9:00 AM - 1:00 PM',
        price: 'Ksh 90,000',
      },
    },
    structure: 'The course is split into 4 major modules. Each module ends with a capstone project. There is a 1-week break after Module 2 (Backend) before starting Module 3 (Full-Stack).',
    curriculum: [
      { title: 'Module 1: Frontend Fundamentals', content: 'HTML5, CSS3, Flexbox, Grid, and modern JavaScript (ES6+).' },
      { title: 'Module 2: React & Modern Frontend', content: 'Components, Hooks, State Management (Context API), and React Router.' },
      { title: 'Module 3: Backend with Python & Django', content: 'Python, Django, REST APIs, Databases (PostgreSQL), and Authentication.' },
      { title: 'Module 4: Full-Stack & Deployment', content: 'Connecting React to Django, deploying to the cloud (Heroku/AWS), and DevOps basics.' },
    ],
  },
  {
    slug: 'data-science',
    title: 'Data Science',
    icon: '📊',
    description: 'Learn to analyze data, build predictive models, and drive business decisions with Python.',
    price: 'Ksh 90,000',
    overview: 'In this 18-week course, you will master the end-to-end data science lifecycle. From data collection and cleaning to building complex machine learning models, you will gain the skills to extract valuable insights from complex datasets.',
    plans: {
      fullTime: {
        duration: '18 Weeks',
        hours: 'Mon - Fri, 9:00 AM - 4:00 PM',
        price: 'Ksh 90,000',
      },
      partTime: {
        duration: '36 Weeks',
        hours: 'Mon & Wed, 6:00 PM - 9:00 PM; Sat, 9:00 AM - 1:00 PM',
        price: 'Ksh 100,000',
      },
    },
    structure: 'The course is project-based, with mini-projects each week and a final 3-week capstone project. There is a 1-week break after the "Statistics & EDA" module.',
    curriculum: [
      { title: 'Module 1: Python for Data Science', content: 'NumPy, Pandas, and data visualization with Matplotlib & Seaborn.' },
      // --- THIS IS THE FIXED LINE ---
      { title: 'Module 2: Statistics & EDA', content: 'Statistical analysis, hypothesis testing, and exploratory data analysis.' },
      // ---
      { title: 'Module 3: Machine Learning', content: 'Supervised and Unsupervised learning (Regression, Classification, Clustering).' },
      { title: 'Module 4: Advanced Topics & Capstone', content: 'Time Series Analysis, Natural Language Processing (NLP), and a final portfolio project.' },
    ],
  },
  {
    slug: 'artificial-intelligence',
    title: 'Artificial Intelligence',
    icon: '🤖',
    description: 'Master the future of technology, from machine learning models to neural networks and deep learning.',
    price: 'Ksh 100,000',
    overview: 'This advanced 20-week program focuses on the principles and applications of AI. You will build intelligent agents, explore deep learning frameworks like TensorFlow and PyTorch, and work on cutting-edge problems in computer vision and NLP.',
    plans: {
      fullTime: {
        duration: '20 Weeks',
        hours: 'Mon - Fri, 9:00 AM - 4:00 PM',
        price: 'Ksh 100,000',
      },
      partTime: {
        duration: '40 Weeks',
        hours: 'Tues & Thurs, 6:00 PM - 9:00 PM; Sat, 9:00 AM - 1:00 PM',
        price: 'Ksh 110,000',
      },
    },
    structure: 'The course is divided into a 12-week core curriculum followed by an 8-week "AI Specialization" track. There are no scheduled breaks.',
    curriculum: [
      { title: 'Module 1: AI Foundations', content: 'Search algorithms, game theory, and knowledge representation.' },
      { title: 'Module 2: Machine Learning In-Depth', content: 'Advanced regression, SVMs, and ensemble methods.' },
      { title: 'Module 3: Neural Networks & Deep Learning', content: 'Building neural networks, CNNs (Computer Vision), and RNNs (NLP).' },
      { title: 'Module 4: AI Specialization & Ethics', content: 'Specialized track (e.g., Robotics) and a final project on AI ethics.' },
    ],
  },
  {
    slug: 'cybersecurity',
    title: 'Cybersecurity',
    icon: '🔒',
    description: 'Become a digital defender. Learn to protect networks, data, and systems from attack.',
    price: 'Ksh 85,000',
    overview: 'This 16-week bootcamp prepares you for a career in cybersecurity. You will gain hands-on experience with ethical hacking, network security, cryptography, and incident response. This course is aligned with CompTIA Security+ concepts.',
    plans: {
      fullTime: {
        duration: '16 Weeks',
        hours: 'Mon - Fri, 9:00 AM - 4:00 PM',
        price: 'Ksh 85,000',
      },
      partTime: {
        duration: '32 Weeks',
        hours: 'Mon & Wed, 6:00 PM - 9:00 PM; Sat, 9:00 AM - 1:00 PM',
        price: 'Ksh 95,000',
      },
    },
    structure: 'The course is built around practical labs and "capture-the-flag" (CTF) exercises. There is a 1-week break after the "Network Security" module.',
    curriculum: [
      { title: 'Module 1: Security Fundamentals', content: 'Threats, vulnerabilities, and the CIA Triad. CompTIA Security+ domains.' },
      { title: 'Module 2: Network Security', content: 'Firewalls, VPNs, IDS/IPS, and securing wireless networks.' },
      { title: 'Module 3: Ethical Hacking', content: 'Penetration testing, vulnerability assessment, and social engineering.' },
      { title: 'Module 4: Incident Response & Forensics', content: 'Handling security incidents, malware analysis, and digital forensics.' },
    ],
  },
  // --- Other Courses ---
  {
    slug: 'ui-ux-design',
    title: 'UI/UX Design',
    icon: '🎨',
    description: 'Design beautiful and user-friendly interfaces. Learn Figma, prototyping, and user research.',
    price: 'Ksh 60,000',
    overview: 'This 12-week course teaches you how to design products that people love to use. You will learn the entire design process, from user research and wireframing to creating high-fidelity prototypes and conducting usability testing.',
    plans: {
      fullTime: {
        duration: '12 Weeks',
        hours: 'Mon - Fri, 9:00 AM - 4:00 PM',
        price: 'Ksh 60,000',
      },
      partTime: {
        duration: '24 Weeks',
        hours: 'Tues & Thurs, 6:00 PM - 9:00 PM; Sat, 9:00 AM - 1:00 PM',
        price: 'Ksh 70,000',
      },
    },
    structure: 'This is a portfolio-driven course. You will complete 3 major projects, including a mobile app and a web app. There are no scheduled breaks.',
    curriculum: [
      { title: 'Module 1: Design Foundations', content: 'Design principles, user psychology, and competitive analysis.' },
      { title: 'Module 2: User Research & UX', content: 'User personas, journey mapping, wireframing, and information architecture.' },
      { title: 'Module 3: UI Design & Prototyping', content: 'Visual design, color theory, typography, and high-fidelity prototyping in Figma.' },
      { title: 'Module 4: Usability Testing & Handoff', content: 'Conducting usability tests, iterating on feedback, and developer handoff.' },
    ],
  },
  {
    slug: 'cloud-computing',
    title: 'Cloud Computing',
    icon: '☁️',
    description: 'Master AWS, Azure, and Google Cloud. Deploy scalable applications and infrastructure.',
    price: 'Ksh 75,000',
    overview: 'This 14-week program prepares you for cloud engineering roles. You will gain deep knowledge of core cloud services, infrastructure as code (Terraform), and containerization (Docker, Kubernetes). This course is aligned with AWS Certified Solutions Architect - Associate.',
    plans: {
      fullTime: {
        duration: '14 Weeks',
        hours: 'Mon - Fri, 9:00 AM - 4:00 PM',
        price: 'Ksh 75,000',
      },
      partTime: {
        duration: '28 Weeks',
        hours: 'Mon & Wed, 6:00 PM - 9:00 PM; Sat, 9:00 AM - 1:00 PM',
        price: 'Ksh 85,000',
      },
    },
    structure: 'The course is 70% hands-on labs. There is a 1-week break after the "Core Services" module.',
    curriculum: [
      { title: 'Module 1: Cloud Foundations', content: 'Cloud concepts (IaaS, PaaS, SaaS), and multi-cloud overview (AWS, Azure, GCP).' },
      { title: 'Module 2: Core Cloud Services (AWS)', content: 'EC2, S3, VPC, IAM, and Lambda. Building your first cloud solution.' },
      { title: 'Module 3: Infrastructure as Code (IaC)', content: 'Automating infrastructure with Terraform and CloudFormation.' },
      { title: 'Module 4: Containers & Kubernetes', content: 'Docker fundamentals and orchestrating containers with EKS (Kubernetes).' },
    ],
  },
  {
    slug: 'devops-engineering',
    title: 'DevOps Engineering',
    icon: '🚀',
    description: 'Learn to automate and streamline the software development and deployment lifecycle.',
    price: 'Ksh 90,000',
    overview: 'This 16-week course teaches the culture and tools of DevOps. You will learn to build automated CI/CD pipelines, manage infrastructure as code, and implement monitoring and logging solutions to improve reliability and deployment speed.',
    plans: {
      fullTime: {
        duration: '16 Weeks',
        hours: 'Mon - Fri, 9:00 AM - 4:00 PM',
        price: 'Ksh 90,000',
      },
      partTime: {
        duration: '32 Weeks',
        hours: 'Tues & Thurs, 6:00 PM - 9:00 PM; Sat, 9:00 AM - 1:00 PM',
        price: 'Ksh 100,000',
      },
    },
    structure: 'This course is structured around building a complete CI/CD pipeline from scratch for a sample application. There are no scheduled breaks.',
    curriculum: [
      { title: 'Module 1: DevOps Culture & Linux', content: 'DevOps principles, Linux/Bash scripting, and Git.' },
      { title: 'Module 2: CI/CD Pipelines', content: 'Jenkins, GitHub Actions, and automated testing.' },
      { title: 'Module 3: IaC & Config Management', content: 'Terraform and Ansible.' },
      { title: 'Module 4: Containers & Monitoring', content: 'Docker, Kubernetes, and monitoring with Prometheus/Grafana.' },
    ],
  },
  {
    slug: 'dsa',
    title: 'Data Structures & Algorithms',
    icon: '🧩',
    description: 'Master the building blocks of efficient code. Prepare for technical interviews.',
    price: 'Ksh 45,000',
    overview: 'This 10-week, part-time-only course is designed to make you a fundamentally better engineer. You will master data structures (Arrays, Trees, Graphs, etc.) and algorithms (Sorting, Searching) to write efficient, scalable code and excel in technical interviews.',
    plans: {
      fullTime: {
        duration: 'N/A',
        hours: 'This course is only available part-time.',
        price: 'N/A',
      },
      partTime: {
        duration: '10 Weeks',
        hours: 'Mon & Wed, 6:00 PM - 9:00 PM',
        price: 'Ksh 45,000',
      },
    },
    structure: 'This is a highly intensive course focused on problem-solving. Each week introduces a new concept followed by a set of challenging problems.',
    curriculum: [
      { title: 'Module 1: Core Data Structures', content: 'Arrays, Strings, Hash Maps, Linked Lists, Stacks, Queues.' },
      { title: 'Module 2: Trees & Graphs', content: 'Binary Trees, BSTs, Tries, and Graph traversal algorithms (BFS, DFS).' },
      { title: 'Module 3: Algorithms', content: 'Sorting (Merge, Quick), Searching (Binary), and Dynamic Programming.' },
      { title: 'Module 4: Interview Prep', content: 'Big O notation, common interview patterns, and mock interviews.' },
    ],
  },
];

// Helper function to find a course by its slug
export const getCourseBySlug = (slug) => {
  return allCourses.find((course) => course.slug === slug);
};

// Helper to get just the 4 featured courses
export const featuredCourses = allCourses.slice(0, 4);