import { types } from "../types/types";

// state example
/* 
    const state = {
    name: 'Julio',
    logged: false
    } 
*/

export const authReducer = (state = {}, action) => {

    switch (action.type) {
        case types.login:
            return {
                ...action.payload,
                logged: true
            }
        case types.logout:
            return {
                logged: false
            }
        default:
            return state;
    }
}