import React from 'react';
import { mount } from "enzyme";
import { LoginScreen } from "../../../components/login/LoginScreen";
import { AuthContext } from '../../../auth/AuthContext';
import { types } from '../../../types/types';

describe('Test in <LoginScreen />', () => {

    const historyMock = {
        replace: jest.fn(),
        push: jest.fn()
    };

    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: true,
            name: 'Julio'
        }
    }

    const wrapper = mount(
        <AuthContext.Provider value={contextValue}>
            <LoginScreen history={historyMock} />
        </AuthContext.Provider>
    );

    test('Should be displayec correctly', () => {

        expect(wrapper).toMatchSnapshot();

    });

    test('Should call dispatch and navigate', () => {

        const handleClick = wrapper.find('button').prop('onClick');

        handleClick();

        expect(contextValue.dispatch).toHaveBeenCalledWith({
            type: types.login,
            payload: {
                name: 'Julio'
            }
        });

        expect(historyMock.replace).toHaveBeenCalled();
        expect(historyMock.replace).toHaveBeenCalledWith('/');

        localStorage.setItem('lastPath', '/dc');

        handleClick();

        expect(historyMock.replace).toHaveBeenCalledWith('/dc');

    });

});