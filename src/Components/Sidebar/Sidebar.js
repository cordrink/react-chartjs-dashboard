import React from 'react'
import { Link } from 'react-router-dom'
import iconDashboard from "./analytics.svg";
import './Sidebar.css'

export default function Sidebar() {
  return (
    <nav className='sidenav'>
      <img src={iconDashboard} alt="IconDashboard" />
      <Link to={'/'} >Finances</Link>
      <Link to={'/dashboardEmployees'} >Emploi</Link>
    </nav>
  )
}
