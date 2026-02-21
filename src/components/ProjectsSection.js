import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: 'MedBuddy',
      badge: 'Featured',
      description: 'A full-stack medication reminder app that helps patients track medications and automatically emails a caretaker when a dose is missed. Built with Next.js 14, TypeScript, Redux Toolkit, MySQL, Node.js, and Node-cron.',
      img: `${process.env.PUBLIC_URL}/assets/images/medbuddy.jpeg`,
      tags: ['Next.js 14', 'TypeScript', 'Redux', 'Node.js', 'MySQL', 'Nodemailer'],
      github: 'https://github.com/Dhanush4422/medbuddy',
      live: 'https://medbuddy-git-main-dhanush4422s-projects.vercel.app/',
    },
    {
      id: 2,
      title: 'Stock Market Website',
      badge: null,
      description: 'A responsive frontend stock market app built with React.js. Integrates real-time data from a third-party API and uses Redux Toolkit for state management. Styled with HTML, CSS, and Bootstrap.',
      img: `${process.env.PUBLIC_URL}/assets/images/stcokimage.webp`,
      tags: ['React.js', 'Redux Toolkit', 'REST API', 'Bootstrap'],
      github: 'https://github.com/Dhanush4422',
      live: null,
    },
  ];

  return (
    <section id="projects" className="project-section">
      <div className="container">
        <h2 className="section-title reveal">
          My <span className="text-span">Projects</span>
        </h2>
        <div className="row justify-content-center g-4">
          {projects.map((project, idx) => (
            <div key={project.id} className={`col-lg-5 col-md-6 reveal reveal-d${idx + 1}`}>
              <div className="project-card">
                {project.badge && <span className="project-badge">{project.badge}</span>}
                <div className="project-img-wrap">
                  <img src={project.img} alt={project.title} />
                </div>
                <div className="project-body">
                  <h5 className="project-title">{project.title}</h5>
                  <p className="project-desc">{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="project-tag">{tag}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href={project.github} className="btn-project btn-project-ghost" target="_blank" rel="noopener noreferrer">
                      <FaGithub /> GitHub
                    </a>
                    {project.live && (
                      <a href={project.live} className="btn-project btn-project-primary" target="_blank" rel="noopener noreferrer">
                        <FaExternalLinkAlt /> Live Demo
                      </a>
                    )}
                  </div>
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
