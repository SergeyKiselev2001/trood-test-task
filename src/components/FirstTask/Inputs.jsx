import { useDispatch, useSelector } from "react-redux";
import { changeBlocksAmount, changeHeight, changeWidth } from "../../redux/actionCreators";
import classes from './../../styles/first.module.css'

const Inputs = () => {
    const dispatch = useDispatch();
    const paramsObj = useSelector((store) => store.paramsReducer);

    const widthHandle = (e) => dispatch(changeWidth(e.target.value));
    const heightHandle = (e) => dispatch(changeHeight(e.target.value));
    const amountHandle = (e) => dispatch(changeBlocksAmount(e.target.value));

    return (
        <form className={classes.form}>
            <label className={classes.form__label}>
                <span className={classes.form__caption}>Width:</span>
                <input
                    type="range"
                    name="width"
                    onChange={widthHandle}
                    value={paramsObj?.width}
                    min={600}
                    max={1000}
                    step={10}
                    className={classes.form__input}
                />
            </label>
            <label className={classes.form__label}>
                <span className={classes.form__caption}>Height:</span>
                <input
                    type="range"
                    name="height"
                    onChange={heightHandle}
                    value={paramsObj?.height}
                    min={10}
                    max={100}
                    className={classes.form__input}
                />
            </label>
            <label className={classes.form__label}>
                <span className={classes.form__caption}>BlocksAmount:</span>
                <input
                    type="range"
                    name="height"
                    onChange={amountHandle}
                    value={paramsObj?.blocksAmount}
                    min={15}
                    max={150}
                    className={classes.form__input}
                />
            </label>
        </form>
    );
};

export default Inputs;
