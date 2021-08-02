import React from 'react';
import { mount } from 'enzyme';
import { HeroScreen } from "../../../components/heroes/HeroScreen";
import { MemoryRouter, Route } from 'react-router';


describe('Test in <HeroScreen />', () => {

    const historyMock = {
        length: 10,
        push: jest.fn(),
        goBack: jest.fn()
    }

    test('Should display redirect component if no args in url', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero']}>
                <HeroScreen history={historyMock} />
            </MemoryRouter>
        );

        expect(wrapper.find('Redirect').exists()).toBe(true);

    });

    test('Should display a hero if the params exists and it finds it', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route path="/hero/:heroId" component={HeroScreen} />
            </MemoryRouter>
        );

        expect(wrapper.find('.row').exists()).toBe(true);

    });

    test('Should go back to last page with PUSH', () => {

        const historyMock = {
            length: 1,
            push: jest.fn(),
            goBack: jest.fn()
        }

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route
                    path="/hero/:heroId"
                    component={(props) => <HeroScreen history={historyMock} />}
                />
            </MemoryRouter>
        );

        wrapper.find('button').prop('onClick')();
        expect(historyMock.push).toHaveBeenCalledWith('/');
        expect(historyMock.push).toHaveBeenCalled();

    });

    test('Should go back to last page with goBack', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route
                    path="/hero/:heroId"
                    component={(props) => <HeroScreen history={historyMock} />}
                />
            </MemoryRouter>
        );

        wrapper.find('button').prop('onClick')();
        expect(historyMock.push).toHaveBeenCalledTimes(0);
        expect(historyMock.goBack).toHaveBeenCalled();

    });

    test('Should call Redirect if hero does not exists', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider15151515']}>
                <Route
                    path="/hero/:heroId"
                    component={(props) => <HeroScreen history={historyMock} />}
                />
            </MemoryRouter>
        );

        expect(wrapper.text()).toBe('');

    });


});
