import { Link } from 'react-router-dom'
import './footer.scss'
const Footer = () => {
  return (
    <>
      <footer className='footer-container'>
        <section className="logo">
          <nav>
            <Link className='link' to={"/"}>
              <span>Bright</span>
            </Link>
          </nav>
          <nav>
            <li>
              <a href="#">semphanun.dev@gmail.com</a>
            </li>
          </nav>
        </section>
        <section>
          <article>
            <h2>More</h2>
          </article>
          <nav>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </nav>
        </section>
        <section>
          <article>
            <h2>Social</h2>
          </article>
          <nav>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">IG</a>
            </li>
            <li>
              <a href="#">Linkedin</a>
            </li>
            <li>
              <a href="#">GitHub</a>
            </li>
          </nav>
        </section>
        {/* <nav className="navbar">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li><Link to="/about">About Me</Link></li>
          <li><Link to="/skill">Skill</Link></li>
          <li><Link to="/project">Project</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </nav> */}

      </footer>
      <footer className='license'>
        <p>© 2023 <span>Phanun </span> All Rights Reserved</p>
      </footer>
    </>
  )
}

export default Footer