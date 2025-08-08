import React, { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(() =>
    localStorage.getItem('theme') === 'dark'
  );

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleMode = () => setDarkMode((prev) => !prev);

  return (
   <button
  onClick={toggleMode}
  className="fixed top-4 right-4 z-50 p-2 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded-md shadow"
>
  {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
</button>

  );
};

export default ThemeToggle;
