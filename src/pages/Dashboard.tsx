import { Link } from 'react-router';

const modules = [
    { id: '1', name: 'module 1' }, 
    { id: '2', name: 'module 2' },
    { id: '3', name: 'module 3' }
    // have to manually edit this and App.tsx whenever new modules are added
]

export function Dashboard() {
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