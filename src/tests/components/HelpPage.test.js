import React from 'react';
import HelpPage from '../../components/HelpPage';
import { shallow } from 'enzyme';

test('Help page should be displayed to user.',()=>{
 const wrapper = shallow(<HelpPage/>);
 expect(wrapper).toMatchSnapshot();
});
