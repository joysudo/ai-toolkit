import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebase/config';

const modules = [
  { id: '1', name: 'module 1' },
  { id: '2', name: 'module 2' },
  { id: '3', name: 'module 3' }
  // have to manually edit this and App.tsx whenever new modules are added
]

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
      <ul>
        {modules.map((mod) => (
          <li>
            <Link to={`/module/${mod.id}`}>{mod.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}