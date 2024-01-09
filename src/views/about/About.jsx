import Profile from '../../assets/image/profile.jpg'
import { aboutMe } from '../../data/data';
import "./about.scss";
const About = () => {
  return (
    <>
      <main className="about___container">
        {
          aboutMe.map((about, index)=> {
            return (
              <>
                <figure className='profile-picture'>
                  <img src={about.profile} className='profile-image'/>
                </figure>
                <article className='about-block'>
                  <h1>{about.title}</h1>
                  <p>{about.description}</p>
                </article>
              </>
            )
          })
        }
      </main>
    </>
  );
};

export default About;
