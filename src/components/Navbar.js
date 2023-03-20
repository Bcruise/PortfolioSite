import React from "react";
import $ from 'jquery';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';


function Navbar() {
  let toggledLettersBoolean = true;
  return (
    <>
      <nav>
          <div class="logo-and-name-div" onClick={() => { 
                  if (toggledLettersBoolean) {
                    $('.toggledLetters').css('display','unset');
                    toggledLettersBoolean = false;
                  } else {
                    $('.toggledLetters').css('display','none');
                    toggledLettersBoolean = true;
                  };                  
                }}>
                <span class="logo-and-name" >
                <span className="red">B</span>
                <span className="toggledLetters">EN </span>
                <span className="red">C</span>
                RUISE | WEB DEVELOPER</span>
          </div>
          <div class="links-div col-6">
              <Link to="/"><div class="select-option" onClick={() => {}}>HOME</div></Link>
              <Link to="/About"><div class="select-option" >ABOUT</div></Link>
              <Link to="/Projects"><div class="select-option" >WORK</div></Link>
              <Link to="/Contact"><div class="select-option" >CONTACT</div></Link>
          </div>
          <i class="fa fa-bars fa-lg" id="toggle-fa"></i>
      </nav>
      {dropdownOn && <Dropdown dropdownOn={dropdownOn} setDropdownOn={setDropdownOn}/>}
    </>    
  );
}

export default Navbar;