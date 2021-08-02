import React from 'react';
import { mount } from "enzyme";
import { DashboardRoutes } from "../../routers/DashboardRoutes"
import { MemoryRouter } from 'react-router';
import { AuthContext } from '../../auth/AuthContext';

describe('Test in <DashboardRoutes />', () => {

    test('Should be displayed correctly', () => {

        const contextValue = {
            dispath: jest.fn(),
            user: {
                logged: true,
                name: 'Julio'
            }
        };

        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <DashboardRoutes />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.text-info').text().trim()).toBe('Julio');

    })


})
