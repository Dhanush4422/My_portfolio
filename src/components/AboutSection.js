import React from 'react';
import { FaUser, FaEnvelope, FaMapMarkerAlt, FaCalendarAlt, FaStar, FaBriefcase, FaLanguage, FaLaptopCode } from 'react-icons/fa';

const AboutSection = () => {
  const personalInfo = [
    { title: 'Name', value: 'Dhanush D', icon: <FaUser /> },
    { title: 'Age', value: '21 Years', icon: <FaCalendarAlt /> },
    { title: 'Email', value: 'Dhanush807238@gmail.com', icon: <FaEnvelope /> },
    { title: 'Location', value: 'Porur, Chennai', icon: <FaMapMarkerAlt /> },
  ];

  const professionalInfo = [
    { title: 'Experience', value: '1 Year (Frontend Developer at Fayn Global)', icon: <FaBriefcase /> },
    { title: 'Skills', value: 'React.js, Next.js, Redux, TypeScript, HTML5, CSS3, Bootstrap', icon: <FaLaptopCode /> },
    { title: 'Languages', value: 'English, Tamil', icon: <FaLanguage /> },
    { title: 'Job Type', value: 'Full-Time', icon: <FaStar /> },
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title reveal">
          About <span className="text-span">Me</span>
        </h2>
        <p className="about-lead reveal">
          I'm a passionate frontend developer who loves building clean, fast, and beautiful web experiences. 
          I've worked professionally at Fayn Global building production-grade React and Next.js applications, 
          and I'm always learning and growing.
        </p>
        <div className="row justify-content-center g-4">
          <div className="col-lg-5 col-md-6">
            {personalInfo.map((item, index) => (
              <div className={`info-card reveal reveal-d${index+1}`} key={index}>
                <div className="info-icon">{item.icon}</div>
                <div>
                  <div className="info-label">{item.title}</div>
                  <div className="info-value">{item.value}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="col-lg-5 col-md-6">
            {professionalInfo.map((item, index) => (
              <div className={`info-card reveal reveal-d${index+1}`} key={index}>
                <div className="info-icon">{item.icon}</div>
                <div>
                  <div className="info-label">{item.title}</div>
                  <div className="info-value">{item.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
