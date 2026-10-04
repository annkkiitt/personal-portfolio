export type WorkLink = { label: string; href: string };

export type Work = {
  no: string;
  title: string;
  year: string;
  roles: string[];
  desc: string;
  /** Drop a screenshot in /public/images/work and point to it, e.g. "/images/work/lms.png" */
  image?: string;
  placeholder: string;
  /** Colour of the block the screenshot sits on, and the word printed on it. */
  tint: string;
  tag: string;
  links: WorkLink[];
};

export const profile = {
  name: "Ankit Rawat",
  /** Suffix after the name in the header. Hidden below sm, so it can breathe. */
  shortRole: "Full-stack & AWS",
  role: "Full-stack & Cloud Developer",
  initials: "AR",
  headline: "I build full-stack products and GenAI systems on AWS.",
  about:
    "Computer Science graduate turned full-stack and cloud developer, working across the front ends people use and the serverless GenAI systems behind them.",
  location: "Uttarakhand, India",
  email: "ankit2001rawat@gmail.com",
  phone: "+91 80772 78265",
  phoneHref: "tel:+918077278265",
};

export const links = {
  elsewhere: [
    { label: "Github", href: "https://github.com/annkkiitt" },
    { label: "Github (work)", href: "https://github.com/ankitcloud202" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/ankit2001rawat/" },
  ],
  direct: [{ label: "ankitrawat.cloud", href: "https://ankitrawat.cloud" }],
};

// Screenshots: drop a PNG in /public/images/work and point `image` at it.
export const works: Work[] = [
  {
    no: "01",
    title: "GenAI Deep Research Agent",
    year: "2025",
    roles: ["GenAI agents", "AWS Bedrock", "Full-stack"],
    desc: "A research assistant on AWS Bedrock AgentCore and the Strands Agents SDK. Multi-tool orchestration with Tavily for web search, extraction and crawling, streaming results into a Next.js + TypeScript UI. CI/CD to AWS with 2-3 min average completion and citation management.",
    image: "/images/work/research-agent.svg",
    placeholder: "Screenshot of the research agent",
    tint: "#2F4A44",
    tag: "Agent UI",
    links: [
      {
        label: "Github",
        href: "https://github.com/annkkiitt/deep-research-agent",
      },
    ],
  },
  {
    no: "02",
    title: "Learning Management System",
    year: "2024",
    roles: ["Full-stack", "Prisma · MySQL", "Stripe"],
    desc: "A full learning platform where educators publish multi-chapter courses and students purchase and enrol. Built with Next.js + TypeScript, Stripe checkout, Prisma ORM over MySQL, and secure authentication via Clerk.",
    image: "/images/work/lms.svg",
    placeholder: "Screenshot of the LMS",
    tint: "#6B2E2A",
    tag: "Platform",
    links: [
      {
        label: "Live",
        href: "https://learning-management-system-peach-eight.vercel.app/",
      },
      {
        label: "Github",
        href: "https://github.com/annkkiitt/Learning-Management-System-",
      },
    ],
  },
  {
    no: "03",
    title: "Real-Time Chat Application",
    year: "2023",
    roles: ["Full-stack", "Socket.io", "MongoDB"],
    desc: "A messaging app with one-to-one and group chat over Socket.io, encrypted user records in MongoDB, and a React front end on an Express API, cutting response time by 20%.",
    image: "/images/work/chat-app.svg",
    placeholder: "Screenshot of the chat app",
    tint: "#3B4660",
    tag: "Messaging",
    links: [
      { label: "Github", href: "https://github.com/annkkiitt/MERN_Chat" },
    ],
  },
];

export const jobs = [
  {
    role: "Cloud Developer",
    org: "Cloud202 (AWS Advanced Tier Partner), London UK",
    orgHref: "https://www.cloud202.com/",
    when: "May 2024 to Present",
    detail:
      "Ship applications on AWS Amplify Gen 2 + Next.js (30% faster deploy cycles), build RAG pipelines and GenAI agents, and run serverless systems on Lambda, API Gateway, DynamoDB and SES. Contribute to Well-Architected Framework Reviews covering HIPAA/GDPR alignment and 15% infra cost savings.",
  },
  {
    role: "Full Stack Web Developer, Intern",
    org: "Cloud202",
    orgHref: "https://www.cloud202.com/",
    when: "Aug 2023 to Nov 2023",
    detail:
      "Built admin and customer panels in React + Chakra UI with Redux Toolkit, integrated Cognito auth and S3 storage, and developed REST APIs with Node.js and Express. Lazy-loading cut load time by ~600ms.",
  },
];

export const skills = [
  {
    group: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "C++", "C", "HTML", "CSS"],
  },
  {
    group: "Full-stack",
    items: [
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "Prisma",
      "MongoDB",
      "Tailwind",
      "shadcn",
    ],
  },
  {
    group: "AWS & GenAI",
    items: [
      "Amplify Gen 2",
      "Bedrock",
      "Bedrock AgentCore",
      "Strands Agents",
      "Lambda",
      "API Gateway",
      "DynamoDB",
      "Cognito",
      "S3",
      "EC2",
    ],
  },
  {
    group: "Tools",
    items: ["Git", "Github", "Jira", "Postman", "Redux Toolkit", "Zustand"],
  },
];

export const education = {
  name: "B.Tech, Computer Science",
  tag: "Graphic Era Hill University · 2020–2024 · 8.20 GPA",
  href: "https://www.gehu.ac.in/",
};

// `badge` + `tint` put a cert in the badge collage; the rest only appear as
// rows underneath. Badge PNGs are copied from Credly into /public/images/badges.
export type Cert = {
  name: string;
  tag: string;
  href: string;
  badge?: string;
  tint?: string;
  level?: string;
};

export const certs: Cert[] = [
  {
    name: "AWS Certified Generative AI Developer, Professional",
    tag: "Amazon Web Services · Professional",
    href: "https://www.credly.com/badges/08a132f1-cd8f-43aa-b1d9-fdd17c0169aa/public_url",
    badge: "/images/badges/genai-pro.png",
    tint: "#6B2E2A",
    level: "Professional",
  },
  {
    name: "AWS Certified AI Practitioner",
    tag: "Amazon Web Services · Issued May 2025",
    href: "https://www.credly.com/badges/8eceb932-b46c-48bc-9fb5-552d1372e697/linked_in_profile",
    badge: "/images/badges/ai-practitioner.png",
    tint: "#2F4A44",
    level: "Foundational",
  },
  {
    name: "AWS Certified Developer, Associate",
    tag: "Amazon Web Services · Issued Mar 2025",
    href: "https://www.credly.com/badges/a22bed59-b1ca-41ed-bae3-d1185eea6a8f/public_url",
    badge: "/images/badges/developer-associate.png",
    tint: "#3B4660",
    level: "Associate",
  },
  {
    name: "AWS Certified Cloud Practitioner",
    tag: "Amazon Web Services · Issued Dec 2023",
    href: "https://www.credly.com/badges/e923aceb-591b-4138-9045-4ed906a995bf/linked_in_profile",
    badge: "/images/badges/cloud-practitioner.png",
    tint: "#A8703F",
    level: "Foundational",
  },
  {
    name: "Node.js, Express and More: Complete Bootcamp",
    tag: "Certificate",
    href: "",
  },
];
