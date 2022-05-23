import React from 'react';
import renderer from 'react-test-renderer';
import SideBar from '../../../components/SideBar';

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


it('Sidebar component snapshot', () => {
  const component = renderer.create(
    <SideBar />,
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
