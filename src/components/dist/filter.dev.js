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
  return "<section class=\"main__filter filter container\">\n      ".concat(filterMarkup, "\n      ").concat(filterMarkup, "\n      ").concat(filterMarkup, "\n      ").concat(filterMarkup, "\n      ").concat(filterMarkup, "\n      ").concat(filterMarkup, "\n\n    </section>");
};

exports.createFilterTemplate = createFilterTemplate;