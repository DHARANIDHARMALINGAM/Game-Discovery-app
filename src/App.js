
import React, { useState } from "react";
import Home from "./pages/Home";
import { FaSun, FaMoon } from "react-icons/fa";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
        <header className="flex items-center justify-between p-4 bg-gray-200 dark:bg-gray-800">
          <h1 className="text-2xl font-bold">🎮 Video Game Discovery</h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-300 dark:bg-gray-700"
          >
            {darkMode ? <FaSun className="text-yellow-500" /> : <FaMoon />}
          </button>
        </header>
        <Home />
      </div>
    </div>
  );
};

export default App;
