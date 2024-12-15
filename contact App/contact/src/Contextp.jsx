import React, { useState } from 'react'
import Context from './Context';

const Contextp = ({children}) => {
    const[theme, setTheme]=useState('light');
    function toggleTheme()
    {
        setTheme(prevTheme=>prevTheme==='light'?'dark':'light')
    }
  return (
    <Context.Provider value={{theme, toggleTheme}}>
    {children}
    </Context.Provider>
  )
}

export default Contextp