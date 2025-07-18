import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Student from './pages/Student';
import Registration from './pages/Registration';
import Contact from './pages/Contact';
import MiniLayout from './layout/MainLout'; // Fix this import
import MainLayout from './layout/MainLout';

export default function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/student" element={<Student />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}
