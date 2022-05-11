import renderer from 'react-test-renderer';
import Home from '../../../pages/Home';

it('Home page snapshot', () => {
  const component = renderer.create(
    <Home />,
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
