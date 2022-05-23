import React from 'react';
import renderer from 'react-test-renderer';
import Sensor from '../../../pages/Sensor';

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


it('Sensor page snapshot', () => {
  const component = renderer.create(
    <Sensor />,
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
