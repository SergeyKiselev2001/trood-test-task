import classes from "./../../styles/second.module.css";

const TableRow = ({ data, onBuy }) => {
  const { name, status, type, conditions, volume, roi, free, hedge, id } = data;

  const cells = [name, type, conditions, `$ ${volume}`, `${roi} %`, free, `${hedge} %`];
  const pallete = [
    ["azure", "#c3f3f5"],
    ["violet", "#ceabf7"],
    ["blue", "#8eb0fa"],
  ];

  const backgroundColor = pallete.find((el) => el[0] === status)[1];

  const onBuyHandle = (e) => {
    e.stopPropagation();
    onBuy(id);
  };

  const rowClickHandle = (e) => {
    e.preventDefault();
    window.open(`/project/${data.id}`);
  };

  return (
    <tr
      className={classes.table__row}
      style={{ backgroundColor }}
      onClick={rowClickHandle}
    >
      {cells.map((el, index) => (
        <td className={classes.table__cell} key={index}>
          {el}
        </td>
      ))}
      <td className={classes.table__cell}>
        <button onClick={onBuyHandle} className={classes.table__buy_btn}>
          Buy
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
