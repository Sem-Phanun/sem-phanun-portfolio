import { introduce } from "../../data/data";
import axios from "axios";
import { Link } from "react-router-dom";
import Instagram from "../../assets/social/instagram.png";
import LinkedIn from "../../assets/social/linkedin.png";
import GitHub from "../../assets/social/github.png";
import Facebook from "../../assets/social/facebook.png";
import { useState, useEffect } from "react";
import "./hero.scss";

const Hero = () => {
  const [hero, setHero] = useState([]);

  // Fetch hero data from the API on component mount
  useEffect(() => {
    handleApi();
  }, []);


  const handleApi = async () => {
      const res = await axios.get("http://localhost:3000/api/get-hero");
      console.log(res.data);
      if(res.data){
        setHero(res.data)
        
      }
  }

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
        {introduce.map((item, index) => {
          return (
            <main className="hero-wrapper" key={index}>
              <article className="hero-section">
                <p className="greeting">{item.title}</p>
                <h1 className="box">{item.name}</h1>
                <p className="role">{item.role}</p> 
              </article>
              <figure className="profile___image">
                <img src={item.image} className="img-box" />
              </figure>
            </main>
          );
        })}

      </section>

      <section className="social-wrapper">
        <article className="title-wrapper">
          <h2 className="title">Follow me on social networks!</h2>
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
