import React from "react";
import { Link } from 'react-router-dom';
import '../css/Home.css';

function Home() {
  return (
    <div className="home">
        <span className="name-title">BEN CRUISE</span>
        <div className="m-3 hr"></div>
        <span className="desc-title">WEB DEVELOPER</span>
        <p className="desc-p">User-Focused Designer with advanced skills in React, Javascript, HTML and CSS, amongst other languages and frameworks.</p>
        <div className="button-div">
          <Link to="/Projects">
            <button className="home-button p-3">
              PROJECTS
            </button>
          </Link>
        </div>      
    </div>    
  );
}

export default Home;