import React from 'react';
import CardProject from '../cardProject/CardProject'; 
import './CardsList.scss';



import portofoliuPersonal from '../../assets/portofoliuPersonal.png'
import siteCsu from '../../assets/siteCSU.png'
import crlManolea from '../../assets/crlManolea.png'

const data = [
  {
    imageSrc: portofoliuPersonal,
    title: "Portofoliu personal",
    description: "Acest proiect reprezintă o aplicație web dinamică și interactivă, dezvoltată folosind biblioteca React și preprocesorul SCSS pentru a oferi o prezentare estetică și funcțională a experienței și abilităților mele.",
    githubLink: 'https://github.com/Leonard-71/portofoliu-personal',
  },

  {
    imageSrc: siteCsu,
    title: "CSU Suceava",
    description: "Această aplicație web dinamică și interactivă a fost dezvoltată special pentru echipa CSU Suceava, beneficiind de tehnologii precum biblioteca React și preprocesorul SCSS. Scopul acestei aplicații este de a oferi o interfață intuitivă și estetică, facilitând accesul și gestionarea eficientă a informațiilor și resurselor esențiale pentru membrii echipei CSU Suceava. Prin utilizarea React și SCSS, am creat un mediu care îmbină funcționalitatea avansată cu o prezentare vizuală plăcută, menită să sprijine colaborarea și eficiența în cadrul echipei CSU Suceava.",
    githubLink: 'https://github.com/Leonard-71?tab=repositories',
  },
  {
    imageSrc: crlManolea,
    title: "CRL Manolea",
    description: "Acest proiect reprezintă o platformă dezvoltată folosind tehnologii precum HTML, CSS,JavaScript și a fost creat cu scopul de a fi o reprezentare digitală a Comunității Rușilor Lipoveni din satul Manolea, județul Suceava. Prin intermediul acestei platforme, vizitatorii pot explora și descoperi informații relevante legate de tradițiile, cultura și istoria Rusilor Lipoveni din această comunitate.",
    githubLink: 'https://github.com/Leonard-71/Site-Comunitatea-Rusilor-Lipoveni-din-Manolea',
  },
 
];

const CardsList = () => {
  return (
    <div className="cardsList">
      {data.map((item, index) => (
        <CardProject
          key={index}
          imageSrc={item.imageSrc}
          title={item.title}
          description={item.description}
          githubLink={item.githubLink}
        />
      ))}
    </div>
  );
};

export default CardsList;
