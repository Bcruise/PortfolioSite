import React, { useState } from "react";
import Header from './Header';
import IndProject from "./IndProject";
import headersInfo from '../data/headers.json';
import work from '../data/work.json';
import '../css/Projects.css';
let projectCarrier = '';

headersInfo.forEach(val => {
    if (val.title === 'PROJECTS') {
        projectCarrier = val;
    }
});

function Projects() {

  const [workCarrier, setWorkCarrier] = useState(work);
  const techStackArray = ['All', ...new Set(work.map(obj => obj.techStack).flat())];
  
  const ChangeFilter = (tech) => {
    if (tech === 'All') {
     setWorkCarrier(work); 
    } else {
      let pushObject = [];
      for (let i = 0; i < work.length; i++) {
        if (work[i].techStack.includes(tech)) {
          ///// finish logic
          pushObject.push(work[i]);
          setWorkCarrier(pushObject);
        }
      }
    }
  }
  
  return (
    <>
      <Header title={projectCarrier.title} description={projectCarrier.description}/> 
        <div className="select-div col-12 p-2">
          <select className="form-select-lg col-11" onChange={(e) => ChangeFilter(e.target.value)}>
            {techStackArray.map(tech => <>
              <option value={tech}>{tech}</option>
            </>)}
          </select>
        </div>
      {workCarrier.map(project => <IndProject project={project}/>)};
    </>    
  );
}

export default Projects;