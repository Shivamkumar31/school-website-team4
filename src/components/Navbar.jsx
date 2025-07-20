import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header
      className="sticky top-0 z-50 text-white p-4 shadow-md"
      style={{ background: "linear-gradient(90deg, #2563eb 0%, #38bdf8 100%)" }}
    >
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="src/assets/vbss-logo.png"
              alt="Logo"
              className="w-12 h-10 object-contain"
            />
            <h1 className="text-2xl font-bold">Vishwa Bharati Shiksha Sadan</h1>
          </Link>
        </div>

        <ul className="flex gap-4">
          <li>
            <Link
              to="/"
              className="px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300 font-semibold"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300 font-semibold"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/student"
              className="px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300 font-semibold"
            >
              Student
            </Link>
          </li>
          <li>
            <Link
              to="/registration"
              className="px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300 font-semibold"
            >
              Register
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300 font-semibold"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
