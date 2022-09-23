import HeaderRow from "./HeaderRow";
import TableRow from "./TableRow";
import classes from './../../styles/second.module.css'

const TokenTable = ({
    items,
    sortBy,
    filters,
    onSort,
    onFilter,
    onBuy,
}) => {
    return (
        <table className={classes.table}>
            <HeaderRow filters={filters} onFilter={onFilter} onSort={onSort} />
            {
                items.map(el => (
                    <TableRow key={el.id} data={el} onBuy={onBuy} />
                ))
            }
        </table>
    );
};

export default TokenTable;
