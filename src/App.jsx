import Navbar from "./components/navbar/Navbar"
import Home from './views/home/Home'
import About from './views/about/About'
import Skill from "./views/skill/Skill"
import Project from "./views/project/Project"
import Contact from "./views/contact/Contact"
import Footer from './components/footer/Footer'
import { Route, Routes } from "react-router-dom"
const App = () => {
  return (
    <>
      <Navbar/>

      <Routes>
        <Route path="" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/skill" element={<Skill/>}/>
        <Route path="/project" element={<Project/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer/>

    </>
  )
}

export default App