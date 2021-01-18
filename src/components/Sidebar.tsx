import React from 'react'
import { useQuery, gql } from '@apollo/client'

import '../styles/components/sidebar.css'

function Sidebar (props: any) {
  const { username } = props
  const { data } = useQuery(FETCH_GITHUB_PROFILE, { variables: { username } })
  
  return (
    <div className='sidebar'>
      {console.log('user: ' + data)}
      <img src={data ? data.user.avatarUrl : 'https://via.placeholder.com/150'} alt='profile' />
    </div>
  )
}

const FETCH_GITHUB_PROFILE = gql`
  query getUserProfile($username: String!) {
    user(login: $username) {
      avatarUrl
    }
  }
`

export default Sidebar
