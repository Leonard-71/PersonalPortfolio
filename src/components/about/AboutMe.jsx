import React, { useState } from 'react';
import './AboutMe.scss';
import imgPrincipala from '../assets/imgPrincipala.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const aboutMeData = {
  subheading: 'Junior Frontend Developer',
  description: `Sunt Filip Leonard, o persoană entuziastă, deschisă către provocări noi și pasionată de dezvoltarea web. 
Îmi place să explorez și să creez experiențe digitale captivante care să aducă valoare utilizatorilor.
Abilitățile mele includ lucrul în echipă, cât și individual, având un focus deosebit pe rezultatele finale de înaltă calitate. 
Sunt mândru atunci când văd că munca mea aduce rezultate conforme cu așteptările și contribuie la crearea unor produse sau site-uri web remarcabile.
Ca frontend developer, sunt organizat și capabil să gestionez eficient proiectele, având o abilitate dezvoltată de a lucra cu tehnologii precum HTML, CSS, JavaScript și React. 
Îmbinând aceste cunoștințe, creez interfețe intuitive și plăcute vizual, aducând soluții inovatoare și captivante în lumea web.
Sunt entuziasmat să aplic cunoștințele și experiența mea în dezvoltarea web, inclusiv în utilizarea React, pentru a contribui la proiecte complexe și a aduce valoare în mediul online.`,
  imagePath: imgPrincipala,
};

const formatDescription = (text) => {
  const paragraphs = text.split(/\s{2,}/g);
  return paragraphs.map((paragraph, index) => (
    <p key={index}>{paragraph}</p>
  ));
};

const texts = {
  heading: 'Despre',
  spanText: 'mine'
};


const AboutMe = () => {
  const { subheading, description } = aboutMeData;
  const truncatedDescription = description.substring(0, 500);
  const isTruncated = description.length > 500;
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <section className="container-about" id="about">
      <div className="about-image">
        <img src={imgPrincipala} alt="About Me" className="larger-image" />
        <div className="social-icons">

          <a href='https://github.com/Leonard-71' className="icon-github">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href='https://www.facebook.com/leonard.filip007' className="icon-facebook">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href='https://www.instagram.com/leonard_filip' className="icon-instagram">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href='https://www.linkedin.com/in/filip-leonard-26036726a' className="icon-linkedin">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>

          
        </div>
      </div>
      <div className="desc-about">
        <h2 className="heading-about">
            <span>{texts.heading}</span>&nbsp;{texts.spanText}
        </h2>
        <h3>{subheading}</h3>
        {showFullDescription ? (
          <>
            {formatDescription(description)}
            <span onClick={toggleDescription} className="read-more">
              Vezi mai puțin
            </span>
          </>
        ) : (
          <>
            {formatDescription(isTruncated ? `${truncatedDescription}...` : description)}
            {isTruncated && (
              <span onClick={toggleDescription} className="read-more">
                Vezi mai mult
              </span>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default AboutMe;
