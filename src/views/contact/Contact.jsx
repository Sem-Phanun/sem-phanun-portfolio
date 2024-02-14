import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import "./contact.scss";
const Contact = () => {
  return (
    <>
      <section className="contact-container">
        <article className="titleHeader">
          <h1>Contact Me</h1>
          <p>Get in touch with me.</p>
        </article>
        <main className="content">
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea className="form-control" id="message" rows="3"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
          {/* <li className="box">
            <a href="mailto:phanunsem@gmail.com"><MdEmail className="contact-icons"/>phanunsem@gmail.com</a>
          </li> */}
        </main>
      </section>
    </>
  );
};

export default Contact;
