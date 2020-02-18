import React from 'react';
import expenses from '../fixtures/expenses';
import { shallow } from 'enzyme';
import ExpenseListItem from '../../components/ExpenseListItem';

test('should render an expense list item',()=>{
    const wrapper = shallow(<ExpenseListItem {...expenses[0]}/>);
    expect(wrapper).toMatchSnapshot();

});