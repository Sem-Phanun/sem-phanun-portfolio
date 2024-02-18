import {FiEdit} from 'react-icons/fi'
import { MdDelete } from 'react-icons/md'
import { CiSaveDown1 } from 'react-icons/ci'
import './Hero.scss'
const Hero = () => {
  return (
    <>
      <section className="hero-container">
        <article className="title-wrapper">
          <h1 className="title">Hero</h1>
        </article>

        <main className='content-wrapper'>
          
          <section className='button-wrapper'>
            <button className='btn'><CiSaveDown1 className='btn-icons'/></button>
          </section>
          <table class="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Greeting</th>
                <th>Name</th>
                <th>Role</th>
                <th>Image</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Hello I'm</td>
                <td>Phanun</td>
                <td>React Developer</td>
                <td>
                  <img src="" alt="" />
                </td>
                <td className='action-wrapper'>
                  <button className='btn-wrapper btn-primary'><FiEdit className='btn-icons'/></button>
                  <button className='btn-wrapper btn-danger'><MdDelete className='btn-icons'/></button>
                </td>
              </tr>
            </tbody>
          </table>
        </main>
      </section>
    </>
  )
}

export default Hero