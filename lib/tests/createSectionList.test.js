"use strict";

var _createSectionList = require("../createSectionList");

describe("createSectionList", function () {
  var input = ["Anna", "Loren", "Katy", "Anabel", "Leo"];
  var output = [{
    name: "A",
    data: ["Anabel", "Anna"]
  }, {
    name: "K",
    data: ["Katy"]
  }, {
    name: "L",
    data: ["Leo", "Loren"]
  }];
  it("should return section list", function () {
    var result = (0, _createSectionList.createSectionList)(input);
    expect(result).toEqual(output);
  });
});