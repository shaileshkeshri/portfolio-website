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
      <section className="poster-section relative mt-16">
        <div className={`overlay absolute top-0 left-0 w-full h-full text-center ${darkMode?'overlay-darkmode':'overlay-lightmode'}`}>
          <h1 className={`px-3 md:px-1 absolute top-0 mt-16 text-4xl font-bold mb-4 ${darkMode?'text-white':'text-gray-800'}`}>
            {headingText}
          </h1>
          <div className="absolute bottom-8">
            <p className={`text-lg ${darkMode?'text-white':'text-gray-800'}`}>Learn More about what I do!</p>
            <a href="#about_section" className={`${darkMode?'text-white':'text-gray-800'} icon-container`}>
              <FontAwesomeIcon icon={faAnglesDown} className='floating'/>
            </a>
          </div>
        </div>
    </section>

    <section id='about_section' className='pt-5 pb-3 px-2'>
      <h2 className="my-2 text-center text-blue-600 font-bold text-2xl">About My Work</h2>
      <p className="text-justify text-gray-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus non sequi vitae ad eius magni aspernatur deleniti, nostrum doloremque necessitatibus soluta accusamus reiciendis aliquid atque quasi. Reprehenderit ea amet vel itaque deserunt nulla. Maxime incidunt ipsum tempora repellendus, at eius, inventore iusto quod assumenda deserunt vitae sunt velit aliquid optio?.</p>
      <p className="text-justify text-teal-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum ducimus alias nam facere, quia asperiores quos, nemo exercitationem illum minus voluptatem a tempore mollitia, sapiente beatae ut adipisci voluptatum enim. Ipsam optio debitis illum. Saepe a fugit corporis obcaecati? Quod ad iure reiciendis in a sit voluptatum, quas laboriosam repudiandae asperiores maxime animi vitae autem aut, impedit corrupti sequi dicta similique dignissimos distinctio facere? Cupiditate veritatis unde repellat commodi odio!</p>
      <p className="text-justify text-red-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi totam ex earum, vel ad minima illo distinctio at repellat officiis.</p>
      <p className="text-justify text-indigo-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi totam ex earum, vel ad minima illo distinctio at repellat officiis.</p>
      <p className="text-justify text-gray-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus non sequi vitae ad eius magni aspernatur deleniti, nostrum doloremque necessitatibus soluta accusamus reiciendis aliquid atque quasi. Reprehenderit ea amet vel itaque deserunt nulla. Maxime incidunt ipsum tempora repellendus, at eius, inventore iusto quod assumenda deserunt vitae sunt velit aliquid optio?.</p>
      <p className="text-justify text-teal-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum ducimus alias nam facere, quia asperiores quos, nemo exercitationem illum minus voluptatem a tempore mollitia, sapiente beatae ut adipisci voluptatum enim. Ipsam optio debitis illum. Saepe a fugit corporis obcaecati? Quod ad iure reiciendis in a sit voluptatum, quas laboriosam repudiandae asperiores maxime animi vitae autem aut, impedit corrupti sequi dicta similique dignissimos distinctio facere? Cupiditate veritatis unde repellat commodi odio!</p>
      <p className="text-justify text-red-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi totam ex earum, vel ad minima illo distinctio at repellat officiis.</p>
      <p className="text-justify text-indigo-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi totam ex earum, vel ad minima illo distinctio at repellat officiis.</p>
    </section>

    <section>
      <h2 className="my-2 text-center text-blue-600 font-bold text-2xl">My Products</h2>
      <ProductCompoent />
    </section>
      {/* Rest of your content */}
    </div>
  );
};

export default Home;
