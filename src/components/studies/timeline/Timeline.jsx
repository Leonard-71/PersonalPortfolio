import React, { useEffect } from 'react';
import './Timeline.scss';

import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import StarIcon from "@material-ui/icons/Star";
import StopIcon from "@material-ui/icons/Stop";
import "react-vertical-timeline-component/style.min.css";


const timelineData = [
  {
    type: 'school',
    title: 'Certificare ECDL',
    date: '11/06/2020',
    description: 'În data de 18.02.2020 am obținut Certificarea ECDL Bac profile ce reprezintă o recunoaștere internațională a competențelor în domeniul utilizării calculatorului și al aplicațiilor software. Această certificare atestă abilitățile practice în diferite domenii precum lucrul cu documente, foi de calcul, baze de date, prezentări, cunoștințe fundamentale despre computer și utilizarea mediului online.    ',
    location:'',
    icon: <SchoolIcon />
  },
  {
    type: 'school',
    title: 'Absolvirea',
    date: '11/06/2020',
    description: 'Am finalizat studiile la Colegiul Tehnic "Mihai Băcescu", unde am urmat specializarea în matematică-informatică. În cadrul acestui program de învățământ, am obținut cunoștințe solide în domeniul matematicii și informaticii.',
    location:'Falticeni, jud. Suceava, Romania',
    icon: <SchoolIcon />
  },
  {
    type: 'school',
    title: 'Admitere universitate',
    date: '14/10/2020',
    description: 'Am fost admis la Facultatea de Inginerie Electrică şi Ştiința Calculatoarelor din cadrul Universităţii “Ştefan cel Mare” Suceava, specializarea Calculatoare.',
    location: 'Strada Universității 13, 720229,jud. Suceava, România',
    icon: <SchoolIcon />
  },

  {
    type: 'work',
    title: 'Stagiu de practică Endava',
    date: '11/07/2022 – 05/08/2022 ',
    description: 'Experiența acumulată în cadrul Endava Romania m-a concentrat în special pe dezvoltarea aplicațiilor web, cu accent pe domeniul frontend-ului. Prin resurse educaționale și îndrumare dedicată, am învățat și aplicat tehnologii moderne precum HTML, CSS și JavaScript. Această perioadă a consolidat abilitățile mele în proiectarea interfețelor interactive, pregătindu-mă pentru cerințele dinamice ale industriei dezvoltării web.',
    location: 'Strada Narciselor, Suceava, Romania',
    icon: <WorkIcon />
  },

  {
    type: 'work',
    title: 'Stagiu de practică RaisisSoftware',
    date: '24/03/2023',
    description: 'În cadrul acestui stagiu, am avut oportunitatea de a lucra în echipa de Frontend Development, contribuind la dezvoltarea și implementarea aplicațiilor web. Am fost implicat activ în procesul de creare a interfețelor utilizatorilor, utilizând cunoștințele mele de HTML, CSS și JavaScript.',
    location: 'Strada Narciselor, Suceava, Romania',
    icon: <WorkIcon />
  },
  
];

const Timeline = () => {

  return (
    <div className="my-timeline">
    <VerticalTimeline>
      <VerticalTimelineElement
        iconStyle={{ background: "rgb(0, 153, 51)", color: "#fff" }}
        icon={<StarIcon />}
      />
      {timelineData.map((item, index) => (
        <VerticalTimelineElement
          key={index}
          className={`vertical-timeline-element--${item.type}`}
          iconStyle={{ background: item.type === 'work' ? 'rgb(33, 150, 243)' : 'rgb(69, 84, 105)', color: "#fff" }}
          icon={item.icon}
        >
          <h3 className="vertical-timeline-element-title">{item.title}</h3>
          <h4 className="vertical-timeline-element-subtitle">{item.date}</h4>
          <p>{item.description}</p>
          <h4 className="vertical-timeline-element-subtitle"> {item.location}</h4>
        </VerticalTimelineElement>
      ))}
      <VerticalTimelineElement
        iconStyle={{ background: "rgb(204, 51, 0)", color: "#fff" }}
        icon={<StopIcon />}
      />
    </VerticalTimeline>
    </div>
  );
};

export default Timeline;
