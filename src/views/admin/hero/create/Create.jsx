import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../../../../assets/addAvatar.png'
import './create.scss'
const create = () => {
  const [loading, setLoading] = useState(false)
  const [err, setErr] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <>
      <div className="formContainer">
            <div className="formWrapper">
            <span className="logo">Create Info</span>
                <form onSubmit={handleSubmit}>
                    <input required type="text" placeholder="greeting" aria-invalid="true"/>
                    <input required type="text" placeholder="name"/>
                    <input required type="text" placeholder="role"/>
                    <input required type="file" style={{display: "none"}}  id="file" />
                    <label htmlFor="file">
                      <img src={Avatar}/>
                      <span>Add an avatar</span>
                    </label>
                    <button className='button'>Add</button>
                </form>

            </div>
        </div>
    </>
  )
}

export default create