import React from 'react';

class Comment extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="commentBlock">
        <img className="pic" src={this.props.user.profileImageURL} height="28" width="28"></img>
        <a className="username" href="">{this.props.user.username}</a>
        <p className="comment">{this.props.user.comment}</p>
      </div>
    )
  }
}

export default Comment;