import React from 'react'
import '../studies/Studies.scss'

import Timeline from './timeline/Timeline'

const Studies = () => {

  const texts = {
    heading: 'Studii și',
    spanText: 'Realizări'
  };
  
  return (
    <section className="containerStudies" id="studies"> 

      <div>
        <h2 className="headingStudies">
          {texts.heading}&nbsp;<span>{texts.spanText}</span>
        </h2>
      </div>

      <div className='timelineStudies'>
        <Timeline />
      </div>

    </section>
  );
}

export default Studies
