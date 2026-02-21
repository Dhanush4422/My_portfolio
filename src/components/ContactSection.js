import React from 'react';
import { FaWhatsapp, FaLinkedinIn, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title reveal">
          Get In <span className="text-span">Touch</span>
        </h2>
        <div className="row g-5 align-items-start">
          <div className="col-md-5 reveal">
            <h3 className="contact-heading">Let's Build Something <span className="text-span">Amazing</span></h3>
            <p className="contact-text">
              I'm currently open to new opportunities. Whether you have a project, a job offer, or just want to say hi — my inbox is always open!
            </p>

            <div className="contact-detail">
              <div className="contact-detail-icon"><FaEnvelope /></div>
              <div>
                <div className="contact-detail-label">Email</div>
                <a href="mailto:Dhanush807238@gmail.com" className="contact-detail-value">Dhanush807238@gmail.com</a>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-detail-icon"><FaPhone /></div>
              <div>
                <div className="contact-detail-label">Phone</div>
                <a href="tel:+918220341934" className="contact-detail-value">+91 8220341934</a>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-detail-icon"><FaMapMarkerAlt /></div>
              <div>
                <div className="contact-detail-label">Location</div>
                <span className="contact-detail-value">Porur, Chennai, Tamil Nadu</span>
              </div>
            </div>

            <div className="social-icons">
              <a href="https://wa.me/918220341934" className="icon-circle" target="_blank" rel="noopener noreferrer" title="WhatsApp">
                <FaWhatsapp />
              </a>
              <a href="https://linkedin.com/in/dhanush-d-951698325" className="icon-circle" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <FaLinkedinIn />
              </a>
              <a href="https://github.com/Dhanush4422" className="icon-circle" target="_blank" rel="noopener noreferrer" title="GitHub">
                <FaGithub />
              </a>
            </div>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15545.938813359556!2d80.17062402120302!3d12.980649987819194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52668502390a31%3a0xc2ffb8d4c9d5c411!2sPorur%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1715694380687!5m2!1sen!2sin"
              width="100%" height="220"
              style={{ border: 0 }} allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            />
          </div>

          <div className="col-md-7 reveal reveal-d2">
            <div className="contact-form-wrap">
              <h5 style={{fontFamily:'Syne,sans-serif', fontWeight:700, color:'#fff', marginBottom:'1.5rem', fontSize:'1.1rem'}}>Send a Message</h5>
              <div className="mb-4">
                <label className="form-label">Your Name</label>
                <input type="text" className="form-control" placeholder="Dhanush D" />
              </div>
              <div className="mb-4">
                <label className="form-label">Email Address</label>
                <input type="email" className="form-control" placeholder="you@example.com" />
              </div>
              <div className="mb-4">
                <label className="form-label">Subject</label>
                <input type="text" className="form-control" placeholder="Job Opportunity" />
              </div>
              <div className="mb-4">
                <label className="form-label">Message</label>
                <textarea className="form-control" rows="5" placeholder="Hi Dhanush, I'd love to talk about..."></textarea>
              </div>
              <button type="button" className="btn-submit">Send Message →</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
