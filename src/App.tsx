import { Routes, Route } from 'react-router';
import { Profile } from './pages/Profile.tsx';
import { Lesson } from './pages/Lesson.tsx';
import { module1 } from './data/slides';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Profile/>} />
      <Route path="/module/1" element={<Lesson slides={module1}/>} />
      {/* have to manually edit this and Profile.tsx whenever new modules are added */}
    </Routes>
  );
}

export default App
