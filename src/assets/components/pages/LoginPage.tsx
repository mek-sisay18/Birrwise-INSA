import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import logo from "../logo";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [theme, setTheme] = useState("dark");
  const navigate = useNavigate();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/create-pin");
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center relative overflow-hidden transition-colors duration-500 ${
        theme === "dark"
          ? "bg-gradient-to-br from-[#3a4d2c] via-[#1f2f1a] to-black"
          : "bg-gradient-to-br from-[#fdf6d8] via-[#d6f2c2] to-[#bce3a4]"
      }`}
    >
      <div className="absolute top-0 left-0 w-full flex items-center justify-between px-6 py-4 z-10">
        <div className="flex items-center">
          <h1
            className={`text-xl font-bold ${
              theme === "dark" ? "text-yellow-400" : "text-black"
            }`}
          >
            Brii-Wise
          </h1>
        </div>
        <button
          onClick={toggleTheme}
          className={`rounded-full p-2 border ${
            theme === "dark"
              ? "border-yellow-400 text-yellow-400"
              : "border-black text-black"
          } hover:bg-opacity-10`}
        >
          {theme === "dark" ? "🌞" : "🌙"}
        </button>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className={`mt-20 backdrop-blur-md border rounded-xl p-8 w-full max-w-md shadow-xl ${
          theme === "dark"
            ? "bg-black/30 border-yellow-400 text-yellow-100"
            : "bg-black/5 border-black/20 text-black"
        }`}
      >
        <h2 className="text-2xl font-bold mb-2 text-center">
          Welcome to Birr-Wise
        </h2>
        <p
          className={`text-sm text-center mb-6 ${
            theme === "dark" ? "text-yellow-300" : "text-black/70"
          }`}
        >
          እንኳን ደህና መጡ! 
        </p>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className={`w-full px-4 py-2 rounded bg-white/20 border focus:outline-none focus:ring-2 focus:ring-yellow-400 ${
              theme === "dark"
                ? "text-yellow-100 placeholder-yellow-300 border-yellow-500"
                : "text-black placeholder-black/50 border-black/30"
            }`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className={`w-full px-4 py-2 rounded bg-white/20 border focus:outline-none focus:ring-2 focus:ring-yellow-400 ${
              theme === "dark"
                ? "text-yellow-100 placeholder-yellow-300 border-yellow-500"
                : "text-black placeholder-black/50 border-black/30"
            }`}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className={`w-full py-2 rounded ${
              theme === "dark"
                ? "bg-yellow-500 hover:bg-yellow-600 text-black"
                : "bg-purple-700 hover:bg-purple-800 text-white"
            } transition font-semibold`}
          >
            Login
          </button>
        </form>
      </motion.div>

      <div className="absolute right-10 top-1/2 transform -translate-y-1/2 space-y-4">
        {["🏠", "🍲", "🛒", "🚗", "💰", "🍽️"].map((icon, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.2 }}
            className="bg-red-400 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg"
          >
            {icon}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
