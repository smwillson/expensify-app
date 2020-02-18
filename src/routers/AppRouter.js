import AddExpensePage from "../components/AddExpensePage";
import EditExpensePage from "../components/EditExpensePage";
import ExpenseDashboardpage from "../components/ExpenseDashboardpage";
import Header from "../components/Header";
import HelpPage from "../components/HelpPage";
import NotFoundPage from "../components/NotFoundPage";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import React from 'react';

const AppRouter = () => (
    <BrowserRouter>
    <div>
        <Header></Header>
        <Switch>
            <Route path="/" component={ExpenseDashboardpage} exact={true} />
            <Route path="/create" component={AddExpensePage} exact={true} />
            <Route path="/edit/:id" component={EditExpensePage} exact={true} />
            <Route path="/help" component={HelpPage} exact={true} />
            <Route component={NotFoundPage} exact={true} />
        </Switch>
    </div>
</BrowserRouter>
);



export default AppRouter;