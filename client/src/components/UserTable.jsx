import React from 'react';
import UserThumbnail from './UserThumbnail.jsx';

class UserTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      <UserThumbnail />
      </div>
    )
  }
}

export default UserTable;