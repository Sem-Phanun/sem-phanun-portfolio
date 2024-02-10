import { introduce } from "../../data/data";
import { Link } from "react-router-dom";
import Instagram from "../../assets/social/instagram.png";
import LinkedIn from "../../assets/social/linkedin.png";
import GitHub from "../../assets/social/github.png";
import Facebook from "../../assets/social/facebook.png";
import "./hero.scss";
// import { FaInstagram,FaLinkedin,FaGithub } from "react-icons/fa";
const Hero = () => {
  const handleLink = [
    {
      id: 1,
      brand: "Facebook",
      link: "",
      social: Facebook,
    },
    {
      id: 2,
      brand: "Instagram",
      link: "https://www.instagram.com/sudo.bright?",
      social: Instagram,
    },
    {
      id: 3,
      brand: "LinkedIn",
      link: "https://www.linkedin.com/in/sem-phanun-51518b241/",
      social: LinkedIn,
    },
    {
      id: 4,
      brand: "GitHub",
      link: "https://github.com/Sem-Phanun",
      social: GitHub,
    },
  ];

  return (
    <>
      <section className="hero___container">
        {introduce.map((hero) => {
          return (
            <>
              <article className="hero-section">
                <p className="greeting">{hero.greeting}</p>
                <h1 className="box">{hero.name}</h1>
                <p className="role">{hero.role}</p>
              </article>
              <figure className="profile___image">
                <img src={hero.image} className="img-box" />
              </figure>
            </>
          );
        })}
      </section>

      <section className="social-wrapper">
        <article className="title-wrapper">
          <h2 className="title">Follow me an social networks!</h2>
        </article>
      </section>
      <section className="social-wrapper">
        <main className="social-block">
          {handleLink.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.link}>
                  <img src={item.social} />
                </Link>
              </li>
            );
          })}
          {/* <li><a href="https://www.instagram.com/sudo.bright?"><FaInstagram className='icons'/></a></li>
          <li><a href="https://www.linkedin.com/in/sem-phanun-51518b241/"><FaLinkedin className="icons" /></a></li>
          <li><a href="https://github.com/Sem-Phanun"><FaGithub className="icons" /></a></li> */}
        </main>
      </section>
    </>
  );
};

export default Hero;
