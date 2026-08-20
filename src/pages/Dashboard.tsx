import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebase/config';
import { getAllProgress, type ModuleProgress } from '../firebase/progress';
import { modules } from '../data/modules';

export function Dashboard() {
  const navigate = useNavigate();
  const [allProgress, setAllProgress] = useState<Record<string, ModuleProgress>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        navigate("/", { replace: true });
      } else {
        const progressData = await getAllProgress(user.uid, modules.map(m => m.id));
        setAllProgress(progressData);
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
      <button onClick={handleSignout} className="mcq-option-btn" style={{width: "fit-content", marginBottom: "1rem", padding: "0.5rem 1rem"}}>Sign Out</button>
      <h1>Modules</h1>
      <div className="module-cards-grid">
        {modules.map((mod, index) => {
          const pct = allProgress[mod.id]?.completed ? 100 : allProgress[mod.id] ? Math.round(((allProgress[mod.id].highestUnlocked + 1) / mod.slideCount) * 100) : 0;
          const isDisabled = index > 0 && !allProgress[modules[index - 1].id]?.completed;
          
          if (isDisabled) {
            return (
              <div key={mod.id} className="module-card disabled">
                <img
                  src={mod.imageUrl || 'https://via.placeholder.com/300x180'} 
                  alt={mod.name} 
                  className="module-card-img"
                />
                <div className="progress-bar-container">
                  <div className="progress-bar-fill" style={{ width: '0%' }} />
                </div>
                <div className="module-card-body">
                  <h2 className="module-card-title">{mod.name} (Locked)</h2>
                  <p className="module-card-subtitle">{mod.slideCount} slides</p>
                </div>
              </div>
            );
          }

          return (
            <Link key={mod.id} to={`/module/${mod.id}`} className="module-card-link">
              <div className="module-card">
                <img
                  src={mod.imageUrl || 'https://via.placeholder.com/300x180'} 
                  alt={mod.name} 
                  className="module-card-img"
                />
                <div className="progress-bar-container">
                  <div className="progress-bar-fill" style={{ width: `${pct}%` }} />
                </div>
                <div className="module-card-body">
                  <h2 className="module-card-title">{mod.name}</h2>
                  <p className="module-card-subtitle">{mod.slideCount} slides</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}