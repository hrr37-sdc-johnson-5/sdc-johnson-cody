import React from 'react';

class UserThumbnail extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <img src="https://s3.amazonaws.com/uifaces/faces/twitter/marakasina/128.jpg" height ="28" width="28"></img>
    );
  }
}

export default UserThumbnail;