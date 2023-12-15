import React, { useState } from 'react';
import './Navbar.scss';

const Navbar = () => {

  const MenuItems = [
    { id: 'section-aboutMe', text: 'Despre mine' },
    { id: 'section-studies', text: 'Studii' },
    { id: 'section-project', text: 'Proiecte' },
    { id: 'section-contact', text: 'Contact' }
  ];

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); 
    }
  };

  return (
    <nav id="nav" className="wrap">
      <i className="fas fa-bars hamburger" aria-hidden="true" onClick={toggleMenu}></i>
      <ul id="menu" className={isOpen ? 'show-menu' : ''}>
        {MenuItems.map((item) => (
          <li key={item.id} onClick={() => scrollToSection(item.id)}>
            <span>{item.text}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
