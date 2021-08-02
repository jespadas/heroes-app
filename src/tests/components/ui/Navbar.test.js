import '@testing-library/jest-dom';
import { mount } from "enzyme";
import { MemoryRouter } from "react-router";
import { Router } from "react-router-dom";
import { AuthContext } from "../../../auth/AuthContext";
import { Navbar } from "../../../components/ui/Navbar";
import { types } from "../../../types/types";

describe('Test in <Navbar />', () => {

    const historyMock = {
        push: jest.fn(),
        location: {},
        replace: jest.fn(),
        listen: jest.fn(),
        createHref: jest.fn(),
    };

    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: true,
            name: 'Julio'
        }
    };

    const wrapper = mount(
        <AuthContext.Provider value={contextValue}>
            <MemoryRouter>
                <Router history={historyMock} >
                    <Navbar />
                </Router>
            </MemoryRouter>
        </AuthContext.Provider>
    );

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('Should be displayed correctly', () => {

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.text-info').text().trim()).toBe('Julio');

    });

    test('Should call logout and use history', () => {

        wrapper.find('button').prop('onClick')();

        expect(contextValue.dispatch).toHaveBeenCalledWith({
            type: types.logout
        });

        expect(historyMock.replace).toHaveBeenCalledWith('/login');

    });


});
