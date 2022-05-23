import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../../../pages/Home';

const mockedUsedNavigate = jest.fn();
const mockedContext = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
 useNavigate: () => mockedUsedNavigate,
}));
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useContext: () => mockedContext,
}));


it('Home page snapshot', () => {
  const component = renderer.create(
    <Home />,
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
