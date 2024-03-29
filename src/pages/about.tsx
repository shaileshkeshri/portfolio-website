// pages/About.tsx
import React, { useState } from 'react';
import Header from '../components/header';

const About: React.FC = () => {

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkModeHandler = (isDarkMode: boolean) => {
    setDarkMode(!isDarkMode);
    setDarkMode(!darkMode);
  };
  
  return (
    <div className='about-me relative top-18'>
      <Header darkModeHandler={toggleDarkModeHandler} />
      
      <section id='about_section' className={`w-full px-3 py-4 ${darkMode?'bg-slate-800': 'bg-blue-200'}`}>
        <h1 className="mt-5 text-center text-white">About My Work</h1>
        <p className="text-center text-white px-4 py-3">Under Developement Right Now...</p>
      </section>
    </div>
  );
};

export default About;
