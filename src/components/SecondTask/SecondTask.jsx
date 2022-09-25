import { useDispatch, useSelector } from "react-redux";
import TokenTable from "./TokenTable";
import { setFilter, setSortBy } from "../../redux/actionCreators";
import classes from "./../../styles/second.module.css";

const SecondTask = () => {
  const state = useSelector((store) => store.tableDataReducer);
  const { sortBy, filters } = state;

  const dispatch = useDispatch();
  const items = useSelector((store) => store.tableDataReducer.tableData);

  const onSort = (value) => dispatch(setSortBy(value));
  const onFilter = (value) => dispatch(setFilter(value));
  const onBuy = (id) => alert(id);

  return (
    <div className={classes.container}>
      <TokenTable {...{ items, sortBy, filters, onSort, onFilter, onBuy }} />
    </div>
  );
};

export default SecondTask;
