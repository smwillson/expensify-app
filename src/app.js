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
import 'react-dates/lib/css/_datepicker.css';


const store = configureStore();//create the store
//store.dispatch(setTextFilter('gas'));
const state = store.getState();


//The <Provider /> makes the Redux store available to any nested components that have been wrapped in the connect() function.
const jsx = (

    <Provider store={store}>
        <AppRouter />
    </Provider>

);


ReactDOM.render(jsx, document.getElementById('app'));
