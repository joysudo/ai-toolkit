import { Routes, Route } from 'react-router';
import { Profile } from './pages/Profile.tsx';
import { Lesson } from './pages/Lesson.tsx';
import { module1 } from './data/slides.ts';
import { module2 } from './data/module2.ts';
import { module3 } from './data/module3.ts';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Profile/>} />
      <Route path="/module/1" element={<Lesson slides={module1}/>} />
      <Route path="/module/2" element={<Lesson slides={module2}/>} />
      <Route path="/module/3" element={<Lesson slides={module3}/>} />
      {/* have to manually edit this and Profile.tsx whenever new modules are added */}
    </Routes>
  );
}

export default App
