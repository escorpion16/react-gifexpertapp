import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import {GifExpertApp} from '../GifExpertApp';

describe('Pruebas en <GifExpertApp />', () => {
    test('debe se mostrar componente correctamente', () => {
        const wrapper = shallow( <GifExpertApp  /> )

        expect( wrapper ).toMatchSnapshot()
    })

    test('debe de mostrar una lista de categorias', () => {
        const categories = ['One Punch', 'Dragon ball'];

        const wrapper = shallow( <GifExpertApp defaultCategory={ categories } /> )
        // expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length ).toBe( categories.length );
    })
})