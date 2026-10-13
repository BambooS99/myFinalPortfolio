import type { ReactNode } from "react";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import Nav from "@/components/Nav";
import Year from "@/components/Year";
import { education, facts, profile, skills } from "@/data/content";
import { jobs, projects } from "@/data/experience";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Nav />

      <main id="main" className="sheet">
        <header className="masthead" id="top">
          <div>
            <p className="name">{profile.name}</p>
            <ul className="contact-lines">
              <li>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </li>
              <li>
                <ExternalLink href={profile.linkedin}>LinkedIn</ExternalLink>
              </li>
              <li>
                <ExternalLink href={profile.github}>GitHub</ExternalLink>
              </li>
              <li>
                <ExternalLink href={profile.resume}>Resume (PDF)</ExternalLink>
              </li>
            </ul>
          </div>
          <p className="roles">
            {profile.roles.map((r) => (
              <span key={r}>{r}</span>
            ))}
          </p>
        </header>

        <h1 className="giant">Portfolio</h1>

        <section id="experience">
          <h2>Experience</h2>
          {jobs.map((job) => (
            <article className="entry" key={job.org}>
              <Row
                title={
                  <>
                    {job.title}, {job.org}
                  </>
                }
                meta={job.when}
              />
              <div className="entry-body">
                <p className="loc">{job.location}</p>
                {job.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
                <p className="stack">{job.tags.join(", ")}</p>
              </div>
            </article>
          ))}
        </section>

        <section id="projects">
          <h2>Selected work</h2>
          {projects.map((p) => (
            <article className="entry" key={p.title}>
              <Row title={p.title} meta={p.kind} />
              <div className="entry-body">
                <p>{p.description}</p>
                <p className="stack">{p.stack.join(", ")}</p>
                {p.links && (
                  <p className="entry-links">
                    {p.links.map((l) => (
                      <ExternalLink key={l.href} href={l.href}>
                        {l.label}
                      </ExternalLink>
                    ))}
                  </p>
                )}
              </div>
            </article>
          ))}
        </section>

        <section id="education">
          <h2>Education</h2>
          {education.map((e) => (
            <article className="entry" key={e.degree}>
              <Row
                title={
                  <>
                    {e.degree}, {e.school}
                  </>
                }
                meta={e.year}
              />
            </article>
          ))}
        </section>

        <div className="lower">
          <section id="about" className="about">
            <h2>About</h2>
            <p>
              I&apos;m a full-stack engineer who leans toward the frontend. Most
              of my work sits where UI meets data. I primarily work with tools
              like React and Redux to dynamically and accurately display and
              manage user data.
            </p>
            <p>
              At Cisco I spent three and a half years on tools used by Cisco
              partners, renewal managers, and external customers, where I worked
              with shared state, input validation, error handling, test
              coverage, and feature-flagged rollouts.
            </p>
            <p>
              Today I&apos;m at Toshiba working on Elera, a cloud-native retail
              platform behind enterprise partners like Costco, Best Buy, and
              Walgreens. I&apos;m also deep into AI-assisted development,
              building MCP servers and skills/workflows that make engineering
              teams measurably faster without sacrificing code quality.
            </p>
            <dl className="facts">
              {facts.map((f) => (
                <div key={f.label}>
                  <dt>{f.label}</dt>
                  <dd>{f.value}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section id="skills" className="toolkit">
            <h2>Toolkit</h2>
            <div className="toolkit-cols">
              {skills.map((s) => (
                <div key={s.group}>
                  <h3>{s.group}</h3>
                  <ul>
                    {s.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </div>

        <section id="contact" className="contact">
          <h2>Contact</h2>
          <p>
            I&apos;m always happy to talk about frontend architecture,
            AI-assisted engineering, or a role where I can help ship great
            product.
          </p>
          <p className="entry-links">
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <ExternalLink href={profile.linkedin}>LinkedIn</ExternalLink>
            <ExternalLink href={profile.github}>GitHub</ExternalLink>
            <ExternalLink href={profile.resume}>Resume</ExternalLink>
          </p>
        </section>

        <footer className="footer">
          © <Year /> {profile.name}
        </footer>
      </main>
    </>
  );
}

/** Title, a hairline rule filling the gap, and a right-aligned date or label. */
function Row({ title, meta }: { title: ReactNode; meta: string }) {
  return (
    <div className="row">
      <h3>{title}</h3>
      <span className="rule" aria-hidden />
      <span className="meta">{meta}</span>
    </div>
  );
}

function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a href={href} target="_blank" rel="noopener">
      {children}
      <ArrowUpRight aria-hidden className="ext" />
    </a>
  );
}
