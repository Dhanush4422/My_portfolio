import React from 'react';

const EducationSection = () => {
  const education = [
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      school: 'Apollo Arts and Science College',
      period: 'Sep 2021 – May 2024',
      details: 'Percentage: 65%',
      icon: 'fas fa-graduation-cap',
    },
    {
      degree: '12th Standard',
      school: 'Bharathidasan Higher Secondary School (Government School)',
      period: 'Completed: 2021',
      details: 'Percentage: 79%',
      icon: 'fas fa-school',
    },
    {
      degree: '10th Standard',
      school: 'Don Bosco Higher Secondary School, Sagayathottam',
      period: 'Completed: 2019',
      details: 'Percentage: 62%',
      icon: 'fas fa-school',
    },
  ];

  const certificates = [
    {
      title: 'Full Stack Web Development',
      issuer: 'QSpiders Training Institute',
      date: '2024',
      icon: 'fas fa-certificate',
      description: 'Completed Full Stack course covering in HTML, CSS, JavaScript, Java, and SQL',
    },
   
    
     {
      title: 'Frontend Developer | Fayn Global |',
      issuer: 'Fayn Global ',
      date: '2025',
      icon: 'fas fa-certificate',
      description: ` - Built and maintained responsive web applications using Next.js and React.js.
                     - Integrated REST APIs and managed state efficiently with Redux Toolkit.
                     -Implemented type-safe reusable components using TypeScript. Designed and styled user interfaces with HTML, CSS, and Bootstrap. 
                     -Collaborated with backend developers for seamless API communication`

    },
    
  ];

  return (
    <section id="education" className="education-section py-5">
      <div className="container">
        <h1 className="display-4 fw-bold text-center mb-3">
          <span className="text-span">My</span> Education
        </h1>
        <div className="timeline">
          {education.map((item, index) => (
            <div className="timeline-item" key={`edu-${index}`}>
              <div className="timeline-icon">
                <i className={item.icon}></i>
              </div>
              <div className="timeline-content">
                <h4>{item.degree}</h4>
                <p className="text-muted">{item.school} | {item.period}</p>
                <p>{item.details}</p>
              </div>
            </div>
          ))}
        </div>

        <h1 className="display-4 fw-bold text-center my-5">
          <span className="text-span">My</span> Certificates
        </h1>
        <div className="timeline">
          {certificates.map((cert, index) => (
            <div className="timeline-item" key={`cert-${index}`}>
              <div className="timeline-icon">
                <i className={cert.icon}></i>
              </div>
              <div className="timeline-content">
                <h4>{cert.title}</h4>
                <p className="text-muted">{cert.issuer} | {cert.date}</p>
                <p>{cert.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
