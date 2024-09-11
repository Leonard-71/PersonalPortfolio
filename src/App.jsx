import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.scss'

import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <Router>
      <div id='menu'>
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;


/*
import Studies from './components/studies/Studies';
import Project from './components/project/Project';
import Contact from './components/contact/Contact';
import AboutMe from './components/aboutMe/AboutMe'
<Route path="/aboutMe" element={<AboutMe />} />
<Route path="/studies" element={<Studies />} />
<Route path="/project" element={<Project />} />
<Route path="/contact" element={<Contact />} />
*/

