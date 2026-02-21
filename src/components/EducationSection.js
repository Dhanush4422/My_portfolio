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
      school: 'Bharathidasan Higher Secondary School (Government)',
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
      description: 'Completed comprehensive Full Stack course covering HTML, CSS, JavaScript, Java, and SQL.',
    },
    {
      title: 'Frontend Developer — Fayn Global',
      issuer: 'Fayn Global (1 Year Work Experience)',
      date: '2024 – 2025',
      icon: 'fas fa-briefcase',
      description: 'Built and maintained responsive web apps using Next.js and React.js. Integrated REST APIs and managed state with Redux Toolkit. Implemented type-safe components using TypeScript. Designed UIs with HTML, CSS, and Bootstrap. Collaborated with backend developers for seamless API communication.',
    },
  ];

  return (
    <section id="education" className="education-section">
      <div className="container">
        <h2 className="section-title reveal">
          My <span className="text-span">Education</span>
        </h2>
        <div className="timeline">
          {education.map((item, index) => (
            <div className="timeline-item reveal" key={`edu-${index}`}>
              <div className="timeline-icon">
                <i className={item.icon}></i>
              </div>
              <div className="timeline-content">
                <h4>{item.degree}</h4>
                <p className="text-muted">{item.school} · {item.period}</p>
                <p>{item.details}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="section-title reveal mt-5">
          Experience & <span className="text-span">Certifications</span>
        </h2>
        <div className="timeline">
          {certificates.map((cert, index) => (
            <div className="timeline-item reveal" key={`cert-${index}`}>
              <div className="timeline-icon">
                <i className={cert.icon}></i>
              </div>
              <div className="timeline-content">
                <h4>{cert.title}</h4>
                <p className="text-muted">{cert.issuer} · {cert.date}</p>
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
