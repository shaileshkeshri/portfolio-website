import React from 'react';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';

const App: React.FC = () => {
  return (
    
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
};

export default App;
