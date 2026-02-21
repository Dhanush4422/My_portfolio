import React from 'react';

const SkillsSection = () => {
  const skills = [
    { src: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png", alt: "React", name: "React.js" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", alt: "Next.js", name: "Next.js", dark: true },
    { src: "https://cdn-icons-png.flaticon.com/512/3035/3035017.png", alt: "Redux", name: "Redux" },
    { src: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png", alt: "JavaScript", name: "JavaScript" },
    { src: "https://cdn-icons-png.flaticon.com/512/5968/5968394.png", alt: "TypeScript", name: "TypeScript" },
    { src: "https://cdn-icons-png.flaticon.com/512/732/732212.png", alt: "HTML5", name: "HTML5" },
    { src: "https://cdn-icons-png.flaticon.com/512/732/732190.png", alt: "CSS3", name: "CSS3" },
    { src: "https://cdn-icons-png.flaticon.com/512/5968/5968672.png", alt: "Bootstrap", name: "Bootstrap" },
    { src: "https://cdn-icons-png.flaticon.com/512/226/226777.png", alt: "Java", name: "Java" },
    { src: "https://cdn-icons-png.flaticon.com/512/2613/2613134.png", alt: "SQL", name: "SQL" },
    { src: "https://cdn-icons-png.flaticon.com/512/5968/5968322.png", alt: "Node.js", name: "Node.js" }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title reveal">
          My <span className="text-span">Skills</span>
        </h2>
        <div className="row justify-content-center g-4">
          {skills.map((skill, index) => (
            <div key={index} className={`col-6 col-md-2 reveal reveal-d${(index % 5) + 1}`}>
              <div className="skill-card" style={skill.dark ? {background: '#fff'} : {}}>
                <img src={skill.src} alt={skill.alt} />
              </div>
              <p className="skill-name text-center mt-2">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
