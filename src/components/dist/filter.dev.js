"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createFilterTemplate = void 0;

var createFilterMarkup = function createFilterMarkup(name, count) {
  return "<input\n        type=\"radio\"\n        id=\"filter__all\"\n        class=\"filter__input visually-hidden\"\n        name=\"filter\"\n        checked\n      />\n      <label for=\"filter__all\" class=\"filter__label\">\n      ".concat(name, "\n      <span class=\"filter__all-count\">").concat(count, "</span></label\n      >");
};

var createFilterTemplate = function createFilterTemplate() {
  var filterMarkup = createFilterMarkup("nameFilter", 0);
  return "<section class=\"main__filter filter container\">\n      ".concat(filterMarkup, "\n      ").concat(filterMarkup, "\n      ").concat(filterMarkup, "\n      ").concat(filterMarkup, "\n      ").concat(filterMarkup, "\n      ").concat(filterMarkup, "\n\n    </section>");
};

exports.createFilterTemplate = createFilterTemplate;