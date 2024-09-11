import React from 'react'
import './Project.scss'
import CardsList from './cardsList/CardsList';
import DownloadCVButton from '../project/downloadCVButton/DownloadCVButton';


const Project = () => {

  const texts = {
    heading: 'Listă',
    spanText: 'Proiecte'
  };

  const txtCV ='Puteți descărca CV-ul meu cu o simplă apăsare de click chiar de aici';

  

  return (
    <section id='project' className='containerProject'>

      <div>
        <h2 className="headingProject">
        <span>{texts.heading}</span>&nbsp;{texts.spanText}
        </h2>
      </div>

      <div className='container-projects'>
        <CardsList />
      </div>


      <div className="centered-container">
        <h2 className="white-text">{txtCV}</h2>
        <DownloadCVButton />
      </div>



      
    </section>
  )
}

export default Project
