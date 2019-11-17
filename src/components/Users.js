import React, { Component } from 'react'
import { connect } from 'react-redux'
class Users extends Component {

  listUsernames = () => {
  return this.props.users.map(user => <li>{user.username}, {user.hometown}</li>)
  }

  render () {
    return (
      <div>
        <ul>
          Users!
          {this.listUsernames()}
          <p>{this.props.users.length}</p>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { users: state.users }
}

export default connect(mapStateToProps)(Users)
