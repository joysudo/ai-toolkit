import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/config';
import { useAuth } from '../firebase/auth';
import { getAllProgress, type ModuleProgress } from '../firebase/progress';
import { modules } from '../data/modules';

export function Dashboard() {
  const navigate = useNavigate();
  const { user, loading: authLoading } = useAuth();
  const [allProgress, setAllProgress] = useState<Record<string, ModuleProgress>>({});
  const [progressLoading, setProgressLoading] = useState(true);

  useEffect(() => {
    if (authLoading) return;
    if (!user) {
      navigate("/", { replace: true });
      return;
    }
    getAllProgress(user.uid, modules.map(m => m.id)).then((data) => {
      setAllProgress(data);
      setProgressLoading(false);
    });
  }, [user, authLoading, navigate]);

  const handleSignout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("There was an error signing out: ", error);
    }
  }

  if (authLoading || progressLoading) {
    return <div>Loading dashboard content...</div>;
  }

  return (
    <div>
      <button onClick={handleSignout} className="mcq-option-btn" style={{width: "fit-content", marginBottom: "1rem", padding: "0.5rem 1rem"}}>Sign Out</button>
      <h1>Modules</h1>
      <div className="module-cards-grid">
        {modules.map((mod, index) => {
          const pct = allProgress[mod.id]?.completed ? 100 : allProgress[mod.id] ? Math.round(((allProgress[mod.id].highestUnlocked + 1) / mod.slideCount) * 100) : 0;
          const isDisabled = !mod.alwaysUnlocked && index > 0 && !allProgress[modules[index - 1].id]?.completed;

          if (isDisabled) {
            return (
              <div key={mod.id} className="module-card disabled">
                {mod.imageUrl
                  ? <img src={mod.imageUrl} alt={mod.name} className="module-card-img" />
                  : <div className="module-card-img" aria-hidden="true" />
                }
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
                {mod.imageUrl
                  ? <img src={mod.imageUrl} alt={mod.name} className="module-card-img" />
                  : <div className="module-card-img" aria-hidden="true" />
                }
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
