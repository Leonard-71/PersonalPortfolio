import React from 'react'
import './Footer.scss'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Acest parametru face ca derularea să fie lină și animată
    });
  };
  return (

    
  
    <div className="footer">
        <div className="text">
            <p>Copyright &copy; 2023 by Filip Leonard | All Rights Reserved.</p>
        </div>

        <div className="iconTop">
        <a href="#" onClick={scrollToTop}><i className='bx bx-up-arrow-alt'></i></a>

        </div>
      
    </div>
  )
}

export default Footer
