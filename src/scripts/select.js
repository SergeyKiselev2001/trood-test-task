export const select = (filters, items, sortBy) => {
  const fieldName = `${sortBy}`.replace("-", "");
  let itemsCopy = [...items];

  const filtering = (field) =>
    itemsCopy.filter((el) => el[field] === filters[field]);

  if (filters.status !== "All") itemsCopy = filtering("status");
  if (filters.type !== "All") itemsCopy = filtering("type");

  if (typeof items[0][fieldName] === "number") {
    itemsCopy.sort((a, b) => a[fieldName] - b[fieldName]);
  }

  if (sortBy.indexOf("conditions") >= 0) {
    const timeSort = (time) => {
      return itemsCopy
        .filter((el) => el.conditions.indexOf(time) >= 0)
        .sort((a, b) => {
          const toNumber = (str) =>
            Number(str.replace(/[^,.\d]/g, "").replace(",", "."));
          return toNumber(a[fieldName]) > toNumber(b[fieldName]) ? 1 : -1;
        });
    };

    const years = timeSort("years");
    const months = timeSort("months");

    itemsCopy = [...months, ...years];
  }

  if (sortBy.indexOf("name") >= 0 || sortBy.indexOf("type") >= 0) {
    itemsCopy.sort((a, b) => (a[fieldName] > b[fieldName] ? 1 : -1));
  }

  return sortBy.indexOf("-") ? itemsCopy.reverse() : itemsCopy;
};
