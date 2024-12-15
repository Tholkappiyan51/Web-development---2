import React, { useState } from 'react'
import './Log.css'
import { Link } from 'react-router-dom'
import Alert from '@mui/material/Alert';
const Log = () => {
  const[islog,setLog]=useState(true);
  function handlelogin()
  {
    if(islog)
    {
      alert("if you press it.you will redirected to home page")
      setLog(false)
    }
    else
    {
      setLog(false)
    }
  }
  return (
<div className="container flex">
  <div className="facebook-page flex">
    <div className="text">
      <h1>Contact</h1>
      <p>Connect with friends and the world </p>
      <p> around you on Phone calls.</p>
    </div>
    <form action="#">
      <input type="email" placeholder="Email or phone number" required/>
      <input type="password" placeholder="Password" required/>
      <div className="link">
        <Link to='/st'><button type="submit" onMouseOver={handlelogin} className="login">Login</button></Link> 
        <Link to='/fpss'><a href="#" className="forgot">Forgot password?</a></Link> 
      </div>
      <hr/>
      <div className="button">
        <Link to='/signup'><a href="#">Create new account</a></Link> 
      </div>
    </form>
  </div>
</div>
  )
}
export default Log