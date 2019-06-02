import React from "react";
import { shallow } from "enzyme";

import ModalPopup from "./modal";

describe("<Modal/> - component", () => {
  const props = { title: "test", body: "test" };
  let modal;
  beforeEach(() => {
    modal = shallow(<ModalPopup {...props} />);
  });
  it("should render Modal", () => {
    expect(modal.find("#modal-popup-body").length).toEqual(1);
  });
  it("should render title", () => {
    expect(modal.find("h6").text()).toEqual("test");
  });
});
