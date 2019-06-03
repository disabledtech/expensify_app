import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddExpense, addExpense, editExpense, removeExpense } from "../../actions/expenses";
import expenses from '../fixture/expenses';
import database from '../../firebase/firebase';

const createMockStore =  configureMockStore([thunk]);

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
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    });
});

test('Should add expense to database and store', (done) => {
    const store = createMockStore({});
    const expenseData = {
        description: 'Headphones',
        amount: 5000,
        note: 'Sounds great.',
        createdAt: 9000
    }
    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type:  'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });

        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });
});

test('Should add expense with defaults to database and store', (done) => {
    const store = createMockStore({});
    const expenseDefaults = {
        description: '',
        amount: 0,
        note: '',
        createdAt: 0
    }
    store.dispatch(startAddExpense({})).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type:  'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseDefaults
            }
        });

        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseDefaults);
        done();
    });
});