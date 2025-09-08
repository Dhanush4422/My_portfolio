import React from 'react';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: 'Stock Market Website',
      description: 'A responsive frontend-only stock market website built with React.js. It integrates real-time data from a third-party API and uses Redux Toolkit for state management. The UI is designed with HTML, CSS, and Bootstrap.',
      img: 'assets/images/stcokimage.webp', 
      alt: 'Stock Market Website Project',
      github: 'https://github.com/Dhanush4422'
    },
   
  ];

  return (
    <section id="projects" className="project-section py-5">
      <div className="container">
        <h1 className="display-4 fw-bold text-center mb-5">
          <span className="text-span">My </span> Projects
        </h1>
        <div className="row justify-content-center">
          {projects.map((project) => (
            <div key={project.id} className="col-md-4 mb-4">
              <div className="project-card">
                <img src={project.img} alt={project.alt} />
                <div className="overlay">
                  <h5>{project.title}</h5>
                  <p>{project.description}</p>
                  {project.github && (
                    <a href={project.github} className="btn btn-outline-light mt-3" target="_blank" rel="noopener noreferrer">
                      View on GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;