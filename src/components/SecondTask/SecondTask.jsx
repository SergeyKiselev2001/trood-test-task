import { useDispatch, useSelector } from "react-redux";
import TokenTable from "./TokenTable";
import { setFilter, setSortBy } from "../../redux/actionCreators";
import { select } from "../../scripts/select";
import classes from "./../../styles/second.module.css";

const SecondTask = () => {
    const state = useSelector((store) => store.tableDataReducer);
    const { sortBy, filters } = state;
    const dispatch = useDispatch();

    const items = useSelector((store) => select(filters, store.tableDataReducer.tableData, sortBy));

    const onSort = (value) => dispatch(setSortBy(value));
    const onFilter = (value) => dispatch(setFilter(value));
    const onBuy = (id) => alert(id)

    const tokenTableProps = {
        items,
        sortBy,
        filters,
        onSort,
        onFilter,
        onBuy,
    };

    return (
        <div className={classes.container}>
            <TokenTable {...tokenTableProps} />
        </div>
    );
};

export default SecondTask;
