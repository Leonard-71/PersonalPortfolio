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

