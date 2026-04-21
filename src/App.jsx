import { useState } from "react";

const NAV_LINKS = ["about", "work", "things i like", "say hi"];

function Nav({ active, onNavigate }) {
  return (
    <nav className="nav">
      <a href="#" className="nav-logo" onClick={() => onNavigate(null)}>
        ss.
      </a>
      <div className="nav-links">
        {NAV_LINKS.map((link) => (
          <a
            key={link}
            href={`#${link}`}
            className={active === link ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              onNavigate(link);
            }}
          >
            {link}
          </a>
        ))}
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero">
      <p className="hero-greeting">hey there, i'm</p>
      <h1 className="hero-name">Shalini.</h1>
      <p className="hero-tagline">
        I build things for the web and occasionally overthink my CSS.
      </p>
      <div className="hero-status">
        <span className="status-dot" />
        <span>currently building cool stuff</span>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section">
      <h2 className="section-title">about</h2>
      <div className="about-content">
        <p>
          I'm a developer who cares about clean code and good coffee. I like
          solving problems that matter and making interfaces that feel right —
          not just look right.
        </p>
        <p>
          When I'm not writing code, you'll find me exploring new music,
          sketching ideas on paper, or going down rabbit holes on the internet.
        </p>
        <div className="about-details">
          <div className="detail">
            <span className="detail-label">location</span>
            <span className="detail-value">India</span>
          </div>
          <div className="detail">
            <span className="detail-label">focus</span>
            <span className="detail-value">Frontend & Full-stack</span>
          </div>
          <div className="detail">
            <span className="detail-label">education</span>
            <span className="detail-value">CS grad</span>
          </div>
        </div>
      </div>
    </section>
  );
}

const PROJECTS = [
  {
    title: "project one",
    description: "A tool that does something useful. Built with React and a lot of patience.",
    tags: ["react", "node", "mongodb"],
    link: "#",
  },
  {
    title: "project two",
    description: "An experiment that turned into something real. Still tinkering with it.",
    tags: ["python", "flask", "postgres"],
    link: "#",
  },
  {
    title: "project three",
    description: "A weekend hack that people actually ended up using.",
    tags: ["javascript", "css", "fun"],
    link: "#",
  },
];

function Work() {
  return (
    <section id="work" className="section">
      <h2 className="section-title">work</h2>
      <div className="projects">
        {PROJECTS.map((project) => (
          <a key={project.title} href={project.link} className="project-card">
            <div className="project-number">
              {String(PROJECTS.indexOf(project) + 1).padStart(2, "0")}
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

const THINGS = [
  { emoji: "📚", text: "books with dog-eared pages" },
  { emoji: "🎧", text: "lo-fi beats on rainy days" },
  { emoji: "☕", text: "filter coffee, no sugar" },
  { emoji: "🌙", text: "late night coding sessions" },
  { emoji: "✏️", text: "writing things down on paper" },
  { emoji: "🌿", text: "long walks with no destination" },
];

function ThingsILike() {
  return (
    <section id="things i like" className="section">
      <h2 className="section-title">things i like</h2>
      <div className="things-grid">
        {THINGS.map((thing) => (
          <div key={thing.text} className="thing-item">
            <span className="thing-emoji">{thing.emoji}</span>
            <span>{thing.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="say hi" className="section">
      <h2 className="section-title">say hi</h2>
      <p className="contact-text">
        I'm always up for a conversation — whether it's about a project idea,
        a job opportunity, or just to say hello.
      </p>
      <div className="contact-links">
        <a href="mailto:shalinisg2001@gmail.com" className="contact-link">
          email
        </a>
        <a
          href="https://github.com/shalinishygan"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          github
        </a>
        <a href="#" className="contact-link">
          linkedin
        </a>
        <a href="#" className="contact-link">
          twitter
        </a>
      </div>
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>
        built by shalini with react & too many cups of coffee — {year}
      </p>
    </footer>
  );
}

export default function App() {
  const [activeSection, setActiveSection] = useState(null);

  return (
    <div className="container">
      <Nav active={activeSection} onNavigate={setActiveSection} />
      <main>
        <Hero />
        <About />
        <Work />
        <ThingsILike />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
