import React from 'react';
import LoadingPage from '../../components/LoadingPage';
import { shallow } from "enzyme";

test('Should run loadingpage correctly', () => {
    const wrapper = shallow(<LoadingPage />);
    expect(wrapper).toMatchSnapshot();
});