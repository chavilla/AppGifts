import React from 'react';
import { shallow } from "enzyme";
import GifGridItem from '../../components/GifGridItem';

describe('Test in <GifGridItem />', () => {
    

    const title='Hola';

    const url='www.google.com';

    const wrapper=shallow(<GifGridItem title={title} url={url} />)

    test('show GifGridItem component',()=>{

        expect(wrapper).toMatchSnapshot();

    });

    test('should have a paragraph with title',()=>{
        const p = wrapper.find('p');

        expect(p.text().trim()).toBe(title);
    });

    test('should have an img equal url',()=>{
        const img = wrapper.find('img');

        expect(img.props().src).toBe(url);
    });

    test('verify that the div has a className animate__fadeIn',()=>{
        const classNameAnimate= 'animate__fadeIn';

        const div=wrapper.find('div');
 
        expect( div.props().className.includes(classNameAnimate)).toBe(true)

    });

})