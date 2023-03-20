import React from "react";
import { Link } from 'react-router-dom';
import '../css/Dropdown.css';


function Dropdown({setDropdownOn}) {
  return (
    <>
        <div class="col-12 dropdown-main">
            <Link to="/"><div class="drop-down p-2" onClick={() => setDropdownOn(false)}>HOME</div></Link>
            <Link to="/About"><div class="drop-down p-2" onClick={() => setDropdownOn(false)}>ABOUT</div></Link>
            <Link to="/Projects"><div class="drop-down p-2" onClick={() => setDropdownOn(false)}>WORK</div></Link>
            <Link to="/Contact"><div class="drop-down p-2" onClick={() => setDropdownOn(false)}>CONTACT</div></Link>
        </div>
    </>    
  );
}

export default Dropdown;