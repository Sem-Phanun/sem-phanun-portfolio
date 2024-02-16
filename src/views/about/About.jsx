import { aboutMe } from "../../data/data";
import Layout from "../../components/layout/Layout";
import Education from "../../components/education/Education";
import "./about.scss";
const About = () => {
  return (
    <>
      <Layout title={"About"}>
        <section className="about___container">
          {aboutMe.map((about, index) => {
            return (
              <main key={index} className="about-wrapper">
                <figure className="profile-picture">
                  <img src={about.profile} className="profile-image" />
                </figure>
                <article className="about-block">
                  <h1>{about.title}</h1>
                  <p>{about.description}</p>
                </article>
              </main>
            );
          })}
        </section>

        <Education />
      </Layout>
    </>
  );
};

export default About;
