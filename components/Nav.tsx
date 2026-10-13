"use client";

import { useEffect, useState } from "react";
import { profile } from "@/data/content";

const links = [
  { id: "top", label: "Home" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  const [active, setActive] = useState<string | null>("top");

  useEffect(() => {
    const spy = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    document.querySelectorAll("section[id]").forEach((s) => spy.observe(s));
    // The masthead is above the band the spy watches, so mark Home whenever it scrolls into view.
    const top = new IntersectionObserver(([e]) => e.isIntersecting && setActive("top"));
    const masthead = document.getElementById("top");
    if (masthead) top.observe(masthead);
    return () => {
      spy.disconnect();
      top.disconnect();
    };
  }, []);

  return (
    <header className="nav">
      <div className="sheet nav-inner">
        <a href="#top" className="nav-name">
          {profile.name}
        </a>
        <nav aria-label="Primary">
          <ul>
            {links.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={active === id ? "active" : undefined}
                  aria-current={active === id ? "true" : undefined}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
