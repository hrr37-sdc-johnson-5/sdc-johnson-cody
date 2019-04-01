import React from 'react';
import ReactDOM from 'react-dom';
import Comment from '../components/Comment.jsx';

test('<Comment/>', () => {
  expect(<Comment/>).toBeTruthy();
})

test('Fake test', () => {
  expect(true).toBeTruthy();
})