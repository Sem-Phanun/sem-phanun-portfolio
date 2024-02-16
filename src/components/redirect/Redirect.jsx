import { useState } from 'react'
import './redirect.scss'
import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const Redirect = () => {
  const [count, setCount] = useState(6)
  const navigate = useNavigate()
  const location = useLocation

  // useEffect(()=> {

  // },[])
  return (
    <>
        <section style={{ height: "100vh"}} className='redirect-container'>
          <h1>redirecting to you in seconds</h1>
          <main>
            <span>Loading....</span>
          </main>
        </section>
    </>
  )
}

export default Redirect