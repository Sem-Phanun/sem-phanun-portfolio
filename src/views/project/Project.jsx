import { Link, useParams } from "react-router-dom";
import { projectList } from "../../data/data";
import "./project.scss";
const Project = () => {
  const { id } = useParams()
  return (
    <>
      <section className="project___container">
        <article className="title-wrapper">
          <h1>Projects</h1>
          <p>Let's explore my projects.</p>
        </article>

        <main className="content-wrapper">
          {projectList.map((item, index) => {
            return (
              <main className="card" key={index}>
                <figure className="image-box">
                  <img src={item.image} alt={item.title} />
                </figure>
                <article className="text-box">
                  <h3>{item.title}</h3>
                  
                </article>
                <Link to={`/project/${id}`} className="btn-more">view Details</Link>
              </main>
            );
          })}
        </main>
      </section>
    </>
  );
};

export default Project;
