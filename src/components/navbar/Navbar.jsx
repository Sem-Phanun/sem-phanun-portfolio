import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { HiMiniBars2 } from "react-icons/hi2";
import { MdClose } from "react-icons/md";
import "./navbar.scss";


const Navbar = () => {

  const [toggle, setToggle] = useState(false)

  return (
    <>
      {/* =========================================
                      Navigation Bar
          =========================================*/}
      <nav className="navbar___container">

        {/* =======================================
                      Logo Block
            =======================================*/}

        <li className="logo___box">
          <span>
            <Link to={'/'} className="logo-link">Bright.</Link>
          </span>

        </li>

        {/* =======================================
                        Menu List
            =======================================*/}

        <ul className={toggle ? "mobile-menu" : "menu___list"}
          onClick={()=>setToggle(false)}
        >
            <li>
                <NavLink to={"/"} className={"links"}>Home</NavLink>
            </li>
            <li><NavLink to={"/about"} className={"links"}>About Me</NavLink></li>
            <li><NavLink to={"/skill"} className={"links"}>Skill</NavLink></li>
            <li><NavLink to={"/project"} className={"links"}>Project</NavLink></li>
            <li><NavLink to={"/contact"} className={"links"}>Contact</NavLink></li>
            <li>
              <button className="downloadCV"
              
              >
                <span>Download CV</span>
              </button>
            </li>
        </ul>
        <ul className="bar2"
              onClick={()=> setToggle(!toggle)}
            >
            <li>{toggle ? <MdClose className="icon"/> : <HiMiniBars2 className="icon"/>}</li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
