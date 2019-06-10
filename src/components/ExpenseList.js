import React from "react";
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import SelectExpenses from '../selectors/expenses';

//Named export for tests
export const ExpenseList = (props) => (
    <div className="content-container">
        <div className="list-header">
            <div className="show-for-mobile">Expenses</div>
            <div className="show-for-big-screen">Expense</div>
            <div className="show-for-big-screen">Amount</div>
        </div>
        <div className="list-body">
            {
                props.expenses.length === 0 ? (
                    <div>
                        <span className="list-item list-item--message">
                            No expenses.
                        </span>
                    </div>
                ) : (
                    props.expenses.map ((expense) => (
                        <ExpenseListItem
                            key={expense.id}
                            {...expense}
                        />
                ) 
            ))
            }
        </div>
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: SelectExpenses(state.expenses, state.filters )
    }
}

export default connect(mapStateToProps)(ExpenseList);
