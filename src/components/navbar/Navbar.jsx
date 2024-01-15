import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { HiMiniBars2 } from "react-icons/hi2";
import { MdClose } from "react-icons/md";
import "./navbar.scss";
import { database } from "../../firebase/firebase";
import { collection, doc, onSnapshot, query } from "firebase/firestore";

const Navbar = () => {
  const [list, setList] = useState([]);
  const [toggle, setToggle] = useState(false);

  //handle reading data from firestore
  useEffect(() => {
    fetchingData()
  }, []);

  const fetchingData = async () => {
    try {
      const request = await query(collection(database, "dataList"))
      const unsubscribe = onSnapshot(request, (querySnapshot)=> {
        let items = []
        querySnapshot.forEach((doc) => {
          items.push({...doc.data(), id: doc.id})
        })
      setList(items)
      })
    } catch (error) {
      console.error("Error fetching", error);
    }
  };

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
            <Link to={"/"} className="logo-link">
              Bright.
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
          {list.map((data, index) => {
            return (
              <li key={index}>
                <NavLink className={"links"} to={data.route}>
                  {data.menu}
                </NavLink>
              </li>
            );
          })}
          <li>
            <button className="downloadCV">
              <span>Download CV</span>
            </button>
          </li>
        </ul>
        <ul className="bar2" onClick={() => setToggle(!toggle)}>
          <li>
            {toggle ? (
              <MdClose className="icon" />
            ) : (
              <HiMiniBars2 className="icon" />
            )}
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
