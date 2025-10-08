import Logo from "./logo";
import ThemeToggle from "./ThemeToggle";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 shadow flex justify-between items-center px-8 py-6">
     
      <div className="flex items-center space-x-2">
        <Logo size={28} />
        <span className="text-2xl font-bold text-primary dark:text-white">Birr-Wise</span>
      </div>

      
      <ul className="flex space-x-10 text-lg font-medium text-text-secondary dark:text-gray-300">
        <li><a href="#home" className="hover:text-primary dark:hover:text-yellow-400 transition">Home</a></li>
        <li><a href="#features" className="hover:text-primary dark:hover:text-yellow-400 transition">Features</a></li>
        <li><a href="#future" className="hover:text-primary dark:hover:text-yellow-400 transition">Future</a></li>
        <li><a href="#contacts" className="hover:text-primary dark:hover:text-yellow-400 transition">Contact</a></li>
      </ul>

    
      <div className="flex items-center space-x-4">
        <ThemeToggle />
        <Link to="/login">
          <button
            className="px-5 py-2 rounded font-semibold transition
                       bg-yellow-500 text-black
                       dark:bg-yellow-300 dark:text-black
                       hover:bg-green-600 hover:text-white
                       dark:hover:bg-green-400 dark:hover:text-black
                       shadow-md"
          >
            Get Started
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
