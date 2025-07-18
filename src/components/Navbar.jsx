import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-blue-700 text-white p-4">
      <nav className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Vishwa Bharati</h1>
        <ul className="flex gap-4">
          <li><Link to="/" className="hover:underline">Home</Link></li>
          <li><Link to="/about" className="hover:underline">About</Link></li>
          <li><Link to="/student" className="hover:underline">Student</Link></li>
          <li><Link to="/registration" className="hover:underline">Registration</Link></li>
          <li><Link to="/contact" className="hover:underline">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}
