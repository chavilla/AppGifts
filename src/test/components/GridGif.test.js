import React from 'react';
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
        }];

        useFetchGifs.mockReturnValue({
            data: gifts,
            loading:false
        });

        const wrapper=shallow(<GridGif category={'Soy una categoría'}/>)

        expect(wrapper).toMatchSnapshot();


    });
})