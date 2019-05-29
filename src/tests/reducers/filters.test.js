import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('Setup default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' });
    expect (state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate : moment().endOf('month')
    });
});

test('Should set sortBy to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
    expect(state.sortBy).toBe('amount');
});

test('Should set sortBy to date', () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };
    const action = { type: 'SORT_BY_DATE' };
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date');
});

test('Should set text filter', () => {
    const state = filtersReducer(undefined, { type: 'SET_TEXT_FILTER', text: 'rebel' });
    expect(state.text).toBe('rebel');
})

test('Should set text filter', () => {
    const state = filtersReducer(undefined, { type: 'SET_START_DATE', startDate: moment().startOf('month') });
    expect(state.startDate).toEqual(moment().startOf('month'));
})

test('Should set text filter', () => {
    const state = filtersReducer(undefined, { type: 'SET_END_DATE', endDate: moment().endOf('month') });
    expect(state.endDate).toEqual(moment().endOf('month'));
})