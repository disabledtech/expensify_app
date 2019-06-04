import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddExpense, addExpense, editExpense, removeExpense, setExpenses, startSetExpenses, startRemoveExpense, startEditExpense } from "../../actions/expenses";
import expenses from '../fixture/expenses';
import database from '../../firebase/firebase';

const createMockStore =  configureMockStore([thunk]);

beforeEach((done) => {
    const expensesData = {};
    expenses.forEach(({ id, description, note, createdAt, amount}) => {
        expensesData[id] = { description, note, amount, createdAt };
    })
    database.ref('expenses').set(expensesData).then(() => {
        done();
    });
});

test ('Should set up removeExpense action.', () => {
    const action = removeExpense({ id: 'anyid'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: 'anyid'
    })
});

test('Should remove an expense from firebase', (done) => {
    const store = createMockStore({});
    const id = expenses[0].id;

    store.dispatch(startRemoveExpense({ id })).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'REMOVE_EXPENSE',
            id
        });
            return database.ref(`expenses/${id}`).once('value');      
        }).then((snapshot) => {
            expect(snapshot.val()).toBeFalsy();
            done();
    });
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

test('Should edit an expense from firebase', (done) => {
    const store = createMockStore({});
    const id = expenses[1].id;
    const updates = {
        description: 'Sombrero'
    }

    store.dispatch(startEditExpense(id, updates)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'EDIT_EXPENSE',
            id,
            updates
        });
            return database.ref(`expenses/${id}`).once('value');      
        }).then((snapshot) => {
            expect(snapshot.val().description).toBe(updates.description);
            done();
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

test('Should setup set expense action with data', () => {
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
    });
});

test('Should fetch expenses from firebase', (done) => {
    const store = createMockStore();
    store.dispatch(startSetExpenses()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'SET_EXPENSES',
            expenses
        });
        done();
    });
});