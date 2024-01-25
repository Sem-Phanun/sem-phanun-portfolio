import { Link } from 'react-router-dom'
import Logo from '../../assets/logo/Bright.png'
import './footer.scss'
const Footer = () => {
  return (
    <>
      <footer className='footer-container'>
        <div className="logo">
          <li>
            <Link className='link' to={"/"}>
              <img src={Logo}/>
            </Link>
          </li>
        </div>
        <nav className="navbar">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li><Link to="/about">About Me</Link></li>
          <li><Link to="/skill">Skill</Link></li>
          <li><Link to="/project">Project</Link></li>
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