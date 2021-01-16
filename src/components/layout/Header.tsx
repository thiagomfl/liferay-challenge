import React from 'react'

import '../../styles/components/layout/header.css'

function Header () {
  return (
    <header className='header'>
      <input className='username' placeholder='Liferay' />
      <input className='repository-name' placeholder='liferay-portal' />
    </header>
  )
}

export default Header
