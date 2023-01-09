import React from 'react'
import { Route, Routes as Router } from 'react-router-dom'
import Home from '../modules/Home'
import Form from '../modules/Authorization'


const Routes = () => {
  return (
    <div>
        <Router>
         <Route path='/' element={<Home/>}/>
         <Route path='/form' element={<Form/>}/>

        </Router>
    </div>
  )
}

export default Routes