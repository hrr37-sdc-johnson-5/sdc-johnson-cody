import React from 'react';
import UserThumbnail from './UserThumbnail.jsx';

class UserTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      {this.props.users.map(user => {
        return (
          <UserThumbnail user={user} key={user.id}/>
        )
      })}
      </div>
    )
  }
}

export default UserTable;