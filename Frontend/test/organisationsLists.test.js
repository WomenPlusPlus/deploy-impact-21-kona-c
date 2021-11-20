import React from 'react';
import renderer from 'react-test-renderer';

import OrganisationsListScreen from '../screens/organisationsLists/organisationsListScreen';

// Unit Test
describe('<App />', () => {
  it('has 2 children', () => {
    const tree = renderer.create(<OrganisationsListScreen />).toJSON();
    expect(tree.children.length).toBe(2);
  });
});