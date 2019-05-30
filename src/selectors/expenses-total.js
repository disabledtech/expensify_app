export default (expenses) => {
    return expenses.length > 0 ? expenses.reduce((accum, expense) => accum + expense.amount, 0) : 0;
};