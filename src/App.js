import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import MobileToggleButton from './components/MobileToggleButton';
import MobileMenu from './components/MobileMenu';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import EducationSection from './components/EducationSection';
import HomeSection from './components/HomeSection';

const App = () => {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };


  useEffect(() => {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    const handleClick = (e) => {
      e.preventDefault();
      const targetId = e.currentTarget.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({ top: targetElement.offsetTop - 70, behavior: 'smooth' });
      }
    };
    navLinks.forEach(link => link.addEventListener('click', handleClick));
    return () => navLinks.forEach(link => link.removeEventListener('click', handleClick));
  }, []);

  return (
    <>
      <Navbar />
      <MobileToggleButton onClick={toggleMobileMenu} />
      {mobileMenuVisible && <MobileMenu />}
      <HomeSection />
      <AboutSection />
      <EducationSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
};



export default App;
