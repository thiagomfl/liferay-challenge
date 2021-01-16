import React from 'react'

import Header from '../components/layout/Header'
import Sidebar from '../components/layout/Sidebar'

import '../styles/pages/dashboard.css'

function Dashboard () {
  return (
    <div className='dashboard'>
      <Sidebar />
      <Header />
    </div>
  )
}

export default Dashboard
