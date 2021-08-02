import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter, Route } from 'react-router-dom';
import { SearchScreen } from '../../../components/search/SearchScreen';

describe('Test in <SearchScreen />', () => {

    test('Should be displayed correctly with default values', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={['/search']}>
                <Route path="/search" component={SearchScreen} />
            </MemoryRouter>
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.alert-info').text().trim()).toBe('Search a hero');

    });

    test('Should display batman from the query-string input value', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <Route path="/search" component={SearchScreen} />
            </MemoryRouter>
        );

        expect(wrapper.find('input').prop('value')).toBe('batman');

    });

    test('Should display an error if hero does not exists', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=batman221515151']}>
                <Route path="/search" component={SearchScreen} />
            </MemoryRouter>
        );

        expect(wrapper.find('.alert-danger').text().trim()).toBe(`There is no a hero called: "batman221515151"`);
        expect(wrapper).toMatchSnapshot();

    });

    test('Should call push from history', () => {

        const historyMock = {
            push: jest.fn()
        };

        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=batman22151']}>
                <Route
                    path="/search"
                    component={() => <SearchScreen history={historyMock} />}
                />
            </MemoryRouter>
        );

        wrapper.find('input').simulate('change', {
            target: {
                name: 'SearchText',
                value: 'batman'
            }
        });

        wrapper.find('form').prop('onSubmit')({
            preventDefault() { }
        });

        expect(historyMock.push).toHaveBeenCalledWith('?q=batman');

    });

});
