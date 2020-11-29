import { shallow } from 'enzyme';
import React from 'react';
import GifExpertApp from '../GifExpertApp';


describe('description', () => {

    test('Create the snapshot',()=>{

        const wrapper=shallow(<GifExpertApp />);

        expect(wrapper).toMatchSnapshot();
    });

    test('should get categories', ()=>{
        const categories=['One Punch', 'Chavo'];
        const wrapper=shallow(<GifExpertApp categories={categories}/>)

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GridGif').length).toBe(2);

    });

})