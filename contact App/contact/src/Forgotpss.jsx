import React from 'react'
import './Fpss.css'
import { Link } from 'react-router-dom'

const Forgotpss = () => {
  return (
    <div>
    <div className="container">
  <div className="box">
    <h1 className='tx1'>Change password</h1>
    <div className="user">
      <i className="fas fa-envelope"></i>
      <input type="text" name="email" id="email" placeholder="Email Address"/>
      <i className="fas fa-unlock-alt"></i>
      <input type="password" name="password" id="password" placeholder="Password"/>
      <i className="fas fa-unlock-alt"></i>
      <input type="password" name="confirm-password" id="confirm-password" placeholder="Confirm Password"/>
    </div>
    <div className="login-btn">
      <Link className='l1' to='/log1'><button className="btn1"> <a href="#"> Submit</a></button></Link> 
    </div>
  </div>
</div>
    </div>
  )
}

export default Forgotpss