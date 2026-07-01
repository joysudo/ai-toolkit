import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { onAuthStateChanged } from 'firebase/auth';
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
                // If no user is logged in, redirect to landing page
                navigate("/", { replace: true });
            } else {
                // User is authenticated, stop loading
                setLoading(false);
            }
        });

        return () => unsubscribe();
    }, [navigate]);

    if (loading) {
        return <div>Loading dashboard content...</div>;
    }
    
    return (
        <div>
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