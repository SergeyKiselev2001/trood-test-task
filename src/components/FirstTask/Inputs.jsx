import { useDispatch, useSelector } from "react-redux";
import {
  changeBlocksAmount,
  changeHeight,
  changeWidth,
} from "../../redux/actionCreators";
import Input from "./Input";
import classes from "./../../styles/first.module.css";

const Inputs = () => {
  const dispatch = useDispatch();
  const paramsObj = useSelector((store) => store.paramsReducer);

  const widthHandle = (e) => dispatch(changeWidth(e.target.value));
  const heightHandle = (e) => dispatch(changeHeight(e.target.value));
  const amountHandle = (e) => dispatch(changeBlocksAmount(e.target.value));

  return (
    <form className={classes.form}>
      <Input
        onChangeHandle={widthHandle}
        value={paramsObj?.width}
        caption={'Width:'}
        name={"width"}
        min={650}
        max={1100}
        step={10}
      />
      <Input
        onChangeHandle={heightHandle}
        value={paramsObj?.height}
        caption={'Height:'}
        name={"height"}
        min={10}
        max={100}
      />
    <Input
        onChangeHandle={amountHandle}
        value={paramsObj?.blocksAmount}
        caption={'BlocksAmount:'}
        name={"blocks amount"}
        min={15}
        max={150}
      />
    </form>
  );
};

export default Inputs;
