import React from 'react';
import Comment from '../components/Comment.jsx';
import {shallow} from 'enzyme';

test('<Comment/>', () => {
  expect(<Comment/>).toBeTruthy();
})

test('Fake test', () => {
  expect(true).toBeTruthy();
})