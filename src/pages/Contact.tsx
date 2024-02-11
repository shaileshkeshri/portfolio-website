// pages/Contact.tsx
import React, { useState } from 'react';
import Header from '../components/header';

const Contact: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkModeHandler = (isDarkMode: boolean) => {
    setDarkMode(!isDarkMode);
    setDarkMode(!darkMode);
  };
  return (
    <div className='contact-me relative top-18'>
      <Header darkModeHandler={toggleDarkModeHandler} />
      <section id='contact_section' className={`w-full px-3 py-4 ${darkMode?'bg-slate-800': 'bg-blue-200'}`}>
        <h1 className="mt-5 text-center text-white">Let's Connect</h1>
        <p className="text-center text-white px-4 py-3">Under Developement Right Now...</p>
      </section>
    </div>
  );
};

export default Contact;