import React from 'react';
import { FaWhatsapp, FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <section id="contact" className="contact-section d-flex align-items-center min-vh-100">
      <div className="container">
        <h1 style={{ marginTop: '2%' }} className="display-4 fw-bold text-center mb-5">
          <span className="text-span">Contact</span> Me
        </h1>
        <div className="row g-5 align-items-start">
          <div className="col-md-6">
            <h2 className="fw-bold">LET’S TALK</h2>
            <h6>If you have any talk with me kindly feel free share with me.</h6>
            <div className="mt-4 contact-info">
              <p>
                <strong>Address:</strong>
                <br />
                Porur, Chennai
              </p>
              <p>
                <strong>Email:</strong>
                <br />
                <a href="mailto:Dhanush807238@gmail.com">Dhanush807238@gmail.com</a>
              </p>
              <p>
                <strong>Number:</strong>
                <br />
                <a href="tel:+918220341934">+91 8220341934</a>
              </p>
            </div>
            <div className="mt-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15545.938813359556!2d80.17062402120302!3d12.980649987819194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52668502390a31%3a0xc2ffb8d4c9d5c411!2sPorur%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1715694380687!5m2!1sen!2sin"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded shadow-sm"
                title="Google Map"
              />
            </div>
          </div>
          <div className="col-md-6">
            <form className="contact-form">
              <div className="mb-4">
                <label htmlFor="name" className="form-label mt-3">
                  Name
                </label>
                <input type="text" className="form-control mt-2" id="name" required />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input type="email" className="form-control mt-2" id="email" required />
              </div>
              <div className="mb-4">
                <label htmlFor="desc" className="form-label">
                  Message
                </label>
                <textarea className="form-control mt-2 mb-4" id="desc" rows="4"></textarea>
              </div>
              <button type="submit" className="btn btn-success">
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="row text-center mt-5">
          <div className="col-md-6 mb-3">
            <div className="p-4 bg-white rounded shadow-sm">
              <h6 className="text-uppercase mb-3">Email Me</h6>
              <a href="mailto:Dhanush807238@gmail.com" className="text-decoration-none">Dhanush807238@gmail.com</a>
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <div className="p-4 bg-white rounded shadow-sm">
              <h6 className="text-uppercase">Find Me</h6>
              <div className="d-flex justify-content-center gap-3 mt-2">
                <a href="https://wa.me/918220341934" className="icon-circle" target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp />
                </a>
                {/* <a href="https://www.facebook.com/profile.php?id=100085871239928" className="icon-circle" target="_blank" rel="noopener noreferrer">
                  <FaFacebookF />
                </a> */}
                <a href="https://linkedin.com/in/dhanush-d-951698325" className="icon-circle" target="_blank" rel="noopener noreferrer">
                  <FaLinkedinIn />
                </a>
                <a href="https://github.com/Dhanush4422" className="icon-circle" target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;