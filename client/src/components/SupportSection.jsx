import React from 'react';
import CommentList from './CommentList.jsx';
import $ from 'jquery';
import UserPhotoGrid from './UserPhotoGrid.jsx';

class SupportSection extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      users: []
    }

    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    $.get('/1', (response) => {
      this.setState({
        users: response
      });
    });
  }

  render() {
    return (
      <div>
        <CommentList users={this.state.users}/>
        <UserPhotoGrid users={this.state.users}/>
      </div>
    )
  }
}

export default SupportSection;