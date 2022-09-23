import classes from "./../../styles/second.module.css";

const HeaderRow = ({ filters, onFilter }) => {
    const statusHandle = (e) => onFilter({ status: e.target.value})
    const typeHandle = (e) => onFilter({ type: e.target.value})

    return (
        <tr className={classes.table__header_row}>
            <th>
                <select value={filters.status} onChange={statusHandle}>
                    <option>All</option>
                    <option>red</option>
                    <option>green</option>
                    <option>yellow</option>
                </select>
                Project
            </th>
            <th>Token Type</th>
                <select value={filters.type} onChange={typeHandle}>
                    <option>All</option>
                    <option>TRST</option>
                    <option>THT</option>
                </select>
            <th>Conditions</th>
            <th>Volume</th>
            <th>ROI</th>
            <th>Free float</th>
            <th>Insurance hedge</th>
            <th>empty</th>
        </tr>
    );
};

export default HeaderRow;
