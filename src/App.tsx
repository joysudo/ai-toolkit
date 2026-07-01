import { Routes, Route } from 'react-router';
import { Navigate } from "react-router";
import { Dashboard } from './pages/Dashboard';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Lesson } from './pages/Lesson';
import { module1 } from './data/slides.ts';
import { module2 } from './data/module2.ts';
import { module3 } from './data/module3.ts';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/module/1" element={<Lesson slides={module1}/>} />
      <Route path="/module/2" element={<Lesson slides={module2}/>} />
      <Route path="/module/3" element={<Lesson slides={module3}/>} />
      {/* have to manually edit this and Dashboard.tsx whenever new modules are added */}
    </Routes>
  );
}

export default App
