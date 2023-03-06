import React from "react";
import Header from './Header';
import headersInfo from '../data/headers.json';
import '../css/Contact.css';
let contactCarrier = '';

headersInfo.forEach(val => {
    if (val.title === 'CONTACT') {
        contactCarrier = val;
    }
});

function Contact() {
  return (
    <div className="contact mb-5">
        <Header title={contactCarrier.title} description={contactCarrier.description}/>
          <form className="col-10 p-5">
              <label className="p-1">Name</label>
              <input className="user-name p-3 mb-5" placeholder="Enter Your Name"/>
              <label className="p-1">Email</label>
              <input className="user-email p-3 mb-5"  placeholder="Enter Your Email"/>
              <label className="p-1">Message</label>
              <textarea className="user-message p-3 mb-5"  placeholder="Enter Your Message"></textarea>
              <div className="button-div col-12">
                  <button className="submit-button">SUBMIT</button>
              </div>
          </form>
    </div>    
  );
}

export default Contact;