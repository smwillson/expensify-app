import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';


const demoState = {
    expenses: [{
        id: 'abc',
        desc: 'rent',
        note: 'final payment for address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount',//date or amount
        startDate: undefined,
        endDate: undefined
    }
};

//ADD_EXPENSE --> returns an object by default

const addExpense = ({
    desc = '',
    note = '',
    amount = 0,
    createdAt = 0 } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        desc,
        note,
        amount,
        createdAt
    }
});

//REMOVE_EXPENSE --> returns an object by default
const removerExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});


//EDIT_EXPENSE --> returns an object by implicitly

const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates

});

//Expenses Reducer

const expensesReducerDefaultState = []
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            {
                return [...state, action.expense];
            }
        case 'REMOVE_EXPENSE':
            {
                return state.filter((expense) => expense.id !== action.id);
            }
        case 'EDIT_EXPENSE': {
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    };
                } else {
                    return expense;
                }
            });
        }
        default: return state;
    }
};

//Filters Reducer

const filtersDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}
const filtersReducer = (state = filtersDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER': {
            return {
                ...state,
                text: action.text
            };
        }
        case 'SORT_BY_AMT': {
            return {
                ...state,
                sortBy: 'amount'
            }
        }
        case 'SORT_BY_DATE': {
            return {
                ...state,
                sortBy: 'date'
            };
        }
        case 'SET_START_DATE': {
            return {
                ...state,
                startDate: action.date

            };
        }
        case 'SET_END_DATE': {
            return {
                ...state,
                endDate: action.date

            };
        }
        default: return state;
    }
};


/*************************** Filter action generators*********************************/

//SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});


//SORT_BY_AMT
const sortByAmount = () => ({
    type: 'SORT_BY_AMT'
});

//SORT_BY_DATE
const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

//SET_START_DATE
const setStartDate = (date) => ({
    type: 'SET_START_DATE',
    date

});

//SET_END_DATE

const setEndDate = (date) => ({
    type: 'SET_END_DATE',
    date

});

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

//Get visible expenses

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;;
        const textMatch = (expense.desc.toLowerCase()).includes(text.toLowerCase());


        //stateDateMatch


        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    });
};

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});



const exp1 = store.dispatch(addExpense({ desc: 'rent', amount: 100, createdAt: -2000 }));


const exp2 = store.dispatch(addExpense({ desc: 'vacation', note: 'vacation @ Bahamas', amount: 800, createdAt: -1000 }));


// store.dispatch(removerExpense({ id: exp1.expense.id }));


// store.dispatch(editExpense(exp2.expense.id, { amount: 5000 }));

//store.dispatch(setTextFilter('RE'));

// store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());


//store.dispatch(setStartDate(0));
// store.dispatch(setStartDate());


//store.dispatch(setEndDate(1250));
// store.dispatch(setEndDate());
// const person = {
//     name: 'jen',
//     age: 23
// };


// console.log({ ...person, location: "stl" });