import React from "react";
import Header from './Header';
import IndProject from "./IndProject";
import headersInfo from '../data/headers.json';
import work from '../data/work.json';
let projectCarrier = '';
let workCarrier = work;

headersInfo.forEach(val => {
    if (val.title === 'PROJECTS') {
        projectCarrier = val;
    }
});



function Projects() {
  return (
    <>
      <Header title={projectCarrier.title} description={projectCarrier.description}/> 
      {workCarrier.map(project => <IndProject project={project}/>)};
    </>    
  );
}

export default Projects;