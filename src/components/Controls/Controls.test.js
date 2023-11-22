import React from "react";
import Controls from "./index";
import { shallow } from "enzyme";

const throwBall = () => {};

describe("Controls", () => {
  it("should not render reset button if rolls less than 1", () => {
    const rolls = 0;
    const state = {
      rolls,
      pins: [],
    };
    const props = {
      state,
      throwBall,
    };
    const wrapper = shallow(<Controls {...props} />);
    expect(wrapper.find("button.Reset").length).toEqual(0);
  });
});
