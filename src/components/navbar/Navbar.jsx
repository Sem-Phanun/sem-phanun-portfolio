import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { HiMiniBars2 } from "react-icons/hi2";
import { MdClose } from "react-icons/md";
import "./navbar.scss";
import { navbar } from "../../data/data";


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
            {
              navbar.map((list,index)=> {
                return (
                  <li key={index}>
                    <NavLink className={"links"} to={list.route}>{list.name}</NavLink>
                  </li>
                )
              })
            }
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
