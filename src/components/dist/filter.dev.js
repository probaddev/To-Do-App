"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createFilterTemplate = void 0;

var createFilterMarkup = function createFilterMarkup(name, count) {
  return "<input\n        type=\"radio\"\n        id=\"filter__".concat(name, "\"\n        class=\"filter__input visually-hidden\"\n        name=\"filter\"\n        checked\n      />\n      <label for=\"filter__").concat(name, "\" class=\"filter__label\">\n      ").concat(name, "\n      <span class=\"filter__").concat(name, "-count\">").concat(count, "</span></label\n      >");
};

var createFilterTemplate = function createFilterTemplate() {
  var filterMarkup = createFilterMarkup("nameFilter", 0);
  var filtersMarkup = [{
    name: "all",
    count: 18
  }, {
    name: "overdue",
    count: 18
  }, {
    name: "today",
    count: 18
  }, {
    name: "favourites",
    count: 18
  }, {
    name: "repeating",
    count: 18
  }, {
    name: "archive",
    count: 18
  }];
  return "<section class=\"main__filter filter container\">\n          ".concat(filterMarkup, "\n          </section>");
};

exports.createFilterTemplate = createFilterTemplate;