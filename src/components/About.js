import React from "react";
import Header from './Header';
import headersInfo from '../data/headers.json';
import '../css/About.css';
let aboutMeCarrier = '';

headersInfo.forEach(val => {
    if (val.title === 'ABOUT ME') {
        aboutMeCarrier = val;
    }
});

function About() {
  return (
    <>
        <Header title={aboutMeCarrier.title} description={aboutMeCarrier.description}/>
        <div className="about-bottom col-12 p-3">
          <div className="about-sub-div row col-11">
            <div className="col-lg-6 col-md-12 p-3">
              <span className="about-title">Get to know me!</span>
              <p>User-Focused <span>Web Developer</span> with over <span>12 years</span> of professional experience. A hard working, conscientious and 
                professional attitude has helped develop a career providing a <span>high level</span> of value to companies through the streamlining of 
                their databases.</p>
              <p>I'm open to <span>job</span> opportunities to contribute, learn and grow. If you have a good role available that matches with my 
                experience and skills then please don't hesitate to <span>contact</span> me.</p>
              <div className="button-section p-5">
                <button className="p-3">CONTACT</button>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 p-3">
              <span className="about-title">My Skills</span>
            </div>
          </div>
        </div>
    </>    
  );
}

export default About;