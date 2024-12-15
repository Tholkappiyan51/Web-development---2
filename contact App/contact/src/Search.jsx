import React, { useState } from 'react'
import './Search.css'
import { Link } from 'react-router-dom'
import Alert from '@mui/material/Alert';
import axios from 'axios';
import Context from './Context';

const Search = () => {
    const {theme, toggleTheme}=React.useContext(Context)

  const[islog,setLog]=useState(false);
  const[num,setnum]=useState();
  const [data, setData] = useState(null);

  const fetchData = () => {
      
      if(num==='7094741364')
      {
        axios.get('https://fakestoreapi.com/products/6')
             .then(response => {
                console.log(response);
                 setData(response.data);
             })
             .catch(error => {
                 console.error(error);
             });
      setLog(true)
    }
      else if(num==='7094749450')
      {
        axios.get('https://fakestoreapi.com/products/7')
             .then(response => {
                console.log(response);
                 setData(response.data);
             })
             .catch(error => {
                 console.error(error);
             });
      setLog(true)
    }
    else
    {
        setLog(false)
        setnum('')
        alert('Please Enter valid Contact NUmber')
    }
};
function ret()
{
    setLog(false)
}

  return (
      
      <div style={{backgroundColor:theme=== 'light' ? '#fff' : '#333',color:theme=== 'light'?'#333':'#fff'}}>
      <div className="container">
    {islog ? (
        <div>
        {data && (

            <h1>{data.title}</h1>
        )}
        <hr/>
        <div className="link">
          <button type="submit" onClick={ret} className="logins">Research</button> 
        </div>
        <hr/>
        </div>
    )
    :
    (<div>
        <div>
        <input type="text" placeholder='Number' value={num} onChange={(e)=>setnum(e.target.value)}/><br/>
      <hr/>
      <div className="link">
        <button type="submit" onClick={fetchData} className="logins">Login</button> 
      </div>
      <hr/>
    </div>
    </div>
    )
    }
</div>
</div>
  )
}
export default Search