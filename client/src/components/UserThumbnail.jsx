import React from 'react';

class UserThumbnail extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <a className="thumbnail">
      <span>
      <img src={this.props.user.profileImageURL} height="80px" width="80px"></img>
      <p className="thumbnailUsername">{this.props.user.username}</p>
      </span>
      <img src={this.props.user.profileImageURL} height ="26px" width="26px"></img>
      </a>
    );
  }
}

export default UserThumbnail;