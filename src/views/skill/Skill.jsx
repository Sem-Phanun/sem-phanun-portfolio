import "./skill.scss";
import { fimilarSkill, skill, tools } from "../../data/data";
import Layout from "../../components/layout/Layout";
const Skill = () => {
  return (
    <>
      <Layout title={"SKILL - PORTFOLIO"}>
      <section className="skill___container">
        <article className="title-wrapper">
          <h1 className="title">Skill</h1>
        </article>

        <article className="pro-box">
          <h3 className="pro-title">Proficient: </h3>
        </article>
        <main className="skill-wrapper">
          {skill.map((item, index) => {
            return (
              <figure className="image-box" key={index}>
                <img src={item.image} alt={item.name} />
              </figure>
            );
          })}
        </main>
        <article className="pro-box">
          <h3 className="pro-title">Fimilar:</h3>
        </article>
        <main className="skill-wrapper">
          {fimilarSkill.map((item, index) => {
            return (
              <figure className="image-box" key={index}>
                <img src={item.image} alt="" />
              </figure>
            );
          })}
        </main>

        <article className="pro-box">
          <h3 className="pro-title">Tools:</h3>
        </article>
        <main className="skill-wrapper">
          {tools.map((item, index) => {
            return (
              <figure className="image-box" key={index}>
                <img src={item.image} alt={item.name} />
              </figure>
            );
          })}
        </main>
      </section>
      </Layout>
    </>
  );
};

export default Skill;
