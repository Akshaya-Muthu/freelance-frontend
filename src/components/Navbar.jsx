import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="bg-black/60 backdrop-blur-md text-white fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-extrabold tracking-wide text-yellow-400">
          FreelanceHub
        </Link>

        {/* Links */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-yellow-400 transition">Home</Link>
          <Link to="/services" className="hover:text-yellow-400 transition">Services</Link>
          <Link to="/orders" className="hover:text-yellow-400 transition">Orders</Link>
          <Link to="/chat" className="hover:text-yellow-400 transition">Chat</Link>
          <Link to="/login" className="hover:text-yellow-400 transition">Login</Link>
          <Link to="/register" className="hover:text-yellow-400 transition">Register</Link>
        </div>

        {/* Social media icons */}
        <div className="hidden md:flex space-x-3">
          <a href="#" className="hover:text-yellow-400 transition">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-yellow-400 transition">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-yellow-400 transition">
            <FaLinkedinIn />
          </a>
        </div>

        {/* Mobile menu (optional if you want to expand later) */}
      </div>
    </nav>
  );
}
