import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebase/config';
import { modules } from '../data/modules';

export function Dashboard() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/", { replace: true });
      } else {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleSignout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("There was an error signing out: ", error);
    }
  }

  if (loading) {
    return <div>Loading dashboard content...</div>;
  }

  return (
    <div>
      <button onClick={handleSignout}>Sign Out</button>
      <h1>here are the modules</h1>
      <div className="module-cards-grid">
        {modules.map((mod) => (
          <div className="module-card">
            <Link to={`/module/${mod.id}`}>{mod.name}</Link>
            <p>{mod.slideCount} slides</p>
          </div>
        ))}
      </div>
    </div>
  );
}