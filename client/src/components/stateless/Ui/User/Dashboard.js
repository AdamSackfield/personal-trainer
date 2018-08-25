import React from 'react'
import PropTypes from 'prop-types'

const Dashboard = ({ user }) => {
  return (
    <div>
      {user.username}
    </div>
  )
}

Dashboard.propTypes = {
  User: PropTypes.object.isRequired
}

export default Dashboard