import { Routes, Route } from 'react-router';
import { Dashboard } from './pages/Dashboard';
import { Landing } from './pages/Landing';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Lesson } from './pages/Lesson';
import { modules } from './data/modules';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      {modules.map((mod) => (
        <Route path={`/module/${mod.id}`} element={<Lesson moduleId={mod.id} slides={mod.getSlides()}/>} />
      ))}
    </Routes>
  );
}

export default App
