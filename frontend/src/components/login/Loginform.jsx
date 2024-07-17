import React from 'react'
import { Link } from 'react-router-dom';
const Loginform = () => {
  return (
    <div>
      <form action=""> 
        <label htmlFor="">UserName </label>
        <input type="text" placeholder='Enter Your Name' />
        <label htmlFor="">Password</label>
        <input type="text" placeholder='Enter Your Password' />
        <button type='submit'> Login</button>

        <aside>Don't have a Account <Link to="/signup">SignUp</Link></aside>
      </form>
      </div>
  )
}

export default Loginform