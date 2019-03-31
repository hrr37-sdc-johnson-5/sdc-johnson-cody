import React from 'react';
import CommentList from './CommentList.jsx';
import UserTable from './UserTable.jsx';
import $ from 'jquery';

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
        <UserTable users={this.state.users}/>
      </div>
    )
  }
}

export default SupportSection;