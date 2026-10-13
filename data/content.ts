import type { ReactNode } from "react";

export const profile = {
  name: "Owais Hassan",
  email: "OwaisHassan0009@gmail.com",
  linkedin: "https://linkedin.com/in/owaishassan1",
  github: "https://github.com/BambooS99",
  resume: "/resume.pdf",
  roles: ["Software Engineer", "Full Stack", "Frontend"],
};

export const facts = [
  { label: "Currently", value: "Software Engineer @ Toshiba" },
  {
    label: "Focus",
    value: "Frontend architecture, APIs, AI tooling, Python API development",
  },
];

export const education = [
  {
    degree: "B.S. Computer Science",
    school: "University of North Carolina at Pembroke",
    year: "2021",
  },
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
  stack: string[];
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
      "Angular",
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
      "Cursor",
      "Codex",
      "GitHub Copilot",
      "Gemini",
      "Windsurf",
    ],
  },
];
