import React, { useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { profile } from "../data/content";
import { useActiveSection, useTheme } from "../hooks";

const SECTIONS = ["work", "inference", "experience", "stack", "writing", "contact"];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(SECTIONS);
  const [isDark, toggleTheme] = useTheme();

  return (
    <header className="nav">
      <div className="wrap nav-row">
        <a
          href="#top"
          className="brand"
          aria-label={`${profile.name}, back to top`}
          onClick={() => setOpen(false)}
        >
          YV
        </a>

        <nav className={`nav-links ${open ? "is-open" : ""}`} aria-label="Sections">
          {SECTIONS.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={active === id ? "is-active" : ""}
              onClick={() => setOpen(false)}
            >
              {id}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <button
            type="button"
            className="icon-btn"
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a
            className="btn btn-small"
            href={`${process.env.PUBLIC_URL}/resume.pdf`}
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
          <button
            type="button"
            className="icon-btn nav-toggle"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>
    </header>
  );
}
