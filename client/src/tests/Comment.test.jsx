import React from 'react';
import ReactDOM from 'react-dom';
import Comment from '../components/Comment.jsx';

test('<Comment/>', () => {
  console.log(<Comment/>)
  expect(<Comment/>).toBeTruthy();
})

test('Fake test', () => {
  expect(true).toBeTruthy();
})