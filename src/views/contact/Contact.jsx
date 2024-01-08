import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import './contact.scss'
const Contact = () => {
  return (
    <>
      <main className="contact-container">
        <article className='titleHeader'>
          <h1>Contact Me</h1>
          <p>Get in touch</p>
        </article>
        <div className="content">

          <li className="box">
            <a href="mailto:phanunsem@gmail.com"><MdEmail className="contact-icons"/>phanunsem@gmail.com</a>
          </li>
          <li><a href="https://www.linkedin.com/in/sem-phanun-51518b241/"><FaLinkedin className="icons" />Sem Phanun</a></li>
        </div>
      </main>
    </>
  )
}

export default Contact