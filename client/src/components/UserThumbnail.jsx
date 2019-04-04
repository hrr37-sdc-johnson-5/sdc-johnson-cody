import React from 'react';

class UserThumbnail extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <img className="thumbnail" src={this.props.user.profileImageURL} height ="22px" width="22px"></img>
    );
  }
}

export default UserThumbnail;