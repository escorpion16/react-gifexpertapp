import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import { GifGridItem } from '../../components/GifGridItem';


describe('Pruebas de <GifGridItem />', () => {
    
    const title = 'es un titulo';
    const url = 'https://localhost/imagen.jpg';
    const wrapper = shallow( <GifGridItem url={ url } title={ title } /> )

    test('debe de mostrar el componente correctamente', () => {

        expect( wrapper ).toMatchSnapshot()
    })

    test('debe de ser igual al title recibido', () => {
        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe( title )
    })

    test('debe ser una url de imagen correcta', () => {
        const image = wrapper.find('img');

        expect( image.prop('src') ).toBe( url )
        expect( image.prop('alt') ).toBe( title )
    })

    test('debe de contener animate__fadeInLeft', () => {
        const div = wrapper.find('div');
        const className = div.prop('className')
        expect( className.includes('animate__fadeInLeft') ).toBe(true)
    })
})

