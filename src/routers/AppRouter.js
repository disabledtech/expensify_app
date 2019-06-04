import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import AddExpense from "../components/AddExpense";
import EditExpense from "../components/EditExpense";
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import Header from "../components/Header";
import Help from "../components/Help";
import NotFound from "../components/NotFound";
import Login from '../components/Login';


const AppRouter = () => (
    <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route path="/" component={Login} exact={true} />
                    <Route path="/dashboard" component={ExpenseDashboardPage} />
                    <Route path="/create" component={AddExpense} />
                    <Route path="/edit/:id" component={EditExpense} />
                    <Route path="/help" component={Help} />
                    <Route component={NotFound} />
                </Switch>    
            </div>         
        </BrowserRouter>
)

export default AppRouter;