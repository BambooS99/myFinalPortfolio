import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import Year from "@/components/Year";
import {
  FileIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
} from "@/components/Icons";
import { facts, profile, skills } from "@/data/content";
import { jobs, projects } from "@/data/experience";

export default function Home() {
  return (
    <>
      <Nav />

      <main id="top">
        <div className="wrap">
          <section className="hero">
            <div className="eyebrow mono">Hi, I&apos;m Owais</div>
            <h1>I develop Full Stack applications</h1>
            <p className="lede">
              Software engineer in the US with nearly four years of experience
              shipping <strong>React, Angular, and Python</strong> across
              various platforms. Currently at{" "}
              <strong>Toshiba Global Commerce Solutions</strong> building retail
              software used by millions of shoppers at stores like Costco and
              Wegman&apos;s.
            </p>
            <div className="cta">
              <a className="btn primary" href={`mailto:${profile.email}`}>
                <MailIcon /> Get in touch
              </a>
              <a
                className="btn"
                href={profile.linkedin}
                target="_blank"
                rel="noopener">
                <LinkedInIcon /> LinkedIn
              </a>
              <a
                className="btn"
                href={profile.github}
                target="_blank"
                rel="noopener">
                <GitHubIcon /> GitHub
              </a>
              <a
                className="btn"
                href={profile.resume}
                target="_blank"
                rel="noopener">
                <FileIcon /> Resume
              </a>
            </div>
          </section>
        </div>

        <div className="wrap">
          <Reveal id="about">
            <SectionHead num="01" title="About" />
            <div className="about">
              <div>
                <p>
                  I&apos;m a full-stack engineer who leans toward the frontend.
                  Most of my work sits where <strong>UI meets data</strong>. I
                  love working with tools like Redux and ReactJs to dynamically
                  and accurately display all sorts of user data.
                </p>
                <p>
                  At Cisco I spent three and a half years on tools used by Cisco
                  partners, renewal managers, and external customers, where I
                  learned to care about shared state, input validation, error
                  handling, test coverage, and feature-flagged rollouts.
                </p>
                <p>
                  Today I&apos;m at Toshiba working on <strong>Elera</strong>, a
                  cloud-native retail platform behind enterprise partners like
                  Costco, Best Buy, and Walgreens. I&apos;m also deep into{" "}
                  <strong>AI-assisted development</strong> building MCP servers
                  and skills/workflows that make engineering teams measurably
                  faster without sacrificing code quality.
                </p>
              </div>
              <dl className="card facts">
                {facts.map((f) => (
                  <div key={f.label}>
                    <dt>{f.label}</dt>
                    <dd>{f.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>

          <Reveal id="experience">
            <SectionHead num="02" title="Experience" />
            {jobs.map((job) => (
              <article className="job" key={job.org}>
                <div className="when mono">{job.when}</div>
                <div>
                  <h3>
                    {job.title} · <span className="org">{job.org}</span>
                  </h3>
                  <div className="loc">{job.location}</div>
                  {job.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                  <Tags items={job.tags} />
                </div>
              </article>
            ))}
          </Reveal>

          <Reveal id="projects">
            <SectionHead num="03" title="Selected work" />
            <div className="grid">
              {projects.map((p) => (
                <article className="card project" key={p.title}>
                  <div className="kind mono">{p.kind}</div>
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>
                  <div className="metric mono">{p.metric}</div>
                  {p.links && (
                    <div className="project-links">
                      {p.links.map((l) => (
                        <a
                          key={l.href}
                          href={l.href}
                          target="_blank"
                          rel="noopener">
                          {l.label} <span aria-hidden="true">↗</span>
                        </a>
                      ))}
                    </div>
                  )}
                </article>
              ))}
            </div>
          </Reveal>

          <Reveal id="skills">
            <SectionHead num="04" title="Toolkit" />
            <div className="skills">
              {skills.map((s) => (
                <div className="card" key={s.group}>
                  <h3>{s.group}</h3>
                  <Tags items={s.items} />
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal id="contact" className="contact">
          <div className="wrap">
            <div className="eyebrow mono">05 — What&apos;s next</div>
            <h2>Let&apos;s build something.</h2>
            <p>
              I&apos;m always happy to talk about frontend architecture,
              AI-assisted engineering, or a role where I can help ship great
              product.
            </p>
            <div className="cta">
              <a className="btn primary" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
              <a
                className="btn"
                href={profile.linkedin}
                target="_blank"
                rel="noopener">
                Connect on LinkedIn
              </a>
              <a
                className="btn"
                href={profile.github}
                target="_blank"
                rel="noopener">
                See my GitHub
              </a>
            </div>
          </div>
        </Reveal>
      </main>

      <footer>
        <div className="wrap">
          <span>
            © <Year /> {profile.name}
          </span>
          <span className="mono">Built with Next.js</span>
        </div>
      </footer>
    </>
  );
}

function SectionHead({ num, title }: { num: string; title: string }) {
  return (
    <div className="sec-head">
      <span className="num mono">{num}</span>
      <h2>{title}</h2>
    </div>
  );
}

function Tags({ items }: { items: string[] }) {
  return (
    <div className="tags">
      {items.map((t) => (
        <span className="tag" key={t}>
          {t}
        </span>
      ))}
    </div>
  );
}
