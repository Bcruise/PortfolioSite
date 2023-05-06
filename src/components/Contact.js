import emailjs from '@emailjs/browser';
import React, { useState, useEffect } from 'react';
import Header from './Header';
import headersInfo from '../data/headers.json';
import '../css/Contact.css';

function Contact() {
  const [contactCarrier, setContactCarrier] = useState('');
  const [whetherEmailSent, setWhetherEmailSent] = useState(false);
  const [emailTemplate, setEmailTemplate] = useState({name: '', email: '', message: ''})

  useEffect(() => {headersInfo.forEach(val => {
    if (val.title === 'CONTACT') {
        setContactCarrier(val);
    }
  })});

  const SendEmail = () => {
    setWhetherEmailSent(true);
    emailjs.send('service_sm9sfhi', 'template_o1do94o', emailTemplate, '-29jWKGdLoYcM0kno')
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
  }
console.log(emailTemplate)
  return (
    <div className="contact mb-5">
        <Header title={contactCarrier.title} description={contactCarrier.description}/>
          <form className="col-10 p-5 m-5">
              <label className="p-1">Name</label>
              <input className="user-name p-3 mb-5" placeholder="Enter Your Name" 
                onInput={(e) => setEmailTemplate({ ...emailTemplate, name: e.target.value })}/>
              <label className="p-1">Email</label>
              <input className="user-email p-3 mb-5" placeholder="Enter Your Email" type="email"
                onInput={(e) => setEmailTemplate({ ...emailTemplate, email: e.target.value })}/>
              <label className="p-1">Message</label>
              <textarea className="user-message p-3 mb-5"  placeholder="Enter Your Message" 
                onInput={(e) => setEmailTemplate({ ...emailTemplate, message: e.target.value })}></textarea>
              <div className="button-div col-12">
                  <button className="submit-button" 
                    onClick={
                      () => SendEmail()
                    }>
                    SUBMIT
                  </button>
              </div>
              {whetherEmailSent && 
                <div className="email-conf">
                  <span>*Email sent</span>
                </div>}
          </form>
    </div>    
  );
}

export default Contact;