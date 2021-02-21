import React from 'react';
import { shallow } from 'enzyme';
import {findByTestAtrr} from '../Utils'
// import HomePage from './HomePage'
import Contact from './Contact'

const setUp = (props={}) => {
    const component = shallow(<Contact {...props} />);
    return component;
};

let component;
beforeEach(() => {
    component = setUp(); 
});


describe('Contact page', () => {
    
    it('Should render without errors', ()=>{
        const wrapper = findByTestAtrr(component, 'ContactComponent')
         expect(wrapper.length).toBe(1);
    });
    // it('Should render a logo', ()=>{
    //     const logo = component.find(`[data-test='LogoIMGClass']`)
    //     expect(logo.length).toBe(1);
    // })

});


