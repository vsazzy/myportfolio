import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Menu,
  X,
  Coffee,
  Sparkles,
  Users,
  Dumbbell,
  CircleDot,
} from "lucide-react";
import CircularText from "../animations/CircularText";
import myimage from "../assets/mypic.png";
import SkillsSection from "./SkillsSection";

const navItems = [
  "home",
  "about",
  "skills",
  "projects",
  "leadership",
  "community",
  "contact",
];

const projects = [
  {
    title: "Local SDK RAG Assistant",
    description:
      "A private local RAG assistant for chatting with hardware SDK manuals, API references, code examples, and troubleshooting guides using a local LLM.",
    tech: ["Python", "Streamlit", "LangChain", "Ollama", "ChromaDB"],
    github:
      "https://github.com/vsazzy/Agentic-Technical-Documentation-Assistant",
    live: "#",
  },
  {
    title: "JudgeMe AI",
    description:
      "An AI-powered app that roasts, analyzes, and improves your bio, resume, or profile using persona-based prompt engineering for zero-shot personality analysis.",
    tech: ["AI", "Prompt Engineering", "Streamlit", "Product Design"],
    github: "https://judgemeai.streamlit.app/",
    live: "https://judgemeai.streamlit.app/",
  },
  {
    title: "nxtMate",
    description:
      "A school super app for communication, administration, and student data workflows that helps educators operate with less friction.",
    tech: ["React", "Node.js", "MongoDB", "SaaS"],
    github: "https://www.nxtmate.com/",
    live: "https://www.nxtmate.com/",
  },
];

const Main = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const section of navItems) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="portfolio-shell min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 nav-surface">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="brand-mark" aria-label="Yash Verma portfolio">
              YV
            </div>

            {/* Desktop Menu */}
            <div className="desktop-nav">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`nav-link ${activeSection === item ? "is-active" : ""}`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="menu-toggle icon-button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="mobile-menu mt-4">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`mobile-link ${activeSection === item ? "is-active" : ""}`}
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="hero-section min-h-screen flex items-center relative overflow-hidden"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 w-full">
          <div className="hero-grid grid lg:grid-cols-[1.08fr_0.92fr] gap-12 items-center">
            <div className="hero-copy z-10">
              <div className="eyebrow">
                <Sparkles size={16} />
                Data science, AI/ML, and security
              </div>
              <h1 className="hero-title">
                <span className="block text-balance">
                  <CircularText
                    text="Hi, I'm Yash"
                    animateOn="view"
                    revealDirection="center"
                    speed={200}
                  />
                </span>
              </h1>
              <p className="hero-lede">
                I build practical AI products, security-minded tools, and data
                systems that turn fuzzy ideas into useful software.
              </p>
              <div className="hero-actions">
                <button
                  onClick={() => scrollToSection("projects")}
                  className="primary-button"
                >
                  View projects
                  <ArrowRight size={18} />
                </button>
                <a
                  href={`${process.env.PUBLIC_URL}/resume.pdf`}
                  className="secondary-button"
                  target="_blank"
                  rel="noreferrer"
                >
                  Download resume
                </a>
              </div>
              <div className="social-row">
                <a
                  href="https://github.com/vsazzy"
                  className="social-link"
                  aria-label="GitHub"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github size={22} />
                </a>
                <a
                  href="https://www.linkedin.com/in/yash-verma7"
                  className="social-link"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin size={22} />
                </a>
                <a
                  href="mailto:sendamailtoyash@gmail.com"
                  className="social-link"
                  aria-label="Email"
                >
                  <Mail size={22} />
                </a>
              </div>
            </div>

            <div className="hero-visual">
              <div className="portrait-card">
                <img alt="Yash Verma" src={myimage} />
              </div>
              <div className="hero-stat stat-top">
                <span>3+ yrs</span>
                <p>AI, security, and data work</p>
              </div>
              <div className="hero-stat stat-bottom">
                <span>Builder</span>
                <p>From concept to shipped product</p>
              </div>
            </div>

            <button
              onClick={() => scrollToSection("about")}
              className="scroll-cue"
              aria-label="Scroll to about section"
            >
              <ChevronDown size={28} />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-band">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="section-heading">
            <p className="eyebrow">About</p>
            <h2>Focused on systems that feel clear, capable, and useful.</h2>
          </div>
          <div className="about-grid">
            <div className="about-panel">
              <p>
                With 3+ years of experience in AI, cyber security, and data
                science, I design, develop, and deploy software and AI
                solutions that connect technical depth with product outcomes.
              </p>
              <p>
                I have led cross-functional teams, translated business goals
                into actionable data and AI strategies, and built scalable
                systems with Python, JavaScript, and deep learning frameworks.
              </p>
            </div>
            <div className="focus-list">
              <div>
                <span>01</span>
                <h3>AI product thinking</h3>
                <p>Prompt engineering, ML workflows, and applied automation.</p>
              </div>
              <div>
                <span>02</span>
                <h3>Security awareness</h3>
                <p>OSINT tooling and cyber security-informed architecture.</p>
              </div>
              <div>
                <span>03</span>
                <h3>Data storytelling</h3>
                <p>Analysis and interfaces that make decisions easier.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SkillsSection />

      {/* Projects Section */}
      <section id="projects" className="section-band projects-section">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="section-heading">
            <p className="eyebrow">Selected work</p>
            <h2>Projects with a practical spine and polished surface.</h2>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.title}>
                <div className="project-index">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="project-body">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="badge-row">
                    {project.tech.map((tech) => (
                      <span key={tech} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="project-footer">
                  <a
                    href={project.github}
                    className="text-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Take me there
                    <ExternalLink size={18} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="section-band leadership-section">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="section-heading">
            <p className="eyebrow">Leadership</p>
            <h2>Campus roles rooted in service, trust, and execution.</h2>
          </div>
          <div className="leadership-grid">
            <article className="experience-card featured-experience">
              <div className="experience-icon">
                <Users size={24} />
              </div>
              <div>
                <p className="experience-kicker">University at Buffalo</p>
                <h3>Graduate Student Assistant</h3>
                <p>
                  Supported graduate student operations at UB with a focus on
                  reliability, communication, and helping campus workflows run
                  smoothly.
                </p>
              </div>
            </article>
            <article className="experience-card">
              <div className="experience-icon">
                <Sparkles size={24} />
              </div>
              <div>
                <p className="experience-kicker">UB CSE GSA</p>
                <h3>Board Member</h3>
                <p>
                  Serve as a board member for the Computer Science and
                  Engineering Graduate Student Association, contributing to
                  student programming and community support.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="section-band community-section">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="section-heading">
            <p className="eyebrow">Community</p>
            <h2>Outside the code, I stay active and connected on campus.</h2>
          </div>
          <div className="community-grid">
            <article className="community-card">
              <div className="experience-icon">
                <Dumbbell size={24} />
              </div>
              <p className="experience-kicker">Membership</p>
              <h3>UB Boxing Club</h3>
              <p>
                Training with a campus community that values discipline,
                consistency, and resilience.
              </p>
            </article>
            <article className="community-card">
              <div className="experience-icon">
                <CircleDot size={24} />
              </div>
              <p className="experience-kicker">Membership</p>
              <h3>UB Table Tennis Club</h3>
              <p>
                Playing and practicing with students through a fast, tactical,
                and social club environment.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 text-center">
          <p className="eyebrow justify-center">Contact</p>
          <h2>Have a sharp problem or ambitious idea?</h2>
          <p>
            I am always interested in new opportunities and projects where AI,
            data, and thoughtful engineering can make the work feel simpler.
          </p>
          <div className="contact-actions">
            <a href="mailto:sendamailtoyash@gmail.com" className="primary-button">
              <Mail size={20} />
              Email Me
            </a>
            <a
              href="https://www.linkedin.com/in/yash-verma7/"
              className="secondary-button"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
            <a
              href="https://share.google/RviNNV8iV5wRD0Tta"
              className="secondary-button"
              target="_blank"
              rel="noreferrer"
            >
              <Coffee size={20} />
              Coffee
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="site-footer">
        <p>&copy; 2026 Yash Verma</p>
      </footer>
    </div>
  );
};

export default Main;
