/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<App />);
});


jest.mock('react-native-paper', () => {

});
jest.mock('react-native-splash-screen', () => {

});
jest.mock('react-native-vector-icons/FontAwesome', () => {

});
jest.mock('@react-navigation/native', () => {
 
});
jest.mock('@react-navigation/bottom-tabs', () => {
 
});
jest.mock('react-navigation-helpers', () => {
 
});
jest.mock('@react-navigation/native-stack', () => {
 
});