import React from "react";
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';

export const ExpensesSummary = ({ expenseCount, expenseTotal }) => {
    const pluralExpenseOrNot = expenseCount === 1 ? 'expense': 'expenses';
    const total = numeral(expenseTotal / 100).format('$0,0.00');

    return (
        <div>
            {   
                <h2>Viewing a total of { expenseCount } { pluralExpenseOrNot } for { total }.</h2>   
            }
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        expenseCount: selectExpenses(state.expenses, state.filters).length,
        expenseTotal: selectExpensesTotal(selectExpenses(state.expenses, state.filters))
    };
};

export default connect(mapStateToProps)(ExpensesSummary);
