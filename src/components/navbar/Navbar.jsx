import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { HiMiniBars2 } from "react-icons/hi2";
import { MdClose } from "react-icons/md";
import "./navbar.scss";
import { navbar } from "../../data/data";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      {/* =========================================
                      Navigation Bar
          =========================================*/}
      <section className="navbar___container">
        {/* =======================================
                      Logo Block
            =======================================*/}
        <nav className="navbar-wrapper">
          <li className="logo___box">
            <span>
              <Link to={"/"} className="logo-link">
                <span>Bright</span>
              </Link>
            </span>
          </li>
          {/* =======================================
                        Menu List
            =======================================*/}
          <ul
            className={toggle ? "mobile-menu" : "menu___list"}
            onClick={() => setToggle(false)}
          >
            {navbar.map((list, index) => {
              return (
                <li key={index}>
                  <NavLink className={"links"} to={list.route}>
                    {list.name}
                  </NavLink>
                </li>
              );
            })}
            {/* <li className="menu-wrapper" onClick={()=> setToggle(!toggle)}>
              {
                toggle ? (
                  <MdClose className="icon"/>
                ) : (
                  <HiMiniBars2 className="icon"/>
                )
              }
            </li> */}
          </ul>
          <ul className="menu-wrapper" onClick={() => setToggle(!toggle)}>
            <li>
              {toggle ? (
                <MdClose className="icon" />
              ) : (
                <HiMiniBars2 className="icon" />
              )}
            </li>
          </ul>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
