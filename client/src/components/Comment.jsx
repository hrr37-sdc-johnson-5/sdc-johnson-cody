import React from 'react';

class Comment extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <img src={this.props.user.profileImageURL} height="28" width="28"></img>
        <a href="">{this.props.user.username}</a>
        <p>{this.props.user.comment}</p>
      </div>
    )
  }
}

export default Comment;