import Profile from '../../assets/image/myimage.jpg'
import "./hero.scss";
import { FaInstagram,FaLinkedin,FaGithub } from "react-icons/fa";

const Hero = () => {
  return (
    <>
      <div className="hero___container">
        <article className="hero-section">
          <p className="greeting">Hello i'm </p>
          <h1 className="box">Phanun</h1>
          <span className="position___title">Full Stack Developer</span>
        </article>

        <figure className="profile___image">
            <img src={Profile} className="img-box"/>
        </figure>
      </div>

      <div className="social-icons">
        <li><a href="https://www.instagram.com/sudo.bright?"><FaInstagram className="icons" /></a></li>
        <li><a href="https://www.linkedin.com/in/sem-phanun-51518b241/"><FaLinkedin className="icons" /></a></li>
        <li><a href="https://github.com/Sem-Phanun"><FaGithub className="icons" /></a></li>
      </div>
    </>
  );
};

export default Hero;
