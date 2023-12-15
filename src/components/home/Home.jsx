import React from 'react';
import './Home.scss';
import AboutMe from '../about/AboutMe';
import Studies from '../studies/Studies';
import Contact from '../contact/Contact';
import Project from '../project/Project';

const Home = () => {
  return (
    <div>
      <section id="section-aboutMe" >
        <AboutMe />
      </section>
      <section id="section-studies" >
        <Studies />
      </section>
      <section id="section-project" >
        <Project />
      </section>
      <section id="section-contact" >
        <Contact />
      </section>
    </div>
  );
};

export default Home;
