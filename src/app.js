import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from './selectors/expenses';
import { Provider } from 'react-redux';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses);
});

store.dispatch(addExpense({ description: "water bill", amount: 500, createdAt: 100 }));
store.dispatch(addExpense({ description: "electrical bill", amount: 2500, createdAt: -2000 }));
store.dispatch(addExpense({ description: "rent", amount: 100, createdAt: 2100 }));


const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>   
)

ReactDOM.render(jsx, document.getElementById('App'));
