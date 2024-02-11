// pages/Portfolio.tsx
import React, { useState } from 'react';
import Header from '../components/header';

const Portfolio: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkModeHandler = (isDarkMode: boolean) => {
    setDarkMode(!isDarkMode);
    setDarkMode(!darkMode);
  };
  return (
    <div className='my-portfolio relative top-18'>
      <Header darkModeHandler={toggleDarkModeHandler} />
      <section id='portfolio_section' className={`w-full px-3 py-4 ${darkMode?'bg-slate-800': 'bg-blue-200'}`}>
        <h1 className="mt-5 text-center text-white">About My Projects</h1>
        <p className="text-center text-white px-4 py-3">Under Developement Right Now...</p>
      </section>
    </div>
  );
};

export default Portfolio;