import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import {GridGif} from '../../components/GridGif';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('GridGrif Component', () => {

   
    
    test('snapshot of the component',()=>{

        const gifts=[{
            id: 'ABC',
            title:'Hola Jesus',
            url:'https://www.chaviweb.com'
        }];

        useFetchGifs.mockReturnValue({
            data: gifts,
            loading:false
        });

        const wrapper=shallow(<GridGif category={'Soy una categoría'}/>)

        expect(wrapper).toMatchSnapshot();
    });

    test('show items with useFetchGifs',()=>{

        const gifts=[{
            id: 'ABC',
            title:'Hola Jesus',
            url:'https://www.chaviweb.com'
        },
        {
            id: 'ABCD',
            title:'Hola Jesus',
            url:'https://www.chaviweb.com'
        }];

        useFetchGifs.mockReturnValue({
            data: gifts,
            loading:false
        });

        const wrapper=shallow(<GridGif category={'Soy una categoría'}/>)

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        //Evalute if a component exists
        expect(wrapper.find('GifGridItem').length).toBe(gifts.length)
    });
})