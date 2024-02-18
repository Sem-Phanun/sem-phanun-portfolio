import { NavLink,Outlet,useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { BiCategoryAlt } from 'react-icons/bi'
import {CiUser} from 'react-icons/ci'
import {SiAboutdotme} from 'react-icons/si'
import {FaTools} from 'react-icons/fa'
import { 
  AiOutlineArrowLeft
} from 'react-icons/ai'
import { MdSpaceDashboard,MdKeyboardArrowUp } from 'react-icons/md'
import './dashboard.scss'
const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [expand, setExpand] = useState(true)

  const navigate = useNavigate()
  useEffect(()=>{
    const login = localStorage.getItem('Bright')
    if(login == "0"){
      navigate('/dashboard/auth/login')
    }
  })
  const handleLogout = () => {
    localStorage.setItem("Bright", "0")
    window.location.href='/dashboard/auth/login'
  }

  return(
    <section className='flex-container'>
      <aside className={`${expand ? '': 'w-40'} sidebar`}>
        <button className={`button ${!expand && 'rotate-180'}`}>
          <AiOutlineArrowLeft className='text-xl' onClick={()=>setExpand(!expand)}/>
        </button>
        <nav>
          <NavLink to='/dashboard' className='dashboard-link'>
            <h1 className={`title ${!expand && "scale-0"}`}
            >Admin</h1>
          </NavLink>
        </nav>
        <nav className='pt-6'>
          <li>
            <NavLink to='/dashboard' className='navLink'>
                <MdSpaceDashboard/> 
                <span className={`${!expand && 'hidden'}`}>Dashboard</span>
            </NavLink>
          </li>

          <li >
            <NavLink to='/dashboard/admin/hero' className='navLink'>
                <CiUser/>
                <span className={`${!expand && 'hidden'} origin-left duration-200`}>Hero</span>
            </NavLink>
          </li>
          <li >
            <NavLink to='/dashboard/admin/about' className='navLink'>
                <SiAboutdotme/>
                <span className={`${!expand && 'hidden'}`}>About</span>
            </NavLink>
          </li>
          <li >
            <NavLink to='/dashboard/admin/skill' className='navLink'>
                <BiCategoryAlt/> 
                <span className={`${!expand && 'hidden'}`}>Skill</span>
            </NavLink>
          </li>
          <li >
            <NavLink to='/dashboard/admin/project' className='navLink'>
                <FaTools/>
                <span className={`${!expand && 'hidden'}`}>Project</span>
            </NavLink>
          </li>
        </nav>

        <nav className="admin-profile">
          {isOpen && (
            <main className={`logout ${!expand && 'min-logout'}`}>
              <li onClick={handleLogout} className={`${!expand && 'text-xs'}`}>logout</li>
            </main>
          )}
          <div className={`profile ${!expand && "min-profile"}`}>
            <span 
              className={`border-name ${!expand && '-mr-4'}`}
            >B</span>
            <h3 className={`box-1 ${!expand && 'scale-0'}`}>Bright</h3>
            <button onClick={()=>setIsOpen(!isOpen)} className={`btn ${!expand && 'scale-0'}`}>
              <MdKeyboardArrowUp className='text-2xl'/>
            </button>
          </div>
        </nav>
      </aside>
      <Outlet/>
    </section>
  )
}

export default Dashboard