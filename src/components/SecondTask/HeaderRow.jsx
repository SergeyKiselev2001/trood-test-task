import classes from "./../../styles/second.module.css";

const HeaderRow = ({ filters, onFilter, onSort }) => {
  const statusHandle = (e) => onFilter({ status: e.target.value });
  const typeHandle = (e) => onFilter({ type: e.target.value });

  const relations = [
    ["Project", "name"],
    ["Token Type", "type"],
    ["Conditions", "conditions"],
    ["Volume", "volume"],
    ["ROI", "roi"],
    ["Free float", "free"],
    ["Insurance hedge", "hedge"],
  ];

  const onSortHandle = (e) => {
    onSort(relations.find((el) => el[0] === e.target.innerText)[1]);
  };

  return (
    <thead className={classes.table__header_row}>
      <th>
        <select
          value={filters.status}
          onChange={statusHandle}
          className={classes.table__select}
        >
          <option>All</option>
          <option>blue</option>
          <option>violet</option>
          <option>azure</option>
        </select>
        <span onClick={onSortHandle} className={classes.table__header_cell}>
          Project
        </span>
      </th>
      <th className={classes.table__header_cell}>
        <select
          value={filters.type}
          onChange={typeHandle}
          className={classes.table__select}
        >
          <option>All</option>
          <option>TRST</option>
          <option>THT</option>
        </select>
        <span className={classes.table__header_cell} onClick={onSortHandle}>
          Token Type
        </span>
      </th>
      <th className={classes.table__header_cell} onClick={onSortHandle}>
        Conditions
      </th>
      <th className={classes.table__header_cell} onClick={onSortHandle}>
        Volume
      </th>
      <th className={classes.table__header_cell} onClick={onSortHandle}>
        ROI
      </th>
      <th className={classes.table__header_cell} onClick={onSortHandle}>
        Free float
      </th>
      <th className={classes.table__header_cell} onClick={onSortHandle}>
        Insurance hedge
      </th>
      <th></th>
    </thead>
  );
};

export default HeaderRow;
