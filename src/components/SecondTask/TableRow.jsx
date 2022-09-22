import classes from './../../styles/second.module.css'

const TableRow = ({ data, onBuy }) => {
    const { name, status, type, conditions, volume, roi, free, hedge, id } = data
    const cells = [ name, type, conditions, `$ ${volume}`, `${roi} %`, free, `${hedge} %` ]
    const pallete = [
        ['green', '#abcfab'],
        ['yellow', '#dfdfb7'],
        ['red', '#e2aaaa'],
    ]
    const backgroundColor = pallete.find(el => el[0] === status)[1]

    const onBuyHandle = () => onBuy(id)

    // name: 'Pyshky.net',
    // status: 'green',
    // type: 'TRST',
    // conditions: 'x2,6 months',
    // volume: 120000,
    // roi: 4, free: 20, hedge: 20

    return (
        <tr className={classes.table__row} style={{ backgroundColor}}>
            {cells.map((el, index) => (
                <td className={classes.table__cell} key={index}>
                    { el }
                </td>
            ))}
            <td className={classes.table__cell}>
                <button onClick={onBuyHandle}>
                    Buy
                </button>
            </td>
        </tr>
    );
};

export default TableRow;
