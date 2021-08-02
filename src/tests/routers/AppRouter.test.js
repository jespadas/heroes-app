import React from 'react';
import { mount } from 'enzyme';
import { AppRouter } from "../../routers/AppRouter"
import { AuthContext } from '../../auth/AuthContext';

describe('Test in <AppRouter />', () => {

    test('Shold display login if not authenticated', () => {

        const contextValue = {
            dispatch: jest.fn(),
            user: {
                logged: false
            }
        };

        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <AppRouter />
            </AuthContext.Provider>
        );

        expect(wrapper).toMatchSnapshot();

    });

    // TODO : need to fix expect error in next test:

    test('Shold display search component if authenticated', () => {

        const contextValue = {
            dispatch: jest.fn(),
            user: {
                logged: true,
                name: 'Julio'
            }
        };

        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <AppRouter />
            </AuthContext.Provider>
        );

        console.log(wrapper.html());
        expect(wrapper.find('.navbar').exists()).toBe(false);

    });

});