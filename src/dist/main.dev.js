"use strict";

var TASK_COUNT = 3;

var render = function render(container, template, place) {
  container.insertAdjacentHTML(place, template);
};

var siteMainElement = document.querySelector(".main");
var siteHeaderElement = siteMainElement.querySelector(".main__control");
render(siteHeaderElement, createSiteMenuTemplate(), "beforeend");
render(siteMainElement, createFilterTemplate(), "beforeend");
render(siteMainElement, createBoardTemplate(), "beforeend");
var boardElement = siteMainElement.querySelector(".board");
var taskListElement = siteMainElement.querySelector(".board__tasks");
render(taskListElement, createTaskEditTemplate(), "beforeend");

for (var i = 0; i < TASK_COUNT; i++) {
  render(taskListElement, createTaskTemplate(), "beforeend");
}

render(boardElement, createLoadMoreButtonTemplate(), "beforeend");