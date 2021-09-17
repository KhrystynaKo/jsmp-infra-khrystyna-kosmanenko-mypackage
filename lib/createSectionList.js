"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createSectionList = void 0;

var createSectionList = function createSectionList(arrayWithNames) {
  return arrayWithNames.sort().reduce(function (acc, name) {
    var firstLetter = name.charAt(0);
    var elemIndex = acc.findIndex(function (elem) {
      return elem.name === firstLetter;
    });

    if (elemIndex >= 0) {
      if (!acc[elemIndex].data.includes(name)) {
        acc[elemIndex].data.push(name);
      }
    } else {
      acc.push({
        name: firstLetter,
        data: [name]
      });
    }

    return acc;
  }, []);
};

exports.createSectionList = createSectionList;
console.log(createSectionList(['Anna', 'Loren', 'Kary', 'Anabel', 'Leo']));