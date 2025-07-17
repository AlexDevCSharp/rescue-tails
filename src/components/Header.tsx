// src/components/Header.tsx
import { Link } from "react-router-dom";

const Header = () => {
  const isLoggedIn = false; // 🔁 Заменим позже на Firebase
  
  return (
    <header className="w-full px-6 py-4 flex justify-between items-center shadow-sm bg-white">
      <Link to="/" className="text-xl font-semibold text-gray-900">
        Rescue Tails Ukraine
      </Link>
      <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
        <Link to="/about" className="hover:text-blue-600">About</Link>
        <Link to="/posts" className="hover:text-blue-600">Posts</Link>
        <Link to="/stories" className="hover:text-blue-600">Stories</Link>
        <Link to="/support" className="hover:text-blue-600">How to help</Link>
        {/* <Link to="/calendar" className="hover:text-blue-600">Calendar</Link> */}
        <Link to="/partners" className="hover:text-blue-600">Partners</Link>
        <Link to="/contact" className="hover:text-blue-600">Contact</Link>
      </nav>
      <div className="flex gap-3 items-center">
        <Link
          to={isLoggedIn ? "/account" : "/signin"}
          className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm"
        >
          {isLoggedIn ? "My Account" : "Login"}
        </Link>
        <Link to="/support">
          <button className="ml-1 px-4 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition">
            Donate
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
