import React from 'react';

class UserThumbnail extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <img src={this.props.user.profileImageURL} height ="28" width="28"></img>
    );
  }
}

export default UserThumbnail;