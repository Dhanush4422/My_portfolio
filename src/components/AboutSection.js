import React from 'react';
import { FaUser, FaEnvelope, FaMapMarkerAlt, FaCalendarAlt, FaStar, FaBriefcase, FaLanguage, FaLaptopCode } from 'react-icons/fa';

const AboutSection = () => {
const personalInfo = [
{ title: 'Name', value: 'Dhanush', icon: <FaUser /> },
{ title: 'Age', value: '21', icon: <FaCalendarAlt /> },
{ title: 'Email', value: 'Dhanush807238@gmail.com', icon: <FaEnvelope /> },
{ title: 'Address', value: 'Porur, Chennai', icon: <FaMapMarkerAlt /> },
];

const professionalInfo = [
{ title: 'Skills', value: 'React.js, Next.js, Redux Toolkit, JavaScript (ES6+), TypeScript, HTML5, CSS3, Bootstrap, Java (basic), SQL', icon: <FaLaptopCode /> },
{ title: 'Experience', value: '5 months', icon: <FaBriefcase /> },
{ title: 'Languages', value: 'English, Tamil', icon: <FaLanguage /> },
{ title: 'Desired Job Type', value: 'Full-Time', icon: <FaStar /> },
];

return (
<section id="about" className="py-5 about-section">
<div className="container">
<div className="row justify-content-center text-center mb-4">
<div className="col-lg-8">
<h1 className="display-4 fw-bold text-center mb-5">
<span className="text-span">About</span> Me
</h1>
<p className="lead fade-in delay-1">
I'm a motivated student with a passion for learning and growth, seeking a full-time opportunity to kickstart my career.
</p>
</div>
</div>

<div className="row align-items-center justify-content-center g-4">
<div className="col-lg-5 col-md-6 mb-4">
<ul className="custom-list">
{personalInfo.map((item, index) => (
<li key={index}>
<div className="icon-container">{item.icon}</div>
<div className="content">
<span className="title">{item.title}:</span> {item.value}
</div>
</li>
))}
</ul>
</div>

<div className="col-lg-5 col-md-6 mb-4">
<ul className="custom-list">
{professionalInfo.map((item, index) => (
<li key={index}>
<div className="icon-container">{item.icon}</div>
<div className="content">
<span className="title">{item.title}:</span> {item.value}
</div>
</li>
))}
</ul>
</div>
</div>
</div>
</section>
);
};

export default AboutSection;