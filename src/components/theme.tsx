// src/components/theme.tsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import darkModeIcon from '../assets/icons/darkmode.png';
import lightModeIcon from '../assets/icons/lightmode.png';
interface SwitchThemeProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  label: string;
  additonalClass?: string;
}

const SwitchTheme: React.FC<SwitchThemeProps> = ({ darkMode, toggleDarkMode, label, additonalClass }) => {

    const switchTrackColor = darkMode? 'bg-blue-600': 'bg-gray-100';
    const switchThumbColor = darkMode? 'bg-gray-100': 'bg-blue-600';
  return (
    <div className={`px-2 relative inline-flex items-center rounded-full cursor-pointer ${additonalClass}`}>
      <img
        src={darkMode ? lightModeIcon : darkModeIcon}
        alt={darkMode ? 'Dark Mode' : 'Light Mode'}
        className="rounded-full shadow-md cursor-pointer w-30px"
        onClick={toggleDarkMode}
      />
    </div>
    // <label className={`relative inline-flex items-center rounded-full cursor-pointer ${additonalClass}`}>
    //   <input
    //     type="checkbox"
    //     id="darkModeToggle"
    //     className="hidden"
    //     checked={darkMode}
    //     onChange={toggleDarkMode}
    //   />
    //   <span className={`relative w-12 h-6 rounded-full shadow-md cursor-pointer ${switchTrackColor}`}>
    //     <span
    //       className={`absolute inset-y-0 left-0 w-6 h-6 rounded-full shadow-inner transition-transform duration-300 ease-in-out ${
    //         darkMode ? 'translate-x-6' : ''
    //       } ${switchThumbColor}`}
    //     >
    //       {/* <FontAwesomeIcon icon={darkMode ? faMoon : faSun} /> */}
    //     </span>

    //   </span>
    //   {/* <span className="ml-3 text-sm font-medium">{label}</span> */}
    // </label>
  );
};

export default SwitchTheme;
