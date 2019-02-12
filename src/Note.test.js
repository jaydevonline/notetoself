import React from 'react';
import { mount } from 'enzyme';
import Note from './Note';

let props = { note: { text: 'abc'} };


describe('Note', () => {
    let wrapper = mount (<Note {...props} />);

    console.log(wrapper.debug());

    it('should contain a note',() => {
        expect(wrapper.find('p').text()).toEqual('abc');
    });
});