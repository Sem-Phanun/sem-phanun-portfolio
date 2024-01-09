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
            <Link to={"/"}>Home</Link>
          </li>
          <li><Link to="/about">About Me</Link></li>
          <li><Link to="/skill">Skill</Link></li>
          <li><Link to="/porject">Project</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </nav>
      </footer>
      <footer className='license'>
        <p>© 2023 <span>Phanun </span> All Rights Reserved</p>
      </footer>
    </>
  )
}

export default Footer