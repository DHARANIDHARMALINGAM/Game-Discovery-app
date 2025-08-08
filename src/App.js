import React from 'react';
import Home from './pages/Home';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-white">
      <ThemeToggle />
      <Home />
    </div>
  );
}

export default App;
