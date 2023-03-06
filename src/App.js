import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import {HashRouter as  Router, Routes, Route} from 'react-router-dom';
import './css/App.css';


function App() {
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
