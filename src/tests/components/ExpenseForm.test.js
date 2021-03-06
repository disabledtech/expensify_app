import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixture/expenses';
import moment from 'moment';

test('Should render ExpenseForm', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();   
});


test('Should render ExpenseForm with expense data.', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[1]} />);
    expect(wrapper).toMatchSnapshot();   
});


test('Should render error for invalid submission.', () => {
    const wrapper = shallow(<ExpenseForm />);

    expect(wrapper).toMatchSnapshot();  
    wrapper.find('form').simulate('submit', {
        preventDefault: () => { }
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0)
    expect(wrapper).toMatchSnapshot();   
});


test('Should set description on input change', () => {
    const value = "Changed description"
    const wrapper = shallow(<ExpenseForm />);

    expect(wrapper).toMatchSnapshot();
    wrapper.find('input').at(0).simulate('change', {
        target: { value }
    })

    expect(wrapper.state('description')).toBe(value);
    expect(wrapper).toMatchSnapshot();   
});

test('Should set note on textarea change', () => {
    const value = "Changed note"
    const wrapper = shallow(<ExpenseForm />);

    expect(wrapper).toMatchSnapshot();
    wrapper.find('textarea').simulate('change', {
        target: { value }
    })

    expect(wrapper.state('note')).toBe(value);
    expect(wrapper).toMatchSnapshot();   
});

test('Should set amount if valid input.', () => {
    const value = '12.50'
    const wrapper = shallow(<ExpenseForm />);

    expect(wrapper).toMatchSnapshot();
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    })

    expect(wrapper.state('amount')).toBe(value);
    expect(wrapper).toMatchSnapshot();   
});

test('Should NOT set amount if invalid input.', () => {
    const value = '12.50291'
    const wrapper = shallow(<ExpenseForm />);

    expect(wrapper).toMatchSnapshot();
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    })

    expect(wrapper.state('amount').length).toBe(0);
    expect(wrapper).toMatchSnapshot();   
});

test('Should call onSubmit prop for valid form submission.', () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />);
    wrapper.find('form').simulate('submit', {
        preventDefault: () => { }
    });

    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[0].description,
        amount: expenses[0].amount,
        note: expenses[0].note,
        createdAt: expenses[0].createdAt
    })
});

test('Should set new date on date change', () => {
    const wrapper = shallow(<ExpenseForm />);
    const now = moment();

    wrapper.find('SingleDatePicker').prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toEqual(now);
});

test('Should set new focused value on focused change', () => {
    const wrapper = shallow(<ExpenseForm />);
    const focused = true
    wrapper.find('SingleDatePicker').prop('onFocusChange')({ focused });
    expect(wrapper.state('calendarFocused') === true).toBe(true);
});