export const categoryItemsCount = (tasks, categories) => {
  const counts = {};

  categories.forEach((category) => {
    counts[category.name] = 0;

    tasks.forEach((task) => {
      if (category.name === task.category.name) counts[category.name]++;
    });
  });

  return counts;
};
