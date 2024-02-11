// src/pages/Home.tsx
import React, { useEffect, useState } from 'react';
import Header from '../components/header';
import '../styles/home.css';
import ProductCompoent from '../components/product';
// import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons'

const Home: React.FC = () => {

  const [headingText, setHeadingText] = useState('');
  const fullHeadingText = 'Hi, I\'m Shailesh, I design & build User Interfaces.';

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkModeHandler = (isDarkMode: boolean) => {
    setDarkMode(!isDarkMode);
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    // Typing animation for heading text (starts immediately)
    const intervalId = setInterval(() => {
      const nextCharacter = headingText.length < fullHeadingText.length ? headingText.length + 1 : 0;
      setHeadingText(fullHeadingText.slice(0, nextCharacter));
    }, 200);

    if (headingText === fullHeadingText) {
      clearInterval(intervalId);
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [headingText]);

  return (
    <div className='shailesh-portfolio relative'>
      <Header darkModeHandler={toggleDarkModeHandler} />
      <section className={`poster-section relative mt-16 ${darkMode?'darkmode':'lightmode'}`}>
        <div className={`overlay absolute top-0 left-0 w-full h-full text-center`}>
          <h1 className={`px-3 md:px-1 absolute top-0 mt-16 text-4xl font-bold mb-4 ${darkMode?'text-white':'text-gray-800'}`}>
            {headingText}
          </h1>
          <div className="absolute float-section">
            <p className={`text-md ${darkMode?'text-white':'text-gray-800'}`}>More About Me!</p>
            <a href="#about_section" className={`${darkMode?'text-white':'text-gray-800'} icon-container`}>
              <FontAwesomeIcon icon={faAnglesDown} className='floating'/>
            </a>
          </div>
        </div>
      </section>

    <section id='about_section' className='pt-5 pb-3 px-2'>
      <h2 className="my-2 text-center text-blue-600 font-bold text-2xl">About My Work</h2>
      <p className="text-justify text-gray-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus non sequi vitae ad eius magni aspernatur deleniti, nostrum doloremque necessitatibus soluta accusamus reiciendis aliquid atque quasi. Reprehenderit ea amet vel itaque deserunt nulla. Maxime incidunt ipsum tempora repellendus, at eius, inventore iusto quod assumenda deserunt vitae sunt velit aliquid optio?.</p>
    </section>

    {/* <section>
      <h2 className="my-2 text-center text-blue-600 font-bold text-2xl">My Products</h2>
      <ProductCompoent />
    </section> */}
      {/* Rest of your content */}
    </div>
  );
};

export default Home;
