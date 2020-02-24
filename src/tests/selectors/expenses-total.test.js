import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 when no expenses are found', () => {
    const res = selectExpensesTotal([]);
    expect(res).toBe(0);
});

test('should correctly add up a single expense', () => {
    const givenExpense = [expenses[1]];
    const result = selectExpensesTotal(givenExpense);
    expect(result).toBe(expenses[1].amount)
});


test('should correctly add up a multiple expenses', () => {
    const result = selectExpensesTotal(expenses);
    const sum = expenses[0].amount + expenses[1].amount + expenses[2].amount;
    expect(result).toBe(sum);
});