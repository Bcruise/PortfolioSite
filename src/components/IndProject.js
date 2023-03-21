import React from 'react';
import '../css/IndProject.css';
import PlanMyDinner from '../images/PlanMyDinnerPicture.png';
import ReadMe from '../images/ReadMe.png';
import Calendar from '../images/Calendar.png';


function IndProject({project}) {
    
    // function that produces the image based on the title of the project
    function Image() {
    if (project.title == 'Plan My Dinner') {
            return <img src={PlanMyDinner} alt={project.title}></img>
        } else if (project.title == 'ReadMe Generator') {
            return <img src={ReadMe} alt={project.title}></img>
        } else if (project.title == 'Calendar App') {
            return <img src={Calendar} alt={project.title}></img>
        }
    }

        return (<div className="ind-project">
                    <div className="ind-sub-div col-11 my-3 row">
                        <div className="col-lg-6 col-md-12 image-side py-3">
                            
                          {Image()}  
                            
                        </div>
                        <div className="col-lg-6 col-md-12 details-side">
                            <span className="project-details-title">{project.title}</span>
                            <div className="project-details">
                                <p className="col-12">{project.description}</p>
                            </div>
                            <div class="buttons-div">
                                <a class="col-6" href={project.gitHubPagesURL}>
                                    <button class="case-study-button p-2">Case Study</button>
                                </a>
                                <a class="col-6" href={project.gitHubRepoURL}>
                                    <button class="gitHub-repo-button p-2">GitHub Repo</button>
                                </a>
                            </div>
                        </div>
                    </div>

                <hr className="col-11"></hr>
            </div>
        );
}

export default IndProject;