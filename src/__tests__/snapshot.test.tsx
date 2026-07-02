import React from 'react';
import renderer from 'react-test-renderer';
import Dashboard from '../Dashboard';

describe('Dashboard', () => {
  it('renders correctly', () => {
    // Mock the current date to ensure snapshot stability
    jest.spyOn(Date, 'now').mockReturnValue(new Date('2024-01-14').getTime());
    const tree = renderer.create(<Dashboard />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});