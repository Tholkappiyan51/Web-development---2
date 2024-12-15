import React from 'react'
import './Signup.css'
import { Link } from 'react-router-dom'
const Signup = () => {
  return (
    <div>
    <div className="container">
  <div className="box">
    <h1 className='tx1'>Sign Up</h1>
    <div className="user">
      <i className="fas fa-user"></i>
      <input type="text" name="username" id="username" placeholder="Full Name"/>
      <i className="fas fa-envelope"></i>
      <input type="text" name="email" id="email" placeholder="Email Address"/>
      <i className="fas fa-unlock-alt"></i>
      <input type="text" name="Phone no" id="Phone no" placeholder="Phone no"/>
      <i className="fas fa-unlock-alt"></i>
      <input type="password" name="password" id="password" placeholder="Password"/>
      <i className="fas fa-unlock-alt"></i>
      <input type="password" name="confirm-password" id="confirm-password" placeholder="Confirm Password"/>
    </div>
    <div className="login-btn">
      <Link to='/log1'><button className="btn2"> <a href="succes.html"> Submit</a></button></Link> 
      <Link to='/log1'><p className="signup">Already have an account ? <a href="#"><span>Log In</span> </a></p></Link> 
    </div>
  </div>
</div>
    </div>
  )
}

export default Signup