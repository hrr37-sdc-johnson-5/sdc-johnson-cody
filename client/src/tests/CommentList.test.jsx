import React from 'react';
import CommentList from '../components/CommentList.jsx';
import { shallow } from 'enzyme';

test('<CommentList/>', () => {
  expect(<CommentList/>).toBeTruthy();
});