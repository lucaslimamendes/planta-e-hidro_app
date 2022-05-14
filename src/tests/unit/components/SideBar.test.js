import React from 'react';
import renderer from 'react-test-renderer';
import SideBar from '../../../components/SideBar';

it('Sidebar component snapshot', () => {
  const component = renderer.create(
    <SideBar />,
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
