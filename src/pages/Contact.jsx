import { useState } from "react";
import { useNavigate } from "react-router";

function Contact() {
  const navigate = useNavigate();

  // Stores the values entered into the contact form.
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: ""
  });

  // Updates the appropriate property whenever a form field changes.
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value
    }));
  };

  // Processes the form and redirects the visitor to the Home page.
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Contact Form Submission:", formData);

    alert(
      `Thank you, ${formData.firstName}! Your message has been received.`
    );

    navigate("/");
  };

  return (
    <section className="page-section">

      <div className="section-heading">
        <p className="eyebrow">Let's Connect</p>
        <h1>Contact Me</h1>

        <p>
          Feel free to contact me regarding opportunities, projects,
          or software development.
        </p>
      </div>

      <div className="contact-container">

        <aside className="contact-information">

          <h2>Contact Information</h2>

          <div className="contact-detail">
            <span>Email</span>
            <p>your.email@example.com</p>
          </div>

          <div className="contact-detail">
            <span>Location</span>
            <p>Ottawa, Ontario, Canada</p>
          </div>

          <div className="contact-detail">
            <span>Area of Study</span>
            <p>Software Engineering Technology – AI</p>
          </div>

          <div className="contact-detail">
            <span>Availability</span>
            <p>Open to professional and co-op opportunities.</p>
          </div>

        </aside>

        <form className="contact-form" onSubmit={handleSubmit}>

          <div className="form-row">

            <div className="form-group">
              <label htmlFor="firstName">
                First Name
              </label>

              <input
                id="firstName"
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="lastName">
                Last Name
              </label>

              <input
                id="lastName"
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>

          </div>

          <div className="form-group">
            <label htmlFor="phone">
              Contact Number
            </label>

            <input
              id="phone"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">
              Email Address
            </label>

            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">
              Message
            </label>

            <textarea
              id="message"
              name="message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="primary-button submit-button"
          >
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;