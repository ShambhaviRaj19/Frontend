import React from 'react'
 import { Link } from 'react-router-dom'
const Test = () => {
  return (
    <div>
       <ul><li><Link to="/profile">Profile</Link></li>
            <li><Link to="/profile/edit">Edit Profile</Link></li></ul>
    </div>
  )
}

export default Test
