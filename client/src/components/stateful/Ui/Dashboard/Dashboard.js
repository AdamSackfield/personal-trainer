import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from '../../../../actions/User/UserActions'
import Profile from '../../../stateless/Ui/User/Dashboard/Profile'

  class Dashboard extends Component {
    componentDidMount() {
      this.props.actions.dashboard();
    }

    render() {
      return this.props.User ? <Profile user={this.props.User} /> : <p>Loading...</p>
    }

  }
  
  const mapStateToProps = (state) => {
    return { User: state.User.user }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      actions: bindActionCreators(Object.assign(userActions), dispatch)
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)