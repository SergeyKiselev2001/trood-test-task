import classes from './../../styles/second.module.css'

const HeaderRow = () => {
    return (
        <tr className={classes.table__header_row}>
            <th>Project</th>
            <th>Token Type</th>
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
