import React from 'react';
import CommentList from './CommentList.jsx';

class SupportSection extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <CommentList />
        <table height="355px" width="250">
        <tbody>
        <tr>
        <td height="28" width="28"><img src="https://s3.amazonaws.com/uifaces/faces/twitter/marakasina/128.jpg" height ="28" width="28"></img></td>
        <td height="28" width="28"><img src="https://s3.amazonaws.com/uifaces/faces/twitter/marakasina/128.jpg" height ="28" width="28"></img></td>
        <td height="28" width="28"><img src="https://s3.amazonaws.com/uifaces/faces/twitter/marakasina/128.jpg" height ="28" width="28"></img></td>
        <td height="28" width="28"><img src="https://s3.amazonaws.com/uifaces/faces/twitter/marakasina/128.jpg" height ="28" width="28"></img></td>
        <td height="28" width="28"><img src="https://s3.amazonaws.com/uifaces/faces/twitter/marakasina/128.jpg" height ="28" width="28"></img></td>
        <td height="28" width="28"><img src="https://s3.amazonaws.com/uifaces/faces/twitter/marakasina/128.jpg" height ="28" width="28"></img></td>
        <td height="28" width="28"><img src="https://s3.amazonaws.com/uifaces/faces/twitter/marakasina/128.jpg" height ="28" width="28"></img></td>
        <td height="28" width="28"><img src="https://s3.amazonaws.com/uifaces/faces/twitter/marakasina/128.jpg" height ="28" width="28"></img></td>
        <td height="28" width="28"><img src="https://s3.amazonaws.com/uifaces/faces/twitter/marakasina/128.jpg" height ="28" width="28"></img></td>
        <td height="28" width="28"><img src="https://s3.amazonaws.com/uifaces/faces/twitter/marakasina/128.jpg" height ="28" width="28"></img></td>
        </tr>
        </tbody>
        </table>
      </div>
    )
  }
}

export default SupportSection;