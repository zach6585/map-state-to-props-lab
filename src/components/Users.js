import React, { Component } from 'react';
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {users: state.users}
}

class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
          {this.props.users.map(e =>
            <li key={e.username}>{e.username}</li>
          )}
          <li>{Object.keys(this.props.users).length}</li>
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here

// connect this component to Redux
export default connect(mapStateToProps)(Users)
