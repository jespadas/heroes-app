import React from 'react';
import { mount } from 'enzyme';
import { PrivateRoute } from '../../routers/PrivateRoute';
import { MemoryRouter } from 'react-router-dom';

describe('Test in <PrivateRoute />', () => {

    const props = {
        location: {
            pathname: '/marvel'
        }
    };

    Storage.prototype.setItem = jest.fn();

    test('Should display component if logged: true and save in localStorage', () => {

        const wrapper = mount(
            <MemoryRouter>
                <PrivateRoute
                    isAuthenticated={true}
                    component={() => <span>Done!</span>}
                    {...props}
                />
            </MemoryRouter>
        );

        //console.log(wrapper.html());
        expect(wrapper.find('span').exists()).toBe(true);
        expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/marvel');

    });

    test('Should blocked component if logged: false', () => {

        const wrapper = mount(
            <MemoryRouter>
                <PrivateRoute
                    isAuthenticated={false}
                    component={() => <span>Done!</span>}
                    {...props}
                />
            </MemoryRouter>
        );

        //console.log(wrapper.html());
        expect(wrapper.find('span').exists()).toBe(false);
        expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/marvel');

    });

})
