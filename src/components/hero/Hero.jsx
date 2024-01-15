import { useEffect, useState } from 'react';
import "./hero.scss";
import Profile from '../../assets/image/myimage.jpg'
import { FaInstagram,FaLinkedin,FaGithub } from "react-icons/fa";
import { database } from '../../firebase/firebase';
import { query, onSnapshot,collection, doc } from 'firebase/firestore'
const Hero = () => {
  const [data, setData] = useState([])
  useEffect(()=> {
    getData()
  },[])

  const getData = async () => {
    try{

      const subItem = await query(collection, "subItem")
      const unsubscribe = onSnapshot(subItem, (querySnapshot)=> {
        let listItem = []
        querySnapshot.forEach((doc)=> {
          listItem.push({...doc.data(), id: doc.id})
        })
        setData(listItem)
        console.log(listItem)
      })
    }catch(error){
      console.error("Error fetching: ", error)
    }
  }
  // const getData = async () => {
  //   try {
  //     const items = await query(collection(database, 'dataList'),collection(database,'subItem'));
  //     const itemCollection = items.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  //     setData(itemCollection);
  //     console.log(data)
  //   } catch (error) {
  //     console.error('Error fetching:', error);
  //   }
  // }
  // const getData = async () => {
  //   const req = query(collection(database, 'dataList'))
  //   const handleReq = await onSnapshot(req, (querySnapshot)=> {
  //     let arrList = []
  //     querySnapshot.forEach((doc)=> {
  //       arrList.push({...doc.data(), id: doc.id})
  //     })
  //     setData(arrList)
  //   })
  //   return ()=> handleReq
  //}
  return (
    <>
      <div className="hero___container">
        {
          data.map((hero, index)=> {
            return (
              <>
                <article className='hero-section' key={index}>
                  <p className='greeting'>{hero.greeting}</p>
                  <h1 className='box'>{hero.name}</h1>
                  <p className="position___title">{hero.role}</p>
                </article>
              </>
            )
          })
          
        }
        <figure className="profile___image">
          <img src={Profile} className="img-box"/>
        </figure>
      </div>

      <div className="social-icons">
        <li><a href="https://www.instagram.com/sudo.bright?"><FaInstagram className="icons" /></a></li>
        <li><a href="https://www.linkedin.com/in/sem-phanun-51518b241/"><FaLinkedin className="icons" /></a></li>
        <li><a href="https://github.com/Sem-Phanun"><FaGithub className="icons" /></a></li>
      </div>
    </>
  );
};

export default Hero;
