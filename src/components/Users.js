import React, { Component } from "react";
import { connect } from "react-redux";
class Users extends Component {
  renderUserNames = () => {
    return this.props.users.map(user => {
      return <li>{user.username}</li>;
    });
  };

  renderTotalUsers = () => {
    return this.props.userCount;
  };

  render() {
    return (
      <div>
        <ul>
          {this.renderUserNames()}
          {this.renderTotalUsers()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { users: state.users, userCount: state.users.length };
}
export default connect(mapStateToProps)(Users);
