import { useEffect, useState } from "react";
import { Link } from "react-router";
import { auth } from "../firebase/config";
import { onAuthStateChanged, type User } from "firebase/auth";

export function Landing() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h2>AI Toolkit</h2>
        <nav style={{ display: "flex", alignItems: "center" }}>
          {loading ? (
            <span>Loading...</span>
          ) : user ? (
            <div>
              <Link to="/dashboard">
                <button>Enter</button>
              </Link>
            </div>
          ) : (
            <div>
              <Link to="/login">
                <button>Login</button>
              </Link>
              <Link to="/register">
                <button>Register</button>
              </Link>
            </div>
          )}
        </nav>
      </header>

      <main style={{ display: "flex", flexDirection: "column", flex: "1" }}>
        <section style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
          <h1>Master the Essentials of Artificial Intelligence</h1>
          <p>An interactive, slide-based journey through machine learning, neural networks, and modern LLMs designed for both students and teachers.</p>
        </section>

        <section style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flex: "1" }}>
            <img src="https://placehold.co/400x250?text=Interactive+Lessons" alt="Interactive Lessons Mockup" />
            <h3>Slide-by-Slide Learning</h3>
            <p>Bite-sized modules that break down complex algorithms into simple visuals.</p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flex: "1" }}>
            <img src="https://placehold.co/400x250?text=Role-Based+Portals" alt="Role-Based System" />
            <h3>Tailored Experiences</h3>
            <p>Separate tracking pipelines built distinctly for students and educators.</p>
          </div>
        </section>
      </main>

      <footer style={{ display: "flex", justifyContent: "center" }}>
        <p>&copy; {new Date().getFullYear()} Pi515 AI Toolkit. All rights reserved.</p>
      </footer>

    </div>
  );
}