import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navigation from './Navigation.jsx'

const user = {
  username :"",
  role :"",
  isAuthenticated : false

}
const { role, isAuthenticated } = user;

const allRoutes = () => {
  return (
    <Route path={"/"} element={<App/>}>
      {Navigation.map((nav, i) => {
        if (isAuthenticated) {
          if (nav.role === role || nav.role === "ALL") {
            return <Route key={i} path={nav.path} element={nav.element} />;
          }
        } else {
          if (!nav.requireAuth && nav.role === "ALL") {
            return <Route key={i} path={nav.path} element={nav.element} />;
          }
          else{
          return (nav.role==="SELLER")
          ? <Route key={i} path={nav.path} element={nav.element} />
          : <Route key={i} path={nav.path} element={nav.element} />; }
        }
        // return null; // Default return to handle other cases
      })}
    </Route>
  )}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {allRoutes()}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
