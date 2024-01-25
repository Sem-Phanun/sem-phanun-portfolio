import { introduce } from '../../data/data';
import "./hero.scss";
import { FaInstagram,FaLinkedin,FaGithub } from "react-icons/fa";

const Hero = () => {
  return (
    <>
      <div className="hero___container">
        {
          introduce.map((hero)=> {
            return (
              <>
                <article className='hero-section'>
                  <p className='greeting'>{hero.greeting}</p>
                  <h1 className='box'>{hero.name}</h1>
                  <p className="position___title">{hero.role}</p>
                </article>
                <figure className="profile___image">
                  <img src={hero.image} className="img-box"/>
                </figure>
              </>
            )
          })
        }
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
