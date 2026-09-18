import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import './App.module.css';

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <main className="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
    </div>
  );
};

export default App;