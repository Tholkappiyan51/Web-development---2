import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Context from './Context';
import './Nav.css'

const Nav = () => {
  const[islog,setLog]=useState(true);
  function mouse()
  {
    if(islog)
    {
      alert("if you press it.you will redirected to Login page")
      setLog(false)
    }
    else
    {
      setLog(false)
    }
  }
  const{theme,toggleTheme}=useContext(Context);
  return (
    <div >
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Contact List</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <Link to='/rec'><li className="nav-item">
        <a className="nav-link" href="#">Recents</a>
      </li></Link> 
      <Link to='/in'><li className="nav-item">
        <a className="nav-link" href="#">Income</a>
      </li></Link> 
      <Link to='/miss'><li className="nav-item">
        <a className="nav-link" href="#">Missed</a>
      </li></Link> 
      <Link to='/out'><li className="nav-item">
        <a className="nav-link" href="#">Outgoing</a>
      </li></Link> 
      <Link to='/con'> <li className="nav-item">
        <a className="nav-link" href="#">Contacts</a>
      </li></Link>
      <Link to='/fee'> <li className="nav-item">
        <a className="nav-link" href="#">Feed</a>
      </li></Link>
      <Link to='/pro'> <li className="nav-item">
        <a className="nav-link" href="#">Profile</a>
      </li></Link>
      <Link to='/ser'> <li className="nav-item">
        <a className="nav-link" href="#">Search</a>
      </li></Link>
      <Link to='/l'> <li onMouseOver={mouse} className="nav-item">
        <a className="nav-link" href="#">Logout</a>
      </li></Link>
      <li className="nav-item"><label class="switch">
      <input type="checkbox" onClick={toggleTheme}/>
      <span class="slider round">
      </span></label></li>
     
    </ul>
  </div>
</nav>
    </div>
  )
}

export default Nav