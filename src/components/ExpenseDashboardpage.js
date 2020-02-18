import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import React from 'react';


const ExpenseDashboardpage = () => (
    <div>
        <ExpenseListFilters />
        <ExpenseList />
    </div>
);



export default ExpenseDashboardpage;