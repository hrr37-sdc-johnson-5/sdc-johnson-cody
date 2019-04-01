import React from 'react';
import UserPhotoGrid from '../components/UserPhotoGrid.jsx';
import { shallow } from 'enzyme';

test('<UserPhotoGrid/>', () => {
  expect(<UserPhotoGrid/>).toBeTruthy();
});