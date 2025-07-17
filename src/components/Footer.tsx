// src/components/Footer.tsx
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 px-6 py-8 mt-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Column 1: Logo + Description */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Rescue Tails Ukraine</h3>
          <p className="text-sm text-gray-600">
            Helping animals in need across Ukraine through rescue, shelter, and love.
          </p>
        </div>

        {/* Column 2: Links */}
        <div className="flex flex-col space-y-2">
          <Link to="/about" className="hover:text-blue-600">About</Link>
          <Link to="/stories" className="hover:text-blue-600">Stories</Link>
          <Link to="/support" className="hover:text-blue-600">How to help</Link>
          <Link to="/contact" className="hover:text-blue-600">Contact</Link>
        </div>

        {/* Column 3: Socials */}
        <div>
          <h4 className="font-semibold mb-2">Follow us</h4>
          <div className="flex gap-4 text-gray-500">
            {/* Можно заменить на иконки позже */}
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-xs text-gray-500">
        © 2024 Rescue Tails Ukraine. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
