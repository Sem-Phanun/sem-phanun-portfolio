import "./skill.scss";

const Skill = () => {
  return (
    <>
      <main className="skill___container">
        <article className="title-skill">
          <h1>Explore my skill</h1>
        </article>

        <div className="skill-wrapper">
          <li>
            <h3>JavaScript</h3>
            <span className="bar">
              <span className="javascript"></span>
            </span>
          </li>
          <li>
            <h3>React.Js</h3>
            <span className="bar">
              <span className="react"></span>
            </span>
          </li>
          <li>
            <h3>Node.Js, Express.Js</h3>
            <span className="bar">
              <span className="node"></span>
            </span>
          </li>
          <li>
            <h3>Web Design</h3>
            <span className="bar">
              <span className="webdesign"></span>
            </span>
          </li>
          <li>
            <h3>Relational Database</h3>
            <span className="bar">
              <span className="database"></span>
            </span>
          </li>
          <li>
            <h3>Java</h3>
            <span className="bar">
              <span className="java"></span>
            </span>
          </li>
          <li>
            <h3>Spring Core</h3>
            <span className='bar'>
              <span className='springcore'></span>
            </span>
          </li>
        </div>
      </main>
    </>
  );
};

export default Skill;
