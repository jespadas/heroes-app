import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { PublicRoute } from '../../routers/PublicRoute';

describe('Test in <PublicRoute />', () => {

    const props = {
        location: {
            pathname: '/marvel'
        }
    };

    Storage.prototype.setItem = jest.fn();

    test('Should not display component if logged: true and save in localStorage', () => {

        const wrapper = mount(
            <MemoryRouter>
                <PublicRoute
                    isAuthenticated={true}
                    component={() => <span>Done!</span>}
                    {...props}
                />
            </MemoryRouter>
        );

        //console.log(wrapper.html());
        expect(wrapper.find('span').exists()).toBe(false);
        expect(localStorage.setItem).toHaveBeenCalledTimes(0);

    });

    test('Should blocked component if logged: true', () => {

        const wrapper = mount(
            <MemoryRouter>
                <PublicRoute
                    isAuthenticated={true}
                    component={() => <span>Done!</span>}
                    {...props}
                />
            </MemoryRouter>
        );

        //console.log(wrapper.html());
        expect(wrapper.find('span').exists()).toBe(false);
        expect(localStorage.setItem).toHaveBeenCalledTimes(0);

    });

})
