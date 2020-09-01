"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createFilterTemplate = void 0;

var createFilterMarkup = function createFilterMarkup() {
  return "<input\n        type=\"radio\"\n        id=\"filter__all\"\n        class=\"filter__input visually-hidden\"\n        name=\"filter\"\n        checked\n      />\n      <label for=\"filter__all\" class=\"filter__label\">\n        All <span class=\"filter__all-count\">13</span></label\n      >";
};

var createFilterTemplate = function createFilterTemplate() {
  var filterMarkup = createFilterMarkup();
  return "<section class=\"main__filter filter container\">\n      ".concat(filterMarkup, "\n      ").concat(filterMarkup, "\n      ").concat(filterMarkup, "\n      ").concat(filterMarkup, "\n      ").concat(filterMarkup, "\n      ").concat(filterMarkup, "\n\n    </section>");
};

exports.createFilterTemplate = createFilterTemplate;