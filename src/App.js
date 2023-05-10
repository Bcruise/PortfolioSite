import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import {HashRouter as  Router, Routes, Route} from 'react-router-dom';
import { useState, useEffect } from 'react';
import './css/App.css';
import emailjs from '@emailjs/browser';

function App() {

  const [letBenKnow, setEmailTemplate] = useState({name: 'Ben', email: '', message: 'Portfolio page viewed.'})

  useEffect(() => {
      emailjs.send('service_sm9sfhi', 'template_o1do94o', letBenKnow, '-29jWKGdLoYcM0kno')
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
      }, function(error) {
        console.log('FAILED...', error);
      });
  })

  return (
  <Router>
    <>
      <Navbar />
        <Routes> 
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />}/>
            <Route path="/Projects" element={<Projects />}/>
            <Route path="/Contact" element={<Contact />}/>
        </Routes>
      <Footer />
    </>
  </Router>
  );
}

export default App;
