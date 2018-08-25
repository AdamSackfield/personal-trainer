import React from 'react'

const Profile = ({ user }) => {
  const { username } = user
  return (
    <div>
      <h1>Username: {username}</h1>
    </div>
  )
}

export default Profile