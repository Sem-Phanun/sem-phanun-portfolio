import { introduce } from "../../data/data";
import { Link } from "react-router-dom";
import Instagram from "../../assets/social/instagram.png";
import LinkedIn from "../../assets/social/pngwing.com.png";
import GitHub from "../../assets/social/github.png";
import Facebook from "../../assets/social/facebook.png";
import "./hero.scss";

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
        {introduce.map((hero, index) => {
          return (
            <>
              <main className="hero-wrapper" key={index}>
              <article className="hero-section">
                <p className="greeting">{hero.greeting}</p>
                <h1 className="box">{hero.name}</h1>
                <p className="role">{hero.role}</p>
              </article>
              <figure className="profile___image">
                <img src={hero.image} className="img-box" />
              </figure>
              </main>
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
                  <img src={item.social} alt={item.brand} />
                </Link>
              </li>
            );
          })}
        </main>
      </section>
    </>
  );
};

export default Hero;
