import { Link } from 'react-router-dom'
import './footer.scss'
import { useEffect, useState } from 'react'
import { database } from "../../firebase/firebase";
import { collection, onSnapshot, query } from "firebase/firestore";

const Footer = () => {
  const [list, setList] = useState([])

  useEffect(()=> {
    const request = query(collection(database, 'dataList'))
    const handleReq = onSnapshot(request, (querySnapshot)=> {
      let dataArr = []
      querySnapshot.forEach((doc)=> {
        dataArr.push({...doc.data(), id: doc.id})
      })
      setList(dataArr)
    })
    return ()=> handleReq
  },[])
  return (
    <>
      <footer className='footer-container'>
        <div className="logo">
          <li>
            <Link className='link' to={"/"}>Bright.</Link>
          </li>
        </div>
        <nav className="navbar">
          {
            list.map((data, index)=> {
              return(
                <li key={index} >
                  <Link to={data.route}>{data.menu}</Link>
                </li>
              )
            })
          }
          
        </nav>
      </footer>
      <footer className='license'>
        <p>© 2023 <span>Phanun </span> All Rights Reserved</p>
      </footer>
    </>
  )
}

export default Footer