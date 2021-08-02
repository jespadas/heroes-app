import React from 'react';
import { shallow } from 'enzyme';
import { HeroesApp } from '../HeroesApp';

describe('Test in <HeroesApp />', () => {

    let wrapper = shallow(<HeroesApp />);

    test('Should be displayed correctly', () => {

        expect(wrapper).toMatchSnapshot();

    })


})
