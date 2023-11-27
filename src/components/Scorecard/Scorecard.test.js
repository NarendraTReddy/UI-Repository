import React from "react";
import Scorecard, { renderScoresTest } from "./index";
import { shallow } from "enzyme";

const dispatch = () => {};

describe("Scorecard", () => {
  it("should render table with 11 columns", () => {
    const frames = [];
    const cumulativeScores = [];
    const totalScore = 0;
    const state = {
      frames,
      cumulativeScores,
      rolls: 0,
    };
    const props = {
      state,
      dispatch,
      totalScore,
    };
    const wrapper = shallow(<Scorecard {...props} />);
    expect(wrapper.find("th").length).toEqual(11);
  });

  it("should render the correct column headings", () => {
    const frames = [];
    const cumulativeScores = [];
    const totalScore = 0;
    const state = {
      frames,
      cumulativeScores,
      rolls: 0,
    };
    const props = {
      state,
      dispatch,
      totalScore,
    };
    const wrapper = shallow(<Scorecard {...props} />);
    expect(wrapper.find("#c1").text()).toEqual("Frame 1");
    expect(wrapper.find("#c2").text()).toEqual("Frame 2");
    expect(wrapper.find("#c3").text()).toEqual("Frame 3");
    expect(wrapper.find("#c4").text()).toEqual("Frame 4");
    expect(wrapper.find("#c5").text()).toEqual("Frame 5");
    expect(wrapper.find("#c6").text()).toEqual("Frame 6");
    expect(wrapper.find("#c7").text()).toEqual("Frame 7");
    expect(wrapper.find("#c8").text()).toEqual("Frame 8");
    expect(wrapper.find("#c9").text()).toEqual("Frame 9");
    expect(wrapper.find("#c10").text()).toEqual("Frame 10");
    expect(wrapper.find("#c11").text()).toEqual("Total Score");
  });

  it("should render the correct scores", () => {
    const frames = [[0, 0], [1, 6], [7, 3], [10], [4, 5], [8, 0]];
    const cumulativeScores = [0, 7, 20, 19, 8];
    const totalScore = 8;
    const state = {
      frames,
      cumulativeScores,
      rolls: 6,
    };
    const props = {
      state,
      dispatch,
      totalScore,
    };
    const wrapper = shallow(<Scorecard {...props} />);
    expect(wrapper.find("#r1").text()).toEqual("-");
    expect(wrapper.find("#r2").text()).toEqual("-");
    expect(wrapper.find("#r3").text()).toEqual("1");
    expect(wrapper.find("#r4").text()).toEqual("6");
    expect(wrapper.find("#r5").text()).toEqual("7");
    expect(wrapper.find("#r6").text()).toEqual("/");
    expect(wrapper.find("#r7").text()).toEqual("X");
    expect(wrapper.find("#r8").text()).toEqual("");
    expect(wrapper.find("#r9").text()).toEqual("4");
    expect(wrapper.find("#r10").text()).toEqual("5");
    expect(wrapper.find("#r11").text()).toEqual("8");
    expect(wrapper.find("#r12").text()).toEqual("-");
    expect(wrapper.find("#r13").text()).toEqual("");
    expect(wrapper.find("#r14").text()).toEqual("");
  });

  it("should render the correct total score", () => {
    const frames = [[0, 0], [1, 6], [7, 3], [10], [4, 5], [8, 0]];
    const cumulativeScores = [0, 7, 20, 19, 8];
    const totalScore = 8;
    const state = {
      frames,
      cumulativeScores,
      rolls: 6,
    };
    const props = {
      state,
      dispatch,
      totalScore,
    };
    const wrapper = shallow(<Scorecard {...props} />);

    expect(wrapper.find(".Total").text()).toEqual("8");
  });

  it("should render the correct cumulative frame scores", () => {
    const frames = [[0, 0], [1, 6], [7, 3], [10], [4, 5], [8, 0]];
    const cumulativeScores = [0, 7, 20, 19, 8];
    const totalScore = 8;
    const state = {
      frames,
      cumulativeScores,
      rolls: 6,
    };
    const props = {
      state,
      dispatch,
      totalScore,
    };
    const wrapper = shallow(<Scorecard {...props} />);
    expect(wrapper.find("#cumulative-score-f1").text()).toEqual("0");
    expect(wrapper.find("#cumulative-score-f2").text()).toEqual("7");
    expect(wrapper.find("#cumulative-score-f3").text()).toEqual("20");
    expect(wrapper.find("#cumulative-score-f4").text()).toEqual("19");
    expect(wrapper.find("#cumulative-score-f5").text()).toEqual("8");
    expect(wrapper.find("#cumulative-score-f6").text()).toEqual("");
    expect(wrapper.find("#cumulative-score-f7").text()).toEqual("");
    expect(wrapper.find("#cumulative-score-f8").text()).toEqual("");
    expect(wrapper.find("#cumulative-score-f9").text()).toEqual("");
    expect(wrapper.find("#cumulative-score-f10").text()).toEqual("");
  });

  it("returns correct score", () => {
    const frames = [[0, 0], [1, 6], [7, 3], [10], [4, 5], [8, 0]];
    const cumulativeScores = [0, 7, 20, 19, 8];
    const totalScore = 8;
    const state = {
      frames,
      cumulativeScores,
      rolls: 6,
    };
    const props = {
      state,
      dispatch,
      totalScore,
    };
    shallow(<Scorecard {...props} />);

    const renderScores = (frame, roll) => {
      if (frames[frame]) {
        if (frames[frame][roll] === 0) return "-";
        else if (frames[frame][roll] === 10) return "X";
        else if (
          roll === 1 &&
          frames[frame][roll - 1] + frames[frame][roll] === 10
        )
          return "/";
        else return frames[frame][roll];
      }
      return "";
    };

    expect(renderScores(0, 0)).toEqual("-");
    expect(renderScores(0, 1)).toEqual("-");
    expect(renderScores(1, 0)).toEqual(1);
    expect(renderScores(1, 1)).toEqual(6);
    expect(renderScores(2, 0)).toEqual(7);
    expect(renderScores(2, 1)).toEqual("/");
    expect(renderScores(3, 0)).toEqual("X");
    expect(renderScores(3, 1)).toEqual(undefined);
    expect(renderScores(4, 0)).toEqual(4);
    expect(renderScores(4, 1)).toEqual(5);
    expect(renderScores(5, 0)).toEqual(8);
    expect(renderScores(5, 1)).toEqual("-");
    expect(renderScores(6, 0)).toEqual("");
    expect(renderScores(6, 1)).toEqual("");
  });
});
