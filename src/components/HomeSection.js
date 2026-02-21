import React from 'react';

const HomeSection = () => {
  return (
    <section id="home" className="home-section">
      <div className="container">
        <div className="row align-items-center justify-content-between g-5">
          <div className="col-lg-6 col-md-7">
            <p className="home-greeting">Hello, World!</p>
            <h1 className="home-title">
              I'm <span className="accent">Dhanush</span><br />
              <span className="outline">Frontend</span><br />
              Developer
            </h1>
            <p className="home-desc">
              Frontend Developer with 1 year of hands-on experience building fast, responsive web applications using React.js, Next.js, Redux Toolkit, and TypeScript. Passionate about clean UI and seamless user experiences.
            </p>
            <div className="home-btns">
              <a href="#contact" className="btn-primary-custom">Get In Touch</a>
              <a href="#projects" className="btn-outline-custom">View Projects</a>
            </div>
            <div className="stats-bar">
              <div className="stat-item">
                <div className="stat-num">1<span>+</span></div>
                <div className="stat-label">Year Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-num">5<span>+</span></div>
                <div className="stat-label">Projects Built</div>
              </div>
              <div className="stat-item">
                <div className="stat-num">11<span>+</span></div>
                <div className="stat-label">Technologies</div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 text-center">
            <div className="profile-img-wrapper mx-auto">
              <img src={`${process.env.PUBLIC_URL}/assets/images/dhanush.jpg.png`} alt="Dhanush" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
