const generateTask = () => {
  return {
    description: "Example default task with default color.",
    dueDate: new Date(),
    color: "pink",
    repeatingDays: null,
    isArchive: true,
    isFavorite: false,
  };
};

const generateTasks = (count) => {
  return new Array(count).fill("").map(generateTask);
};

export {generateTask, generateTasks};
