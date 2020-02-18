import ExpenseDashboardpage from '../../components/ExpenseDashboardpage';
import React from 'react';
import { shallow } from 'enzyme';

test('Expense dashboard should be displayed to user.',()=>{
    const wrapper = shallow(<ExpenseDashboardpage/>);
    expect(wrapper).toMatchSnapshot();
   });