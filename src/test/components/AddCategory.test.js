import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('Pruebas en AddCategory', () => {

    const setCategories = jest.fn();
    let wrapper = shallow( < AddCategory setCategories={ setCategories } />)

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow( < AddCategory setCategories={ setCategories } />)
    });    

    test('debe de mostrarse correctamente', () => {
        expect( wrapper ).toMatchSnapshot()
    })

    test('debe de cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = "Hola mundo";

        input.simulate('change', { target: {value} });
        const inputValue = wrapper.find('p').text().trim()
        expect( inputValue ).toBe( value )
    })

    test('No debe de postear la informacion con submit', () => {
        wrapper.find('form').simulate('submit', { preventDefault(){} })

        expect( setCategories ).not.toHaveBeenCalled();
    })

    test('debe de llamar setCategories y limpiar la caja de texto', () => {

        const value = 'Hola mundo';
        //1. simular el inputchange
        wrapper.find('input').simulate('change', { target: {value}})
        //2. simular el submit
        wrapper.find('form').simulate('submit', { preventDefault(){} })
        //3. setCategories se debe de haber llamado
        expect( setCategories ).toHaveBeenCalled();
        //4. el valor del input debe de estar en ''
        expect( wrapper.find('input').prop('value') ).toBe('')
        


    })
})