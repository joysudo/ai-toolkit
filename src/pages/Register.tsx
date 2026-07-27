import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { registerUser } from "../firebase/auth";

export function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<"student" | "teacher">("student");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      await registerUser(email, password, name, role);
      navigate("/dashboard");
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1  className="auth-title">Create Account</h1>
        <form onSubmit={handleSubmit}  className="auth-form">
          <div className="auth-field">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="auth-field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="auth-field">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
            />
          </div>

          <div className="auth-field">
            <label>I am a:</label>
            <div className="auth-radio-group">
              <label className="auth-radio-label">
                <input
                  type="radio"
                  value="student"
                  checked={role === "student"}
                  onChange={() => setRole("student")}
                />
                Student
              </label>
              <label className="auth-radio-label">
                <input
                  type="radio"
                  value="teacher"
                  checked={role === "teacher"}
                  onChange={() => setRole("teacher")}
                />
                Teacher
              </label>
            </div>
          </div>

          {error && <p  className="auth-error">{error}</p>}

          <button type="submit"  className="auth-submit-btn">Register</button>
        </form>

        <p  className="auth-footer">
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </div>
    </div>
  );
}