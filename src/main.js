import {createBoardTemplate} from "./components/board.js";
import {createSiteMenuTemplate} from "./components/site-menu";
import {createFilterTemplate} from "./components/filter.js";
import {createSortingTemplate} from "./components/sorting.js";
import {createTaskEditTemplate} from "./components/task-edit.js";
import {createTaskTemplate} from "./components/task.js";
import {createLoadMoreButtonTemplate} from "./components/load-more-button.js";
import {generateTasks} from "./mock/task.js";
import {generateFilters} from "./mock/filter.js";

const TASK_COUNT = 3;

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteMainElement = document.querySelector(".main");
const siteHeaderElement = siteMainElement.querySelector(".main__control");

const filters = generateFilters();
const tasks = generateTasks(TASK_COUNT);

render(siteHeaderElement, createSiteMenuTemplate(), "beforeend");
render(siteMainElement, createFilterTemplate(filters), "beforeend");
render(siteMainElement, createBoardTemplate(), "beforeend");

const boardElement = siteMainElement.querySelector(".board");
const taskListElement = siteMainElement.querySelector(".board__tasks");

render(boardElement, createSortingTemplate(), "afterbegin");
render(taskListElement, createTaskEditTemplate(tasks[0]), "beforeend");

for (let i = 1; i < tasks.length; i++) {
  render(taskListElement, createTaskTemplate(tasks[i]), "beforeend");
}

render(boardElement, createLoadMoreButtonTemplate(), "beforeend");
