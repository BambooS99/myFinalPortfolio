import type { ReactNode } from "react";

export const profile = {
  name: "Owais Hassan",
  email: "OwaisHassan0009@gmail.com",
  linkedin: "https://linkedin.com/in/owaishassan1",
  github: "https://github.com/BambooS99",
  resume: "/resume.pdf",
};

export const facts = [
  { label: "Currently", value: "Software Engineer @ Toshiba" },
  {
    label: "Focus",
    value: "Frontend architecture, APIs, AI tooling, Python API development",
  },
  { label: "Education", value: "B.S. Computer Science, UNC Pembroke" },
];

export type Job = {
  when: string;
  title: string;
  org: string;
  location: string;
  paragraphs: ReactNode[];
  tags: string[];
};

export type Project = {
  kind: string;
  title: string;
  description: string;
  metric: ReactNode;
  links?: { label: string; href: string }[];
};

export const skills = [
  {
    group: "Frontend",
    items: [
      "TypeScript",
      "JavaScript",
      "React",
      "Redux",
      "Vue.js",
      "Angular",
      "Next.js",
      "Vite",
      "HTML/CSS",
      "Storybook",
      "Figma",
    ],
  },
  {
    group: "Backend & Systems",
    items: [
      "Python",
      "FastAPI",
      "Node.js",
      "Java",
      "SQL",
      "REST APIs",
      "Microservices",
      "Docker",
      "CI/CD",
      "Linux",
    ],
  },
  {
    group: "Testing & Quality",
    items: [
      "Jest",
      "React Testing Library",
      "Vitest",
      "Playwright",
      "Cypress",
      "Selenium",
      "SonarQube",
      "Jenkins",
      "Cucumber",
    ],
  },
  {
    group: "AI-Driven Development",
    items: [
      "MCP servers",
      "Claude",
      "GitHub Copilot",
      "Cursor",
      "Codex",
      "Gemini",
      "Windsurf",
    ],
  },
];
