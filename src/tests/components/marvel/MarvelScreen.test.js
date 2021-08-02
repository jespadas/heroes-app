import { shallow } from "enzyme";
import { MarvelScreen } from "../../../components/marvel/MarvelScreen";

describe('Test in <MarvelScreen />', () => {

    const wrapper = shallow(<MarvelScreen />);

    test('Should be displayed correctly', () => {

        expect(wrapper).toMatchSnapshot();

    });

});