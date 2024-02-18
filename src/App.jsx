
import Home from "./views/home/Home";
import About from "./views/about/About";
import Skill from "./views/skill/Skill";
import Project from "./views/project/Project";
import Contact from "./views/contact/Contact";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/dasboard/Dashboard";
import ProjectDetails from "./views/project/ProjectDetails";
import Admin from "./views/admin/Admin";
import Register from "./views/auth/register/Register";
import Auth from "./views/auth/Auth";
import AboutAdmin from "./views/admin/aboutHero/AboutAdmin";
import Hero from "./views/admin/hero/Hero";
import SkillHero from './views/admin/skillHero/SkillHero'
import ProjectHero from './views/admin/project/Project'
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/project" element={<Project />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/dashboard" element={<Admin/>}>
          <Route path="admin" element={<Dashboard/>}/>
          <Route path="admin/hero" element={<Hero/>}/>
          <Route path="admin/about" element={<AboutAdmin/>}/>
          <Route path="admin/skill" element={<SkillHero/>}/>
          <Route path="admin/project" element={<ProjectHero/>}/>
        </Route>
        <Route path="/admin/register" element={<Auth/>}>
          <Route path="register" element={<Register/>}/>
        </Route>
      </Routes>
    </>
  );
};

export default App;
