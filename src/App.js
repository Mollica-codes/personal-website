import React from 'react';
import './css/App.css';
import './css/Tree.css';
import Navbar from './sections/Navbar';
import Intro from './sections/Intro';
import About from './sections/About';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
