import React, { useState, useEffect } from 'react';
import Header from './Header';
import headersInfo from '../data/headers.json';
import '../css/Contact.css';


function Contact() {
  const [contactCarrier, setContactCarrier] = useState('');
  const [whetherEmailSent, setWhetherEmailSent] = useState(false);

  useEffect(() => {headersInfo.forEach(val => {
    if (val.title === 'CONTACT') {
        setContactCarrier(val);
    }
  })});

  return (
    <div className="contact mb-5">
        <Header title={contactCarrier.title} description={contactCarrier.description}/>
          <form className="col-10 p-5 m-5">
              <label className="p-1">Name</label>
              <input className="user-name p-3 mb-5" placeholder="Enter Your Name"/>
              <label className="p-1">Email</label>
              <input className="user-email p-3 mb-5"  placeholder="Enter Your Email"/>
              <label className="p-1">Message</label>
              <textarea className="user-message p-3 mb-5"  placeholder="Enter Your Message"></textarea>
              <div className="button-div col-12">
                  <button className="submit-button" 
                    onClick={
                      () => setWhetherEmailSent(true)
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