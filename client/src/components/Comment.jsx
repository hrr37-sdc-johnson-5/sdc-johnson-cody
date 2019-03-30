import React from 'react';

class Comment extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <img src="https://s3.amazonaws.com/uifaces/faces/twitter/91bilal/128.jpg" height="28" width="28"></img>
        <a href="">Pierre Conrad</a>
        <p>this album was good</p>
      </div>
    )
  }
}

export default Comment;