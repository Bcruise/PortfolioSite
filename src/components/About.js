import React from "react";
import Header from './Header';
import headersInfo from '../data/headers.json';
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
    </>    
  );
}

export default About;