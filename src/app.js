import React from 'react';
import ReactDOM from 'react-dom';
import { addExpense } from './actions/expenses'
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import getVisibleExpenses from './selectors/expenses'
import { Provider } from 'react-redux';
import { setTextFilter } from './actions/filters';
import './styles/styles.scss';
import 'normalize.css/normalize.css';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';


const store = configureStore();//create the store
store.dispatch(addExpense({ desc: 'water bill', note: 'water bill for the month of Jan', amount: 20, createdAt: 450000000 }));

console.log(store.getState());
store.dispatch(addExpense({ desc: 'gas bill', note: 'gas bill for the month of Jan', amount: 40, createdAt: 800000000 }));

store.dispatch(addExpense({ desc: 'rent', note: 'rent', amount: 440, createdAt: 10000000 }));

//store.dispatch(setTextFilter('gas'));
const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

//The <Provider /> makes the Redux store available to any nested components that have been wrapped in the connect() function.
const jsx = (

    <Provider store={store}>
        <AppRouter />
    </Provider>

);
console.log(visibleExpenses);

ReactDOM.render(jsx, document.getElementById('app'));
