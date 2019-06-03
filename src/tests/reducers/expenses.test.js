import expensesReducer from '../../reducers/expenses';
import testExpenses from '../fixture/expenses';

test('Should default state', () => {
    const state = expensesReducer(undefined, '@@INIT');
    expect(state).toEqual([]);
})

test('Should remove an item with the id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: testExpenses[1].id
    };
    const state = expensesReducer(testExpenses, action);
    expect(state).toEqual([testExpenses[0], testExpenses[2]])
})

test('Should not remove an item when id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: -1
    };
    const state = expensesReducer(testExpenses, action);
    expect(state).toEqual(testExpenses);
});

test('Should add a new expense', () => {
    const expense = {
                        id: '4',
                        description: 'game',
                        note: '',
                        amount: 8000,
                        createdAt: 5000
                    }

    const action = {
        type: 'ADD_EXPENSE',
        expense
    };

    const state = expensesReducer(testExpenses, action);
    expect(state).toEqual([...testExpenses, expense]);
});

test('Should change expense with matching id', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: testExpenses[0].id,
        updates: {
            description: 'food'
        }
    }
    const state = expensesReducer(testExpenses, action);
    expect(state[0].description).toBe('food');
});

test('Should not change when invalid id given.', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: - 1,
        updates: {
            description: 'food'
        }
    }
    const state = expensesReducer(testExpenses, action);
    expect(state).toEqual(testExpenses);
});

test('Should set expenses', () => {
    const action = {
        type: 'SET_EXPENSES',
        expenses: [testExpenses[1]]
    }
    const state = expensesReducer(testExpenses, action);
    expect(state).toEqual([testExpenses[1]])
})