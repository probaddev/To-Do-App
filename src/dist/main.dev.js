"use strict";

var _board = require("./components/board.js");

var _siteMenu = require("./components/site-menu");

var _filter = require("./components/filter.js");

var _sorting = require("./components/sorting.js");

var _taskEdit = require("./components/task-edit.js");

var _task = require("./components/task.js");

var _loadMoreButton = require("./components/load-more-button.js");

var TASK_COUNT = 3;

var render = function render(container, template, place) {
  container.insertAdjacentHTML(place, template);
};

var siteMainElement = document.querySelector(".main");
var siteHeaderElement = siteMainElement.querySelector(".main__control");
render(siteHeaderElement, (0, _siteMenu.createSiteMenuTemplate)(), "beforeend");
render(siteMainElement, (0, _filter.createFilterTemplate)(), "beforeend");
render(siteMainElement, (0, _board.createBoardTemplate)(), "beforeend");
var boardElement = siteMainElement.querySelector(".board");
var taskListElement = siteMainElement.querySelector(".board__tasks");
render(boardElement, (0, _sorting.createSortingTemplate)(), "afterbegin");
render(taskListElement, (0, _taskEdit.createTaskEditTemplate)(), "beforeend");

for (var i = 0; i < TASK_COUNT; i++) {
  render(taskListElement, (0, _task.createTaskTemplate)(), "beforeend");
}

render(boardElement, (0, _loadMoreButton.createLoadMoreButtonTemplate)(), "beforeend");