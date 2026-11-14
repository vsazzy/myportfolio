import React from "react";
import { ArrowRight, ArrowUpRight, Coffee, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import portrait from "../assets/mypic.png";
import {
  about,
  campus,
  education,
  experience,
  inference,
  layers,
  moreBuilds,
  profile,
  projects,
  stack,
  writing,
} from "../data/content";
import { Reveal } from "../hooks";
import LatencyBudget from "./LatencyBudget";
import StreamPanel from "./StreamPanel";

const external = { target: "_blank", rel: "noreferrer" };

function Heading({ eyebrow, title, accent, sub }) {
  return (
    <Reveal className="heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>
        {title} <em>{accent}</em>
      </h2>
      {sub && <p className="heading-sub">{sub}</p>}
    </Reveal>
  );
}

export function Hero() {
  return (
    <section id="top" className="hero">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">
            <Sparkles size={16} />
            <span>{profile.role}</span>
            <span className="role-focus">{profile.focus}</span>
          </p>
          <h1>
            {profile.headline[0]} <em>{profile.headline[1]}</em>
          </h1>
          <p className="lede">{profile.lede}</p>

          <div className="actions">
            <a className="btn btn-primary" href="#work">
              See the work <ArrowRight size={18} />
            </a>
            <a className="btn" href={`${process.env.PUBLIC_URL}/resume.pdf`} {...external}>
              Resume
            </a>
            <a className="icon-btn" href={profile.links.github} aria-label="GitHub" {...external}>
              <Github size={18} />
            </a>
            <a
              className="icon-btn"
              href={profile.links.linkedin}
              aria-label="LinkedIn"
              {...external}
            >
              <Linkedin size={18} />
            </a>
            <a className="icon-btn" href={`mailto:${profile.email}`} aria-label="Email">
              <Mail size={18} />
            </a>
          </div>

          <p className="availability">
            <i aria-hidden="true" />
            {profile.availability}
          </p>
        </div>

        <div className="hero-side">
          <img className="portrait" src={portrait} alt="Yash Verma" width="160" height="160" />
          <StreamPanel />
        </div>
      </div>

      <div className="wrap">
        <div className="built-at">
          <span>Built at</span>
          <ul>
            {profile.builtAt.map((place) => (
              <li key={place}>{place}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="section">
      <div className="wrap">
        <Heading eyebrow="About" title="Applied AI, with the" accent="numbers." />
        <div className="about-grid">
          <Reveal className="about-copy">
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Reveal>
          <Reveal as="dl" className="stats" delay={80}>
            {about.stats.map((s) => (
              <div key={s.label}>
                <dt>{s.value}</dt>
                <dd>{s.label}</dd>
              </div>
            ))}
          </Reveal>
        </div>

        <div className="layers">
          {layers.map((layer, i) => (
            <Reveal as="article" className="layer" key={layer.n} delay={i * 70}>
              <span className="layer-n">{layer.n}</span>
              <h3>{layer.name}</h3>
              <p className="layer-summary">{layer.summary}</p>
              <p>{layer.evidence}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Inference() {
  return (
    <section id="inference" className="section section-tint">
      <div className="wrap">
        <Heading
          eyebrow="Inference engineering"
          title="Where the model meets the"
          accent="clock."
          sub="A model is only as good as the request path around it. This is the part of the stack I keep moving toward."
        />
        <div className="inference-grid">
          <div className="inference-list">
            {inference.map((item, i) => (
              <Reveal as="article" className="inference-item" key={item.title} delay={i * 60}>
                <span className="tag">{item.tag}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <p className="where">{item.where}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="budget-sticky">
            <LatencyBudget />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Metrics({ items }) {
  return (
    <dl className="metrics">
      {items.map((m) => (
        <div key={m.label}>
          <dt>{m.value}</dt>
          <dd>{m.label}</dd>
        </div>
      ))}
    </dl>
  );
}

export function Work() {
  return (
    <section id="work" className="section">
      <div className="wrap">
        <Heading eyebrow="Selected work" title="Built, measured," accent="shipped." />
        <div className="projects">
          {projects.map((p, i) => (
            <Reveal
              as="article"
              key={p.title}
              className={`project ${p.featured ? "is-featured" : ""}`}
              delay={(i % 2) * 70}
            >
              <p className="eyebrow">{p.kicker}</p>
              <h3>{p.title}</h3>
              <p className="project-desc">{p.description}</p>
              {p.flow && (
                <ol className="flow" aria-label="Request flow">
                  {p.flow.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
              )}
              <Metrics items={p.metrics} />
              <ul className="chips">
                {p.tech.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              {p.href ? (
                <a className="link" href={p.href} {...external}>
                  View on GitHub <ArrowUpRight size={16} />
                </a>
              ) : (
                p.note && <p className="where">{p.note}</p>
              )}
            </Reveal>
          ))}
        </div>

        <Reveal className="more">
          <h3>More builds</h3>
          <ul>
            {moreBuilds.map((b) => (
              <li key={b.title}>
                <a href={b.href} {...external}>
                  <span>
                    <strong>{b.title}</strong>
                    {b.blurb}
                  </span>
                  <ArrowUpRight size={16} />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience" className="section section-tint">
      <div className="wrap">
        <Heading eyebrow="Experience" title="Production first, then" accent="research." />
        <div className="timeline">
          {experience.map((job) => (
            <Reveal as="article" className="job" key={job.role}>
              <p className="when">{job.when}</p>
              <div>
                <h3>{job.role}</h3>
                <p className="org">
                  {job.org} · {job.where}
                </p>
                <ul>
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
          {education.map((e) => (
            <Reveal as="article" className="job" key={e.degree}>
              <p className="when">{e.when}</p>
              <div>
                <h3>{e.degree}</h3>
                <p className="org">
                  {e.school} · {e.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="campus">
          <span>On campus</span>
          <ul>
            {campus.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

export function Stack() {
  return (
    <section id="stack" className="section">
      <div className="wrap">
        <Heading eyebrow="Stack" title="Tools I reach for, by" accent="layer." />
        <div className="stack">
          {stack.map((s, i) => (
            <Reveal className="stack-row" key={s.group} delay={i * 40}>
              <h3>{s.group}</h3>
              <ul className="chips">
                {s.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Writing() {
  return (
    <section id="writing" className="section section-tint">
      <div className="wrap">
        <Heading
          eyebrow="Writing"
          title="Notes from the"
          accent="garden."
          sub="I write up what I build so I actually understand it. The Transformers series pairs with the from-scratch code."
        />
        <div className="posts">
          {writing.map((post, i) => (
            <Reveal
              as="a"
              className="post"
              key={post.title}
              href={profile.links.blog}
              delay={i * 60}
              {...external}
            >
              <p className="eyebrow">{post.label}</p>
              <h3>{post.title}</h3>
              <p>{post.blurb}</p>
              <span className="link">
                Read <ArrowUpRight size={16} />
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow">Contact</p>
          <h2>
            Have a model that needs to <em>ship?</em>
          </h2>
          <p className="lede">
            I am looking for applied AI and inference work: LLM applications, model serving, and
            the measurement that keeps both honest.
          </p>
          <div className="actions">
            <a className="btn btn-primary" href={`mailto:${profile.email}`}>
              <Mail size={18} /> Email me
            </a>
            <a className="btn" href={profile.links.linkedin} {...external}>
              <Linkedin size={18} /> LinkedIn
            </a>
            <a className="btn" href={profile.links.github} {...external}>
              <Github size={18} /> GitHub
            </a>
            <a className="btn" href={profile.links.coffee} {...external}>
              <Coffee size={18} /> Coffee
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <p>© {new Date().getFullYear()} Yash Verma</p>
        <p>The token stream in the hero is simulated.</p>
      </div>
    </footer>
  );
}
