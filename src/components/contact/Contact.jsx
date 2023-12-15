import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.scss'

const Contact = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [emailSubject, setEmailSubject] = useState('');
  const [message, setMessage] = useState('');

  const texts = {
    heading: 'Contactează-mă!',
    spanText: ''

  };

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      fullName: 'Filip Leonard',
      email: 'leonard.filip976@gmail.com',
      mobileNumber: '0741935188',
      emailSubject: 'Subject of the email',
      message: 'gtrt', // Mesajul
    };
    

    emailjs.send(
      'service_iu5m7g6',
      'template_9o0rnsk',
      templateParams,
      '20dGa_pNFR2PbiyXK'
    )
      .then((response) => {
        console.log('E-mailul a fost trimis!', response.status, response.text);
      }, (error) => {
        console.error('Eroare la trimiterea e-mailului:', error);
      });
  };

  return (
    <section id="contact" className="contact" >
      
      <h2 className="heading"> 
       {texts.heading}&nbsp;<span>{texts.spanText}</span>
      </h2>

      <form onSubmit={sendEmail}>
        <div className="input-box">
          <div className="input-row">
            <input
              type="text"
              placeholder="Nume si Prenume"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-row">
            <input
              type="number"
              placeholder="Numar de telefon"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
            />
            <input
              type="text"
              placeholder="Subiectul emailului"
              value={emailSubject}
              onChange={(e) => setEmailSubject(e.target.value)}
            />
          </div>

          <textarea
            cols="30"
            rows="7"
            placeholder="Introduce-ți mesajul..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}>
          </textarea>

          <input type="submit" value="Trimite" className="btn" />
        </div>
      </form>
    </section>

  );
};

export default Contact;

