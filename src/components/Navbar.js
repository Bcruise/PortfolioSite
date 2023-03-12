import React, {useState} from "react";
import $ from 'jquery';
import { Link } from 'react-router-dom';
import Dropdown from '../components/Dropdown';
import '../css/Navbar.css';


function Navbar() {
  const [toggledLettersBoolean, setToggledLettersBoolean] =useState(true);
  const [dropdownOn, setDropdownOn] = useState(false);
  return (
    <>
      <nav>
          <div class="logo-and-name-div" onClick={() => { 
                  if (toggledLettersBoolean) {
                    $('.toggledLetters').css('display','unset');
                    setToggledLettersBoolean(false);
                  } else {
                    $('.toggledLetters').css('display','none');
                    setToggledLettersBoolean(true);
                  };                  
                }}>
                <span class="logo-and-name" >
                <span className="red">B</span>
                <span className="toggledLetters">EN </span>
                <span className="red">C</span>
                RUISE | WEB DEVELOPER</span>
          </div>
          <div class="links-div col-6">
              <Link to="/"><div class="select-option">HOME</div></Link>
              <Link to="/About"><div class="select-option" onClick={() => setDropdownOn(false)}>ABOUT</div></Link>
              <Link to="/Projects"><div class="select-option" onClick={() => setDropdownOn(false)}>WORK</div></Link>
              <Link to="/Contact"><div class="select-option" onClick={() => setDropdownOn(false)}>CONTACT</div></Link>
          </div>
          {!dropdownOn && <i class="fa fa-bars fa-lg"
            onClick={() => {
              setDropdownOn(true);
            }}>
          </i>}
          {dropdownOn && <i class="fa fa-times fa-lg"
            onClick={() => {
              setDropdownOn(false);
            }}>
          </i>}
      </nav>
      {dropdownOn && <Dropdown setDropdownOn={setDropdownOn}/>}
    </>    
  );
}

export default Navbar;