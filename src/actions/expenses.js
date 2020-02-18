import uuid from 'uuid';

//ADD_EXPENSE --> returns an object by default

export const addExpense = ({
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
export const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});


//EDIT_EXPENSE --> returns an object by implicitly

export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates

});