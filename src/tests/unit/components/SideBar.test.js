import renderer from 'react-test-renderer';
import SideBar from '../../../components/SideBar';

it('Home page snapshot', () => {
  const component = renderer.create(
    <SideBar />,
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
