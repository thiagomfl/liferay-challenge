import React, { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'

import Sidebar from '../components/Sidebar'
import { FETCH_GITHUB_PROFILE, FETCH_GITHUB_REPOSITORY } from '../utils/graphql'

import '../styles/pages/dashboard.css'

function Dashboard () {
  const [values, setValues] = useState({ username: 'thienry', repository: 'gfinder' })
  const { username, repository } = values
  const { loading, data } = useQuery(FETCH_GITHUB_REPOSITORY, { variables: { repository, username } })
  
  function handleChange (event: any)  {
    setValues({ ...values, [event.target.name]: event.target.value })
  }
  
  useEffect(() => {
    if (values.username.length >= 3 && values.repository.length >= 3) {
    }
  }, [values])

  return (
    <div className='dashboard'>
      <Sidebar />
      <header className='header'>
        {!loading ? console.log(data) : loading}
        <input
          type='text'
          name='username'
          className='username'
          placeholder='Github username'
          onChange={handleChange}
          value={values.username}
        />

        <input
          type='text'
          name='repository'
          className='repository-name'
          placeholder='Github repository name'
          onChange={handleChange}
          value={values.repository}
        />
      </header>
      <main>
        {/**  Chart components  */}
      </main>
    </div>
  )
}

export default Dashboard
