import HeaderRow from "./HeaderRow";
import TableRow from "./TableRow";
import classes from './../../styles/second.module.css'

const TokenTable = ({
    items,
    headerCell,
    filters,
    onSort,
    onFilter,
    onBuy,
}) => {
    // id: 1,
    // name: 'Pyshky.net',
    // status: 'green',
    // type: 'TRST',
    // conditions: 'x2,6 months',
    // volume: 120000,
    // roi: 4, free: 20, hedge: 20

    return (
        <table className={classes.table}>
            <HeaderRow />
            {
                items.map(el => (
                    <TableRow key={el.id} data={el} onBuy={onBuy} />
                ))
            }
        </table>
    );
};

export default TokenTable;
