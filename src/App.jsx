// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
// import Header from './components/Header';
import Footer from './components/Footer';
// import Home from './pages/Home';
// import About from './pages/AboutMe';
// import Resume from './pages/Resume';
// import Contact from './pages/Contact';
// import Projects from './pages/Portfolio';

const App = () => {
  return (
    <>
      {/* <Header /> */}
      <main>
        {/* <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        // </Routes> */}
        <Outlet/>
      </main>
      <Footer />
    </>
  );
};

export default App;

