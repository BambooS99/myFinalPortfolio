import type { Job, Project } from "./content";

export const jobs: Job[] = [
  {
    when: "Mar 2026 — Present",
    title: "Software Engineer",
    org: "Toshiba Global Commerce Solutions",
    location: "Research Triangle Park, NC",
    paragraphs: [
      <>
        I work on <strong>Elera</strong>, Toshiba&apos;s cloud-native retail
        platform serving millions of shoppers across partners including Costco,
        Best Buy, and Walgreens. I built the Vue.js UI for key Costco-facing
        features and the RESTful Python APIs that connect them to backend
        microservices.
      </>,
      <>
        On the data side, I built FastAPI services that aggregate transaction
        data into customer spend metrics for Elera partners. I also designed and
        deployed <strong>Model Context Protocol (MCP) tooling</strong> that
        tighten our AI-assisted development loop, cutting iteration cycles and
        improving the accuracy of generated code.
      </>,
    ],
    tags: ["Vue.js", "Python", "FastAPI", "REST", "Microservices", "MCP"],
  },
  {
    when: "Aug 2022 — Mar 2026",
    title: "Software Engineer",
    org: "Cisco",
    location: "Research Triangle Park, NC",
    paragraphs: [
      <>
        I shipped internal tools for Cisco partners, renewal managers, and
        business leaders — multi-step React workflows with secure input
        validation, robust error handling, and feature-flagged rollouts. My
        biggest architectural win was refactoring{" "}
        <strong>100+ React components</strong> onto shared Redux selectors,
        which eliminated <strong>8,000+ lines</strong> of duplicated logic.
      </>,
      <>
        I also built Python Webex bots and FastAPI services that aggregate
        partner deal data from multiple APIs, turning lookups that used to take
        a person a long time into answers in seconds. By adopting AI tools like
        Copilot, Cursor, and Windsurf early, I{" "}
        <strong>tripled my output to six features per sprint</strong> while
        holding new UI code to an 85% coverage bar. I containerized services
        with Docker for consistent local, CI/CD, and production environments,
        and worked closely with product and design using Storybook and
        Cisco&apos;s design system.
      </>,
    ],
    tags: [
      "React",
      "Redux",
      "TypeScript",
      "Python",
      "FastAPI",
      "Docker",
      "Storybook",
      "Jest",
    ],
  },
  {
    when: "Aug 2019 — Aug 2021",
    title: "UX Design Engineer",
    org: "UNC Pembroke Cybersecurity Club",
    location: "Pembroke, NC",
    paragraphs: [
      <>
        Led a team of four CS students building <strong>UNCP Bravemap</strong>,
        a progressive web app that helps students find their way to class using
        the Google Maps API. I owned the mobile-first UI and ran usability
        testing with fellow students.
      </>,
    ],
    tags: ["PWA", "Google Maps API", "Mobile-first", "Team lead"],
  },
];

export const projects: Project[] = [
  {
    kind: "Personal project",
    title: "Python Math Bot",
    description:
      "A full-stack app that solves math problems with AI — without trusting the AI to do the math. A Claude-powered FastAPI service classifies each problem and routes it to a deterministic solver, so answers are exact and token usage stays low. The React frontend keeps the experience fast and responsive.",
    metric: <>React · FastAPI · Claude API</>,
  },
  {
    kind: "Client work",
    title: "Photography portfolio",
    description:
      "A portfolio site I built for a professional photographer to showcase weddings, events, and freelance work. Galleries are organized into dynamic category and photo routes, each with its own SEO and social-sharing metadata, and images are served responsively through next/image. Clients can reach out through a built-in contact form.",
    metric: <>Next.js · TypeScript · Tailwind CSS</>,
    links: [
      { label: "Live site", href: "https://tessaosbornephotography.com/" },
    ],
  },
  {
    kind: "Personal project",
    title: "Music review app",
    description:
      "A full-stack album review app with a retro, terminal-inspired interface. The React frontend handles browsing, album detail pages, and star ratings, backed by a FastAPI service and PostgreSQL database. The backend is containerized with Docker, and the components are covered by Vitest and React Testing Library.",
    metric: <>React · FastAPI · PostgreSQL · Docker</>,
    links: [
      {
        label: "GitHub repo",
        href: "https://github.com/BambooS99/MusicProject",
      },
    ],
  },
  {
    kind: "Personal project",
    title: "Met Museum collection explorer",
    description:
      "A search app for the Metropolitan Museum of Art's public API, covering 400,000+ artworks. Users can search by keyword, filter by department, highlights, or image availability, and open a detailed view of any piece. API calls are handled with RTK Query, and the layout is responsive across desktop and mobile.",
    metric: <>React · TypeScript · Redux Toolkit · RTK Query</>,
    links: [
      {
        label: "GitHub repo",
        href: "https://github.com/BambooS99/the-met-museum-database-and-search",
      },
    ],
  },
];
