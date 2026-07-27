import { useEffect, useState } from "react";
import { Link } from "react-router";
import { auth } from "../firebase/config";
import { onAuthStateChanged, type User } from "firebase/auth";
import wormyLogo from '../assets/logo-placeholder.png';

const MODULES = [
  {
    id: "m1",
    title: "1. This is a creative name for module 1",
    subtitle: "subtitle for module 1 goes here",
    description: "Discover how computers learn from patterns, data, and examples instead of following traditional line-by-line instructions.",
    tag: "Fundamentals"
  },
  {
    id: "m2",
    title: "2. creative name for module 2",
    subtitle: "subtitle subtitle",
    description: "Learn how to ask smart questions, give helpful context, and guide AI tools to produce useful creative ideas.",
    tag: "Skill Building"
  },
  {
    id: "m3",
    title: "3. Creative name for module 3",
    subtitle: "This is a subtitle page",
    description: "Develop critical thinking skills to detect deepfakes, generated images, and AI-created text across the web.",
    tag: "Safety & Ethics"
  },
  {
    id: "m4",
    title: "4. Mod 4 name",
    subtitle: "subtitle goes here",
    description: "Explore how musicians, writers, and artists use AI as a brain-storming partner to boost human creativity.",
    tag: "Creation"
  },
  {
    id: "m5",
    title: "5. And so on",
    subtitle: "You get the gist",
    description: "Examine bias, privacy, and why human decision-making and empathy remain essential in an automated world.",
    tag: "Ethics"
  }
];

export function Landing() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeModule, setActiveModule] = useState<string>("m1");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="landing-wrapper">
      <header className="landing-header">
        <img src={wormyLogo} alt="" className="logo landing-logo"/>
        <nav className="landing-nav">
          {loading ? (
            <span className="landing-loading">Loading...</span>
          ) : user ? (
            <Link to="/dashboard">
              <button className="btn-accent">Enter Dashboard</button>
            </Link>
          ) : (
            <div className="landing-auth-btns">
              <Link to="/login">
                <button className="btn-secondary">Log In</button>
              </Link>
              <Link to="/register">
                <button className="btn-accent">Register</button>
              </Link>
            </div>
          )}
        </nav>
      </header>

      <main className="landing-main">
        <section className="landing-hero">
          <span className="hero-badge">AI Literacy for K-8</span>
          <h1 className="hero-title">Empowering the next generation with modern AI skills</h1>
          <p className="hero-subtitle">
            An interactive 5-module journey designed to teach grade school kids how artificial intelligence works, how to use it responsibly, and how to stay critical in a changing world.
          </p>
          <div className="hero-cta-group">
            <Link to={user ? "/dashboard" : "/register"}>
              <button className="btn-accent btn-large">
                {user ? "Go to Dashboard" : "Start Learning Now"}
              </button>
            </Link>
          </div>
        </section>

        <section className="landing-curriculum">
          <div className="section-header">
            <h2>Curriculum Preview</h2>
            <p>Click a module below to inspect what kids will learn inside.</p>
          </div>

          <div className="curriculum-accordion">
            {MODULES.map((mod) => {
              const isOpen = activeModule === mod.id;
              return (
                <div
                  key={mod.id}
                  className={`accordion-item ${isOpen ? "active" : ""}`}
                  onClick={() => setActiveModule(mod.id)}
                >
                  <div className="accordion-header">
                    <div>
                      <span className="module-tag">{mod.tag}</span>
                      <h3 className="module-title">{mod.title}</h3>
                    </div>
                    <span className="accordion-icon">{isOpen ? "−" : "+"}</span>
                  </div>

                  {isOpen && (
                    <div className="accordion-body">
                      <p className="module-subtitle">{mod.subtitle}</p>
                      <p className="module-desc">{mod.description}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </main>

      <footer className="landing-footer">
        <p>Copyright info here, Pi515 2026</p>
      </footer>

      <style>{/*css*/`
        .landing-wrapper {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          background-color: white;
          color: var(--dark);
        }

        .landing-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 1rem;
          border-bottom: 1px solid lightgray;
          background-color: white;
        }

        .landing-logo {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--dark);
        }

        .landing-logo {
          max-height: 1.5rem;
        }

        .landing-auth-btns {
          display: flex;
          gap: 0.75rem;
        }

        .landing-loading {
          font-size: 0.875rem;
          color: gray;
        }

        .btn-accent {
          background-color: var(--accent);
          color: var(--dark);
          border: 1px solid var(--accent);
          border-radius: 0.5rem;
          padding: 0.5rem 1rem;
          font-size: 0.875rem;
          font-weight: 600;
          cursor: pointer;
          transition: opacity 0.15s ease;
        }

        .btn-accent:hover {
          opacity: 0.9;
        }

        .btn-secondary {
          background-color: white;
          color: var(--dark);
          border: 1px solid lightgray;
          border-radius: 0.5rem;
          padding: 0.5rem 1rem;
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
          transition: border-color 0.15s ease;
        }

        .btn-secondary:hover {
          border-color: var(--dark);
        }

        .btn-large {
          padding: 0.875rem 1.75rem;
          font-size: 1rem;
        }

        .landing-main {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 3rem 1.5rem;
          gap: 4rem;
        }

        .landing-hero {
          max-width: 42rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.25rem;
          animation: heroFadeIn 0.4s ease-out forwards;
        }

        .hero-badge {
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          padding: 0.25rem 0.75rem;
          border: 1px solid lightgray;
          border-radius: 1rem;
          color: dimgray;
        }

        .hero-title {
          font-size: 2.25rem;
          font-weight: 700;
          line-height: 1.2;
          color: var(--dark);
        }

        .hero-subtitle {
          font-size: 1.0625rem;
          line-height: 1.6;
          color: dimgray;
        }

        .hero-cta-group {
          margin-top: 0.5rem;
        }

        .landing-curriculum {
          width: 100%;
          max-width: 42rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .section-header h2 {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--dark);
        }

        .section-header p {
          font-size: 0.875rem;
          color: gray;
          margin-top: 0.25rem;
        }

        .curriculum-accordion {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .accordion-item {
          border: 1px solid lightgray;
          border-radius: 0.5rem;
          padding: 1rem 1.25rem;
          background-color: white;
          cursor: pointer;
          transition: border-color 0.15s ease, background-color 0.15s ease;
        }

        .accordion-item:hover {
          border-color: var(--accent);
        }

        .accordion-item.active {
          border-color: var(--accent);
          border-left: 4px solid var(--accent);
        }

        .accordion-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .module-tag {
          font-size: 0.75rem;
          color: dimgray;
          font-weight: 500;
        }

        .module-title {
          font-size: 1.125rem;
          font-weight: 600;
          color: var(--dark);
          margin-top: 0.125rem;
        }

        .accordion-icon {
          font-size: 1.25rem;
          color: dimgray;
          font-weight: 300;
        }

        .accordion-body {
          margin-top: 0.875rem;
          padding-top: 0.875rem;
          border-top: 1px solid lightgray;
          display: flex;
          flex-direction: column;
          gap: 0.375rem;
          animation: accordionExpand 0.2s ease-out forwards;
        }

        .module-subtitle {
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--dark);
        }

        .module-desc {
          font-size: 0.875rem;
          line-height: 1.5;
          color: dimgray;
        }

        .landing-footer {
          border-top: 1px solid lightgray;
          padding: 2rem;
          text-align: center;
          font-size: 0.875rem;
          color: gray;
        }

        @keyframes heroFadeIn {
          from {
            opacity: 0;
            transform: translateY(0.75rem);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes accordionExpand {
          from {
            opacity: 0;
            transform: translateY(-0.25rem);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}