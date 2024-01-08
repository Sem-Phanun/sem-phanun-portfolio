import Profile from '../../assets/image/profile.jpg'
import "./about.scss";
const About = () => {
  return (
    <>
      <main className="about___container">
        <figure className="profile-picture">
          <img src={Profile} className='profile-image'/>
        </figure>
        <article className="about-block">
          <h1>About Me</h1>
          <p><span>Hello I'm </span> Phanun. I'm from kampong speu, senior student at <strong> Royal University of Phnom Penh</strong>. Major: Computer Science and Engineering. I am excited about leaveraging my skills and knowlege in the dynamic world of Technology.</p>
        </article>
      </main>
    </>
  );
};

export default About;
