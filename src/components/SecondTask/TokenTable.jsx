import HeaderRow from "./HeaderRow";
import TableRow from "./TableRow";
import { select } from "../../scripts/select";
import classes from "./../../styles/second.module.css";

const TokenTable = ({ items, sortBy, filters, onSort, onFilter, onBuy }) => {
  const selectedItems = select(filters, items, sortBy);

  return (
    <table className={classes.table}>
      <HeaderRow filters={filters} onFilter={onFilter} onSort={onSort} />
      <tbody>
        { selectedItems.map((el) => (
          <TableRow key={el.id} data={el} onBuy={onBuy} />
        ))}
      </tbody>
    </table>
  );
};

export default TokenTable;
