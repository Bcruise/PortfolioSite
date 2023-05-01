import React, { useState, useEffect } from "react";
import Header from './Header';
import IndProject from "./IndProject";
import headersInfo from '../data/headers.json';
import work from '../data/work.json';
import '../css/Projects.css';

let projectCarrier = '';
let workCarrier = work;

headersInfo.forEach(val => {
    if (val.title === 'PROJECTS') {
        projectCarrier = val;
    }
});


function Projects() {
  
  const techStackArray = [...new Set(work.map(obj => obj.techStack).flat())];
  
  return (
    <>
      <Header title={projectCarrier.title} description={projectCarrier.description}/> 
        <div className="select-div col-12 p-2">
          <select className="col-11">
            {techStackArray.map(tech => <>
              <option>{tech}</option>
            </>)}
          </select>
        </div>
      {workCarrier.map(project => <IndProject project={project}/>)};
    </>    
  );
}

export default Projects;