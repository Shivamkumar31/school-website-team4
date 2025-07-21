import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Student from "./pages/Student";
import Registration from "./pages/Registration";
import Contact from "./pages/Contact";
import MainLayout from "./layout/MainLout";
import Gallery from "./pages/Gallery";
import Sanlat from "./pages/Sanlat";
import Facitilies from "./pages/Facilities";
import Teacherdata from "./pages/Teacherdata";
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
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/sanlat" element={<Sanlat />} />
          <Route path="/facilities" element={<Facitilies />} />
          <Route path="/teacher-data" element={<Teacherdata />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}
