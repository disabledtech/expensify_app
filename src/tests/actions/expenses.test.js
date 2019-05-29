import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test ('Should set up removeExpense action.', () => {
    const action = removeExpense({ id: 'anyid'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: 'anyid'
    })
});

test('Should set up editExpense action.', () => {
    const action = editExpense('anyid', {note: 'new'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: 'anyid',
        updates: {
            note: 'new'
        }
    });
});

test('Should set up a new addExpense action object with provided values.', () => {
    const expenseData = {
        description: 'rent',
        amount: 100900,
        note: 'may rent',
        createdAt: 1000
    }
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
})

test('Should set up a new addExpense action object with default values.', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: '', 
            note: '', 
            amount: 0, 
            createdAt: 0,
            id: expect.any(String)
        }
    })
})