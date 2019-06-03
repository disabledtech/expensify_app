import React from 'react';
import { shallow } from "enzyme";
import { EditExpense } from '../../components/EditExpense';
import expenses from '../fixture/expenses'

let editExpense, startRemoveExpense, history, wrapper;

beforeEach(() => {
    editExpense = jest.fn();
    startRemoveExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<EditExpense editExpense={editExpense} startRemoveExpense={startRemoveExpense} history={history} expense={expenses[2]} />);
})

test('Should render EditExpense correctly.', () => {
    expect(wrapper).toMatchSnapshot();
});

test('Should handle editExpense.', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(editExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);

});

test('Should handle removeExpense.', () => {
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startRemoveExpense).toHaveBeenLastCalledWith({
        id: expenses[2].id
    });

});