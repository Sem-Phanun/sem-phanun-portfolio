
import { aboutMe } from '../../data/data';
import Education from '../../components/education/Education'
import "./about.scss";
const About = () => {
  return (
    <>
      <section className="about___container">
        {
          aboutMe.map((about, index)=> {
            return (
              <>
                <main key={index} className='about-wrapper'>
                  <figure className='profile-picture'>
                    <img src={about.profile} className='profile-image'/>
                  </figure>
                  <article className='about-block'>
                    <h1>{about.title}</h1>
                    <p>{about.description}</p>
                  </article>
                </main>
              </>
            )
          })
        }
      </section>

      <Education/>
    </>
  );
};

export default About;
