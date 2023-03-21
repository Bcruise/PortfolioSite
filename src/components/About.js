import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import headersInfo from '../data/headers.json';
import '../css/About.css';
import skills from '../data/skills.json';
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
        <div className="about-bottom col-12 pt-3">
          <div className="about-sub-div row col-11">
            <div className="col-lg-6 col-md-12 p-3">
              <span className="about-title">Get to know me!</span>
              <p className="pt-4">User-Focused <span className="bold">Web Developer</span> with over <span className="bold">12 years</span> of professional experience. A hard working, conscientious and 
                professional attitude has helped develop a career providing a <span className="bold">high level</span> of value to companies through the streamlining of 
                their databases.</p>
              <p>I'm open to <span className="bold">job</span> opportunities to contribute, learn and grow. If you have a good role available that matches with my 
                experience and skills then please don't hesitate to <span className="bold">contact</span> me.</p>
              <div className="button-section p-5">
                <Link to="/Contact">
                  <button className="p-3">
                    CONTACT
                  </button>
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 p-3">
              <span className="about-title">My Skills</span>
              <div className="skills-container pt-4 row col-12">
                {skills.map(item => 
                  <div className="ind-skill-container row">
                    <span>{item}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
    </>    
  );
}

export default About;