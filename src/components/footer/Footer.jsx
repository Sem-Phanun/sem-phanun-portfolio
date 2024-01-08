import { Link } from 'react-router-dom'
import './footer.scss'
const Footer = () => {
  return (
    <>
      <footer className='footer-container'>
        <div className="logo">
          <li>
            <Link className='link' to={"/"}>Bright.</Link>
          </li>
        </div>
        <nav className="navbar">
          <li>
            <a href="/">Home</a>
          </li>
          <li><a href="/about">About Me</a></li>
          <li><a href="/skill">Skill</a></li>
          <li><a href="/porject">Project</a></li>
          <li><a href="/contact">Contact</a></li>
        </nav>
      </footer>
      <footer className='license'>
        <p>© 2023 <span>Phanun </span> All Rights Reserved</p>
      </footer>
    </>
  )
}

export default Footer