import ApiImage from '../../assets/image/api.jpg' 
import PhoneShop from '../../assets/image/phoneshop.png'
import Todo from '../../assets/image/Todo.jpg'
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
          <div className="project-box">
            <figure className="project-image">
              <img src={ApiImage}/>
            </figure>
            <article className='description'>
              <h1>Electronic store</h1>
              <p>This Api project using nodejs to build.</p>
              <a className='link-github' href="https://github.com/Sem-Phanun/ecommerce_api">Github</a>
            </article>
          </div>

          <div className="project-box">
            <figure className="project-image">
              <img src={PhoneShop}/>
            </figure>
            <article className='description'>
              <h1>Api project</h1>
              <p>This project is using React.js to build.</p>
              <a className='link-github' href="https://github.com/Sem-Phanun/ecommerce_api">Github</a>
            </article>
          </div>

          <div className="project-box">
            <figure className="project-image">
              <img src={Todo}/>
            </figure>
            <article className='description'>
              <h1>React + Firebase</h1>
              <p>Simple Todo Application using React.Js</p>
              <a className='link-github' href="https://github.com/Sem-Phanun/React_Firebase">Github</a>
            </article>
          </div>
        </div>
      </main>
    </>
  )
}

export default Project