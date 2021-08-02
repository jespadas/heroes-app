import { authReducer } from "../../auth/authReducer";
import { types } from '../../types/types';

describe('Test in authReducer', () => {

    test('Should return default state', () => {

        const state = authReducer({ logged: false }, {});
        expect(state).toEqual({ logged: false });

    });

    test('Should authenticate and write user name', () => {

        const action = {
            type: types.login,
            payload: {
                name: 'Julio'
            }
        }
        const state = authReducer({ logged: false }, action);
        expect(state).toEqual({ logged: true, name: 'Julio' });

    });

    test('Should delete user name and change logged to false', () => {

        const action = {
            type: types.logout,
            payload: {}
        }
        const state = authReducer({ logged: true, name: 'Julio' }, action);
        expect(state).toEqual({ logged: false });

    });

})
