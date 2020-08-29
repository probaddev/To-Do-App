"use strict";

var createSiteMenuTemplate = function createSiteMenuTemplate() {
  return "<section class=\"control__btn-wrap\">\n      <input\n        type=\"radio\"\n        name=\"control\"\n        id=\"control__new-task\"\n        class=\"control__input visually-hidden\"\n      />\n      <label for=\"control__new-task\" class=\"control__label control__label--new-task\"\n        >+ ADD NEW TASK</label\n      >\n      <input\n        type=\"radio\"\n        name=\"control\"\n        id=\"control__task\"\n        class=\"control__input visually-hidden\"\n        checked\n      />\n      <label for=\"control__task\" class=\"control__label\">TASKS</label>\n      <input\n        type=\"radio\"\n        name=\"control\"\n        id=\"control__statistic\"\n        class=\"control__input visually-hidden\"\n      />\n      <label for=\"control__statistic\" class=\"control__label\"\n        >STATISTICS</label\n      >\n    </section>";
};

var render = function render(container, template, place) {
  container.insertAdjacentHTML(place, template);
};

var siteMainElement = document.querySelector(".main");
var siteHeaderElement = siteMainElement.querySelector(".main__control");
render(siteHeaderElement, createSiteMenuTemplate(), "beforeend");