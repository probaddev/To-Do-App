"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createTaskTemplate = void 0;

var createTaskTemplate = function createTaskTemplate() {
  return "<article class=\"card card--black\">\n      <div class=\"card__form\">\n        <div class=\"card__inner\">\n          <div class=\"card__control\">\n            <button type=\"button\" class=\"card__btn card__btn--edit\">\n              edit\n            </button>\n            <button type=\"button\" class=\"card__btn card__btn--archive\">\n              archive\n            </button>\n            <button\n              type=\"button\"\n              class=\"card__btn card__btn--favorites card__btn--disabled\"\n            >\n              favorites\n            </button>\n          </div>\n\n          <div class=\"card__color-bar\">\n            <svg class=\"card__color-bar-wave\" width=\"100%\" height=\"10\">\n              <use xlink:href=\"#wave\"></use>\n            </svg>\n          </div>\n\n          <div class=\"card__textarea-wrap\">\n            <p class=\"card__text\">Example default task with default color.</p>\n          </div>\n\n          <div class=\"card__settings\">\n            <div class=\"card__details\">\n              <div class=\"card__dates\">\n                <div class=\"card__date-deadline\">\n                  <p class=\"card__input-deadline-wrap\">\n                    <span class=\"card__date\">23 September</span>\n                    <span class=\"card__time\">16:15</span>\n                  </p>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </article>";
};

exports.createTaskTemplate = createTaskTemplate;