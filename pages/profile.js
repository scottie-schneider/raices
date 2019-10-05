import React from 'react'
import Router from 'next/router'
import fetch from 'isomorphic-unfetch'
import nextCookie from 'next-cookies'
import { withAuthSync } from '../utils/auth'
import getHost from '../utils/get-host'
import Header from '../components/Header'
const Profile = props => {
  const { name, login, bio, avatarUrl } = props.data

  return (
    <div>
      <Header />
      <img src={avatarUrl} alt='Avatar' />
      <h1>{name}</h1>
      <p className='lead'>{login}</p>
      <p>{bio}</p>      
    </div>
  )
}

Profile.getInitialProps = async ctx => {
  const { token } = nextCookie(ctx)
  const apiUrl = getHost(ctx.req) + '/api/profile'

  const redirectOnError = () =>
    typeof window !== 'undefined'
      ? Router.push('/login')
      : ctx.res.writeHead(302, { Location: '/login' }).end()

  try {
    const response = await fetch(apiUrl, {
      credentials: 'include',
      headers: {
        Authorization: JSON.stringify({ token })
      }
    })

    if (response.ok) {
      const js = await response.json()
      console.log('js', js)
      return js
    } else {
      // https://github.com/developit/unfetch#caveats
      return await redirectOnError()
    }
  } catch (error) {
    // Implementation or Network error
    return redirectOnError()
  }
}

export default withAuthSync(Profile)