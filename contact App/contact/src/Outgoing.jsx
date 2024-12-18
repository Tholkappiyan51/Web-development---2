import React, { useState } from 'react'
import './Outgoing.css'
import Context from './Context';

const Outgoing = () => {
    const[count,setCount]=useState(0)
    function handle(){
        setCount(count+1);
    }
    function d1()
    {
      setCount(0);
    }
    const[count2,setCount2]=useState(0)
    function handle2(){
        setCount2(count2+1);
    }
    function d3()
    {
      setCount2(0);
    }
    const[count1,setCount1]=useState(0)
    function handle1(){
      setCount1(count1+1);
    }
    function d2()
    {
      setCount1(0);
    }
  const {theme, toggleTheme}=React.useContext(Context)

  return (
    <div>
    <div style={{backgroundColor:theme=== 'light' ? '#fff' : '#333',color:theme=== 'light'?'#333':'#fff', width:"100vw", height:"100vh"}}>

    <div className='inbody4'>
    <center><h1 className='t14'>Today</h1></center>
    <br/>
    <div className='f14'>
    <fieldset className='ff14'>
    <img className='i14' src='data:image/png;base64,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'/>
    <hr/>
    <center>
    <h2>Kanmani</h2>
    <h4>7094741364</h4>
    <h5>Outgoing call</h5>
    <br/>
    <p>you called {count2} times</p>
    </center>
    <div className='login-btn4'>
    <button onClick={handle2} className='btn14'>Call</button>
    <button onClick={d3} className='btn24'>delete</button>
    </div>
    </fieldset>
    <fieldset className='ff24'>
    <img className='i14' src='https://png.pngtree.com/png-clipart/20190520/original/pngtree-business-male-icon-vector-png-image_4187852.jpg'/>
    <hr/>
    <center>
    <h2>Altrin</h2>
    <h4>7094741364</h4>
    <h5>Outgoing call</h5>
    <br/>
    <p>you called {count1} times</p>
    </center>
    <div className='login-btn4'>
    <button onClick={handle1} className='btn14'>Call</button>
    <button onClick={d2} className='btn24'>delete</button>
    </div>
    </fieldset>
    </div>
    <br></br>
    <br/>
    <center><h1 className='t14'>Yesterday</h1></center>
    <br></br>
    <br/>
    <div className='f14'>
    <fieldset className='ff14'>
    <img className='i14' src='https://png.pngtree.com/png-clipart/20190520/original/pngtree-business-male-icon-vector-png-image_4187852.jpg'/>
    <hr/>
    <center>
    <h2>Aravind</h2>
    <h4>7094741364</h4>
    <h5>Outgoing call</h5>
    <br/>
    <p>you called {count} times</p>
    </center>
    <div className='login-btn4'>
    <button onClick={handle} className='btn14'>Call</button>
    <button onClick={d1} className='btn24'>delete</button>
    </div>
    </fieldset>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Outgoing