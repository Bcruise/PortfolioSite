import React from 'react';
import '../css/IndProject.css';

// import all images here

function IndProject({project}) {
    console.log(project);
        return (<div className="ind-project">
                    <div className="ind-sub-div col-11 my-3 row">
                        <div className="col-lg-6 col-md-12 image-side">
                            <img alt={project.title}></img>
                        </div>
                        <div className="col-lg-6 col-md-12 p-5 details-side">
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