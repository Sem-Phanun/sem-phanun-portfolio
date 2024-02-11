import { Link } from 'react-router-dom'
import { FaFacebook, FaLinkedin } from "react-icons/fa6";
import { FaGithub, FaInstagram } from 'react-icons/fa';
import './footer.scss'
const Footer = () => {
  return (
    <>
      <footer className='footer-container'>
        {/* section logo */}
        <section className="section-logo">
          <nav className='nav-link'>
            <Link className='link' to={"/"}>
              <span>Bright</span>
            </Link>
          </nav>
          <nav className='nav-email'>
            <li>
              <a href="#">semphanun.dev@gmail.com</a>
            </li>
          </nav>
        </section>
        {/* section quick link */}
        <section className='section-more'>
          <article className='article-more'>
            <h2 className='title'>More</h2>
          </article>
          <nav className='nav-more'>
            <li>
              <Link to="/about" className='more-link'>About</Link>
            </li>
            <li>
              <Link to="/contact" className='more-link'>Contact</Link>
            </li>
          </nav>
        </section>
        {/* close section quick link */}
        
        {/* section social network */}
        <section className='section-social'>
          <article className='article-social'>
            <h2 className='title'>Social</h2>
          </article>
          <nav className='nav-social'>
            <li>
              <Link to="/"><FaFacebook/> Facebook</Link>
            </li>
            <li>
              <Link to="https://www.instagram.com/sudo.bright?"><FaInstagram/> Instagram</Link>
            </li>
            <li>
              <Link to="https://www.linkedin.com/in/sem-phanun-51518b241/"><FaLinkedin/> Linkedin</Link>
            </li>
            <li>
              <Link to="https://github.com/Sem-Phanun"><FaGithub/> GitHub</Link>
            </li>
          </nav>
        </section>

      </footer>
      <footer className='license'>
        <p>© 2023 <span>Phanun </span> All Rights Reserved</p>
      </footer>
    </>
  )
}

export default Footer