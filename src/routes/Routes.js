import React from 'react'
import { Navigate, Route, Routes as Router } from 'react-router-dom'
import Home from '../modules/Home'
import Form from '../modules/Authorization'

const PrivateRoute = ({children}) =>{
 const isUserLoggedIn = window.localStorage.getItem('user:token') || true
 const isFormPages = window.location.pathname.includes('account');

 if(isUserLoggedIn && !isFormPages){
  return children
 }
 if(!isUserLoggedIn && isFormPages){
  return children
 }
 else{
  const redirectUrl = isUserLoggedIn ? '/' : '/account/signin'
 return <Navigate to={redirectUrl} />
 }
}

const Routes = () => {
  const routes = [
    {
      id: 1,
      name: "home",
      Component: <Home/>,
      path : '/'
    },
    {
      id: 2,
      name: "Sign in",
      Component: <Form/>,
      path : '/account/signin'
    },
    {
      id: 3,
      name: "Sign Up",
      Component: <Form/>,
      path : '/account/signup'
    },
  ]
  return (
    <div>
        <Router>
         {
          routes.map(({id, name, path, Component}) =>{
            return <Route key={id} path={path} element={ <PrivateRoute> {Component} </PrivateRoute>} />
          })
         }

        </Router>
    </div>
  )
}

export default Routes