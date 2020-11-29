import React from 'react';
import { shallow } from 'enzyme';
import AddCategory from '../../components/AddCategory';

describe('addCategoy component', () => {
    
    // Simulate a funtion
    const setCategory=jest.fn();

    let wrapper=shallow(<AddCategory setCategory={setCategory}/>);

    beforeEach(()=>{
        //cuando una funcion es llamada y se quiere limpiar por decirlo asi
        //jest.clearAllMocks();
        wrapper=shallow(<AddCategory setCategory={setCategory}/>);
    })
    
    test('should show snapshot',()=>{    
        expect(wrapper).toMatchSnapshot();
    });

    test('should to change the inputText',()=>{
        
        const input=wrapper.find('input');
        const value= 'Hola Mundo';

        //change event simulator
        input.simulate('change',{target:{ value:value}});

        expect(wrapper.find('p').text().trim()).toBe(value)

    });

    test('should not post any information',()=>{
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect(setCategory).not.toHaveBeenCalled();

    });

    test('should to call setCategory and clean the input',()=>{

        const value= 'Hola Mundo';
        //simulate inputchange
        const input=wrapper.find('input');
        input.simulate('change', { target:{ value:value}});
        //simulate inputsubmit
        wrapper.find('form').simulate('submit', { preventDefault(){}});
        // called setCategory at least 1 time
        expect(setCategory).toHaveBeenCalled();
        // value should be empty ''
        expect(input.props().value).toBe('');
    })
        
})