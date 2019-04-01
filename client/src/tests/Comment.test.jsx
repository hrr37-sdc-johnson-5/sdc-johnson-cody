import React from 'react';
import Comment from '../components/Comment.jsx';
import {shallow} from 'enzyme';

test('<Comment/>', () => {
  console.log(shallow(<Comment/>));
})

test('Fake test', () => {
  expect(true).toBeTruthy();
})