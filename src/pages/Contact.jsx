import { useState, useEffect } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import "./Contact.css";

const INFO = {
  address: "Vishwa Bharati Shiksha Sadan, Bihar, India",
  phone: "+91 98765 43210",
  email: "contact@vbsschool.edu.in",
};

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  }

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = "Please enter your name.";
    if (!form.email) e.email = "Please enter your email.";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Enter a valid email.";
    if (!form.message.trim()) e.message = "Type a message.";
    return e;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setStatus("success");
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <section
      className={`modern-contact-section${animate ? " smooth-landing" : ""}`}
    >
      <div className="modern-contact-container">
        <div className="contact-header">
          <h2>
            Contact <span>VBSS</span>
          </h2>
          <p>
            We'd love to hear from you. Reach out via the form or info below.
          </p>
        </div>
        <div className="modern-contact-main">
          <form
            className="contact-form-modern"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className={`form-group ${form.name ? "filled" : ""}`}>
              <input
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                required
                autoComplete="name"
              />
              <label>Name</label>
              {errors.name && <span className="form-error">{errors.name}</span>}
            </div>
            <div className={`form-group ${form.email ? "filled" : ""}`}>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                autoComplete="email"
              />
              <label>Email</label>
              {errors.email && (
                <span className="form-error">{errors.email}</span>
              )}
            </div>
            <div className={`form-group ${form.message ? "filled" : ""}`}>
              <textarea
                name="message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                required
              />
              <label>Message</label>
              {errors.message && (
                <span className="form-error">{errors.message}</span>
              )}
            </div>
            <button className="send-btn-modern" type="submit">
              Send Message
            </button>
            {status === "success" && (
              <div className="form-success">
                Thanks! We'll get back to you soon.
              </div>
            )}
          </form>
          <div className="contact-info-modern">
            <div className="info-block">
              <FaMapMarkerAlt className="info-icon" />
              <span>{INFO.address}</span>
            </div>
            <div className="info-block">
              <FaPhoneAlt className="info-icon" />
              <a href={`tel:${INFO.phone.replace(/ /g, "")}`}>{INFO.phone}</a>
            </div>
            <div className="info-block">
              <FaEnvelope className="info-icon" />
              <a href={`mailto:${INFO.email}`}>{INFO.email}</a>
            </div>
            <div className="modern-map">
              <iframe
                title="School Location"
                src="https://www.google.com/maps?q=Vishwa+Bharati+Shiksha+Sadan,+Bihar,+India&output=embed"
                width="100%"
                height="180"
                style={{
                  border: "0",
                  borderRadius: "11px",
                  marginTop: "0.5rem",
                  display: "block",
                }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
