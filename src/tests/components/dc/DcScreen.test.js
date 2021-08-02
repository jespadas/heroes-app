import { shallow } from "enzyme";
import { DcScreen } from "../../../components/dc/DcScreen";

describe('Test in <DcScreen />', () => {

    const wrapper = shallow(<DcScreen />);

    test('Should be displayed correctly', () => {

        expect(wrapper).toMatchSnapshot();

    });

});
