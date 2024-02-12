import "./skill.scss";
import NodeJs from '../../assets/image/nodejs.png'
const Skill = () => {
  return (
    <>
      <section className="skill___container">
        <article className="title-wrapper">
          <h1 className="title">Skill</h1>
        </article>

        <main className="skill-wrapper">
          <li>
            <img src={NodeJs} alt="" />
          </li>
        </main>
      </section>
    </>
  );
};

export default Skill;
