import React from 'react';
import { shallow } from 'enzyme';

import SpinnerComponent from './spinner';

describe('<SpinnerComponent/> - component', () => {
    let spinner;
    beforeEach(() => {
        spinner = shallow(<SpinnerComponent/>);
    });
    it('should render Spinner', () => {
        expect(spinner.find('.sr-only').text()).toEqual("Loading...");
    });
});
