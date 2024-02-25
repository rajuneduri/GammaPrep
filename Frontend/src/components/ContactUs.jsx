import React from 'react';
import "../Stylesheet/Contactus.css";
import Navbar from './Navbar';

const ContactUs = () => {
  return (
    <div>
<Navbar/>
    <div className="contact-container">
      <h1>Contact Us</h1>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Your name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Your email" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" placeholder="Your message" rows="4"></textarea>
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
    </div>
  );
}

export default ContactUs;
