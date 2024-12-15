import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Log from './Log'
import Signup from './Signup'
import Forgotpss from './Forgotpss'
import Nav from './Nav'
import All from './All'
import Income from './Income'
import Outgoing from './Outgoing'
import Missed from './Missed'
import Contact from './Contact'
import Profile from './Feed'
import Feed from './Feed'
import Yprofile from './Yprofile'
import Hoc1 from './Hoc1'
import Search from './Search'
const Routerapp = () => {
  const Var1 = Hoc1(All)
  return (
    <div>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Log/> }/>
    <Route path='/st' element={[<Nav/>,<Contact/>] }/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/log1' element={<Log/> }/>
    <Route path='/fpss' element={<Forgotpss/> }/>
    <Route path='/rec' element={[<Nav/>, <Var1/>] }/>
    <Route path='/in' element={[<Nav/>, <Income />] }/>
    <Route path='/out' element={[<Nav/>, <Outgoing />] }/>
    <Route path='/miss' element={[<Nav/>, <Missed />] }/>
    <Route path='/con' element={[<Nav/>, <Contact />] }/>
    <Route path='/fee' element={[<Nav/>, <Feed />] }/>
    <Route path='/pro' element={[<Nav/>, <Yprofile />] }/>
    <Route path='/l' element={[<Nav/>, <Log />] }/>
    <Route path='/ser' element={[<Nav/>, <Search />] }/>
    </Routes>
    </BrowserRouter> 
    </div>
  )
}

export default Routerapp