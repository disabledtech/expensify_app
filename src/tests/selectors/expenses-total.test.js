import expenses from '../fixture/expenses';
import expensesTotal from '../../selectors/expenses-total';

test('Should return 0 if no expenses.', () => {
    const total = expensesTotal([]);
    expect(total).toBe(0);
})

test('Should return the value of a single expense.', () => {
    const expense = expenses[0];
    const total = expensesTotal([expense]);
    expect(total).toBe(expense.amount);
});

test('Should return the total of all expenses', () => {
    const total = expensesTotal(expenses);
    const expected = expenses[0].amount + expenses[1].amount +  expenses[2].amount;
    expect(total).toBe(expected);
})