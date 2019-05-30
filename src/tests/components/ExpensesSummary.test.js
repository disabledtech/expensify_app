import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import expenses from '../fixture/expenses';

test('Should render ExpenseSummary for 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expenseTotal={9271} />);
    expect(wrapper).toMatchSnapshot();   
});

test('Should render ExpenseSummary for multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={3} expenseTotal={9222171} />);
    expect(wrapper).toMatchSnapshot();   
});
