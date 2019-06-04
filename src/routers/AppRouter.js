import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import AddExpense from "../components/AddExpense";
import EditExpense from "../components/EditExpense";
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import Help from "../components/Help";
import NotFound from "../components/NotFound";
import Login from '../components/Login';
import PrivateRoute from './PrivateRoute';

export const history = createHistory()

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <Route path="/" component={Login} exact={true} />
                <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
                <PrivateRoute path="/create" component={AddExpense} />
                <PrivateRoute path="/edit/:id" component={EditExpense} />
                <Route path="/help" component={Help} />
                <Route component={NotFound} />
            </Switch>    
        </div>         
    </Router>
)

export default AppRouter;