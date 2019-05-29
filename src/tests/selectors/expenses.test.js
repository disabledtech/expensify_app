import selectExpenses from "../../selectors/expenses";
import moment from 'moment';
import testExpenses from '../fixture/expenses';

test('Should filter by text value.', () => {
    const filters = {
        text: 'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectExpenses(testExpenses, filters);
    expect(result).toEqual([testExpenses[2], testExpenses[1]]);
});

test('Should filter by startDate', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    };
    const result = selectExpenses(testExpenses, filters);
    expect(result).toEqual([testExpenses[2], testExpenses[0]]);
});

test('Should filter by endDate', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0)
    };
    const result = selectExpenses(testExpenses, filters);
    expect(result).toEqual([testExpenses[0], testExpenses[1]]);
});

test('Should filter by date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectExpenses(testExpenses, filters);
    expect(result).toEqual([testExpenses[2], testExpenses[0], testExpenses[1]]);
});

test('Should filter by amount', () => {
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectExpenses(testExpenses, filters);
    expect(result).toEqual([testExpenses[1], testExpenses[2], testExpenses[0]]);
});