
import Hero from '../../components/hero/Hero'
import About from '../about/About'
import Skill from '../skill/Skill'
import Project from '../project/Project'
import './home.scss'
const Home = () => {
  return (
    <>
        <Hero/>
        <About/>
        <Skill/>
        <Project/>
    </>
  )
}

export default Home