import React from 'react';
import './DownloadCVButton.scss';
import CVFile from '../../assets/CV-LeonardFilip.pdf'; 

const DownloadCVButton = () => {
  const onButtonClick = () => {
    fetch(CVFile).then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let aLink = document.createElement("a");
        aLink.href = fileURL;
        aLink.download = "CV-LeonardFilip.pdf";
        aLink.click();
      });
    });
  };

  const btnDownTxt='Descarcă CV';

  return (
    <button onClick={onButtonClick} className='btnCV'>
      {btnDownTxt}
    </button>
  );
};

export default DownloadCVButton;
