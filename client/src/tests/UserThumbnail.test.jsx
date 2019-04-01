import React from 'react';
import UserThumbnail from '../components/UserThumbnail.jsx';
import {shallow} from 'enzyme';

test('<UserThumbnail/>', () => {
  expect(<UserThumbnail/>).toBeTruthy();
});