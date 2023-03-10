import React from "react";
import { Link } from 'react-router-dom';
import '../css/Dropdown.css';


function Dropdown(dropdownOn, setDropdownOn) {
  return (
    <>
        <div class="col-12 dropdown-main">
            <Link to="/"><div class="drop-down p-2" >HOME</div></Link>
            <Link to="/About"><div class="select-option drop-down p-2" data-name="about">ABOUT</div></Link>
            <Link to="/Projects"><div class="select-option drop-down p-2" data-name="work">WORK</div></Link>
            <Link to="/Contact"><div class="select-option drop-down p-2" data-name="contact">CONTACT</div></Link>
        </div>
    </>    
  );
}

export default Dropdown;