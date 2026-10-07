"use client";

import { useEffect, useState } from "react";

const links = ["about", "experience", "projects", "skills", "contact"];

export default function Nav() {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const spy = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    document.querySelectorAll("section[id]").forEach((s) => spy.observe(s));
    return () => spy.disconnect();
  }, []);

  function toggleTheme() {
    const root = document.documentElement;
    const dark = root.dataset.theme
      ? root.dataset.theme === "dark"
      : matchMedia("(prefers-color-scheme: dark)").matches;
    root.dataset.theme = dark ? "light" : "dark";
    try {
      localStorage.setItem("theme", root.dataset.theme);
    } catch {}
  }

  return (
    <header className="nav">
      <div className="wrap">
        <a href="#top" className="logo">
          owais<span>.</span>hassan
        </a>
        <nav>
          <ul>
            {links.map((id) => (
              <li key={id} className="link">
                <a href={`#${id}`} className={active === id ? "active" : undefined}>
                  {id[0].toUpperCase() + id.slice(1)}
                </a>
              </li>
            ))}
            <li>
              <button className="theme-btn" onClick={toggleTheme} aria-label="Toggle color theme">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
                </svg>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
