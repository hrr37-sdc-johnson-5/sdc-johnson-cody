import React from 'react';
import CommentList from './CommentList.jsx';
import UserTable from './UserTable.jsx';

class SupportSection extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <CommentList />
        <UserTable />
      </div>
    )
  }
}

export default SupportSection;