import React from 'react';

class UserThumbnail extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <img className="thumbnail" src={this.props.user.profileImageURL} height ="26px" width="26px"></img>
    );
  }
}

export default UserThumbnail;