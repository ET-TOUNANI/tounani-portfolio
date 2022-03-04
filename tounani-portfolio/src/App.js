import React from 'react';
import Header from './includes/Header';
import About from './includes/About';
import Projects from './includes/Projects';
import OpenSource from './includes/OpenSource';
import Work from './includes/Work';
import Github from './includes/Github';
import Infos from './includes/Infos';
import Skills from './includes/Skills';
import Testimonials from './includes/Testimonials';
import Education from './includes/Education';
import Language from './includes/Language';
import Blog from './includes/Blog';
import Footer from './includes/Footer';


function App() {
  return (
    <div>
        <Header className="header" />
        <div className="container sections-wrapper py-5">
            <div className="row">
              <About />
              <Projects />
              <OpenSource />
              <Work/>
              <Github/>
            </div>
        </div>
        <div className="secondary col-lg-4 col-12">
          <Infos />
          <Skills />
          <Testimonials />
          <Education />
          <Language />
          <Blog />
          <Footer className="footer" />
        </div>
    </div>
  )
}

export default App