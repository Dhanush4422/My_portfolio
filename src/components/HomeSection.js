import React from 'react';

const HomeSection = () => {
  return (
    <section id="home" className="home-section home d-flex align-items-center min-vh-100">
      <div className="container">
        <div className="row align-items-center justify-content-between">

          <div className="col-md-6 text-start">
            <h5 className="text-muted">Hey, I'm  Dhanush 👋🏻</h5>
            <h1 className="fw-bold">
              <span className="home-front">Front</span><span className="home-end">end</span><br />
              <span className="home-end">Developer</span>
            </h1>
            <p className="text-secondary fs-5 mb-4">
             Frontend Developer with 6 months of hands-on experience in building web applications using React.js, Next.js, Redux Toolkit, and TypeScript. Skilled in API integration, state management, and creating responsive, user-friendly interfaces with HTML, CSS, and Bootstrap. Knowledgeable in SQL and Java, with strong problem-solving and collaboration skills.
            </p>
            <div className="d-flex gap-3">
              <a href="#contact" className="btn btn-dark shadow-sm">Get In Touch</a>
              <a href="#projects" className="btn btn-light shadow-sm border">Browse Projects</a>
            </div>
          </div>

          <div className="col-md-5 text-center">
            <div className="profile-img-wrapper mx-auto">
              <img src="assets/images/dhanush.jpg.png" alt="Profile" className="profile-img img-fluid" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HomeSection;
