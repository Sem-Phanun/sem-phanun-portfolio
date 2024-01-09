import { projectList } from '../../data/data'
import './project.scss'
const Project = () => {
  return (
    <>
      <main className="project___container">
        <article className="title-wrapper">
          <h1>My Projects</h1>
          <p>Let's explore my projects.</p>
        </article>


        <div className="content-wrapper">

          {
            projectList.map((element,index)=> {
              return (
                <div className='project-box' key={index}>
                  <figure className="project-image">
                    <img src={element.image}/>
                  </figure>
                  <article className="description">
                    <h1>{element.title}</h1>
                    <p>{element.description}</p>
                    <a href={element.link}>source code</a>
                  </article>
                </div>
              )
            })
          }
        </div>
      </main>
    </>
  )
}

export default Project