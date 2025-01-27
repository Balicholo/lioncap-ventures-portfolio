import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState(null);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/;
    return phoneRegex.test(phone);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setNotification(null);

    // Validate email and phone
    if (!validateEmail(formData.email)) {
      setNotification({ type: "error", message: "Invalid email address. Please enter a valid email." });
      setLoading(false);
      return;
    }

    if (!validatePhone(formData.phone)) {
      setNotification({ type: "error", message: "Invalid phone number. Please enter a valid number." });
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post("https://formspree.io/f/mbldjane", formData);
      if (response.status === 200) {
        setNotification({ type: "success", message: "Thank you for reaching out! We will get back to you soon." });
        setFormData({ fullname: "", email: "", phone: "", message: "" });
      } else {
        setNotification({ type: "error", message: "Failed to submit the form. Please try again." });
      }
    } catch (error) {
      setNotification({ type: "error", message: "An error occurred. Please try again later." });
    } finally {
      setLoading(false);
    }

    setTimeout(() => {
      setNotification(null);
    }, 5000);
  };

  return (
    <div className="contact-container">
      <div className="contact-wrapper">
        <div className="left-container">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you! Feel free to get in touch with us.</p>
          <h3>Address</h3>
          <p>
            <a href="#map">5 Benmore Road, Sandton, SA</a> | <a href="https://www.google.com/maps/place/Harare/@-17.8248101,30.9595887,11.45z/data=!4m15!1m8!3m7!1s0x1931a4e706b17161:0xa1c0385fc5cbbfee!2sZimbabwe!3b1!8m2!3d-19.015438!4d29.154857!16zL20vMDg4cTQ!3m5!1s0x1931a4ee1bdddb35:0xa5143b9be5134f2f!8m2!3d-17.8262928!4d31.0503723!16zL20vMGZuZ2Y?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D">5031 Crowhill Views, Harare, ZW</a>
          </p>
          <h3>Phone</h3>
          <p>
            <a href="tel:+2637724514">+263 772 4514</a> | <a href="tel:+27646394007">+27 646 39 4007</a>
          </p>
          <h3>Email</h3>
          <p>
            <a href="mailto:dev@lioncapventures.com">dev@lioncapventures.com</a>
          </p>
        </div>
        <div className="right-container">
          <div className="contact-form">
            <h1>Contact Form</h1>
            {notification && (
              <div className={`notification ${notification.type}`}>
                {notification.message}
              </div>
            )}
            <form onSubmit={handleSubmit} noValidate>
              <div className="text-fields">
                <input
                  type="text"
                  name="fullname"
                  value={formData.fullname}
                  onChange={handleChange}
                  placeholder="Full Name"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  required
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <div className="submit--btn">
                <button type="submit" disabled={loading}>
                  {loading ? "Submitting..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="footer contact-footer">
        <div className="socials">
          <a href="#facebook">
            <i className="ri-facebook-fill"></i>
          </a>
          <a href="#whatsapp">
            <i className="ri-whatsapp-fill"></i>
          </a>
          <a href="#linkedin">
            <i className="ri-linkedin-box-fill"></i>
          </a>
          <a href="#instagram">
            <i className="ri-instagram-line"></i>
          </a>
        </div>
        <div className="copyright-text">
          <p>
            <i className="ri-copyright-line"></i> Lioncap Ventures 2025
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;