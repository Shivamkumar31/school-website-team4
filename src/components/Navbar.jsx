import { Link } from 'react-router-dom';

export default function Header() {
  return (
      <header className="text-white p-3 text-base" style={{ background: 'linear-gradient(90deg, #2563eb 0%, #38bdf8 100%)' }}>
        <nav className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center gap-2">
              <img
                  src="https://tse4.mm.bing.net/th/id/OIP.dYYZuUl1R4RwUTtFMrCitgAAAA?pid=Api&P=0&h=180"
                  alt="Logo"
                  className="w-10 h-8 object-contain"
              />
              <h1 className="text-xl font-bold">Vishwa Bharati Shiksha Sadan</h1>
            </Link>
          </div>

          <ul className="flex gap-2">
            <li><Link to="/" className="px-3 py-1.5 rounded bg-blue-600 hover:bg-blue-700 transition-colors duration-200 text-white font-semibold shadow text-base">Home</Link></li>
            <li><Link to="/about" className="px-3 py-1.5 rounded bg-blue-600 hover:bg-blue-700 transition-colors duration-200 text-white font-semibold shadow text-base">About</Link></li>
            <li><Link to="/student" className="px-3 py-1.5 rounded bg-blue-600 hover:bg-blue-700 transition-colors duration-200 text-white font-semibold shadow text-base">Student</Link></li>
            <li><Link to="/registration" className="px-3 py-1.5 rounded bg-blue-600 hover:bg-blue-700 transition-colors duration-200 text-white font-semibold shadow text-base">Registration</Link></li>
            <li><Link to="/contact" className="px-3 py-1.5 rounded bg-blue-600 hover:bg-blue-700 transition-colors duration-200 text-white font-semibold shadow text-base">Contact</Link></li>
          </ul>
        </nav>
      </header>
  );
}