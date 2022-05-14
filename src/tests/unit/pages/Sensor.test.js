import React from 'react';
import renderer from 'react-test-renderer';
import Sensor from '../../../pages/Sensor';

it('Sensor page snapshot', () => {
  const component = renderer.create(
    <Sensor />,
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
