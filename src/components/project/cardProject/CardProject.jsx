import React from 'react'
import './CardProject.scss'

const CardProject = ({ imageSrc, title, description, githubLink }) => {
  const txtButton = 'Cod sursa';

  const handleButtonClick = () => {
    window.location.href = githubLink;
  };

  return (
    <div className="card">
      <img src={imageSrc} alt={title} />
      <div className="info">
        <h1>{title}</h1>
        <p>{description}</p>
        <button onClick={handleButtonClick}>{txtButton}</button>
      </div>
    </div>
  );
};

export default CardProject
