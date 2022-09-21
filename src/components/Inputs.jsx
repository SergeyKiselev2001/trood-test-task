import { useDispatch, useSelector } from "react-redux";
import { changeHeight, changeWidth } from "../redux/actionCreators";

const Inputs = () => {
    const dispatch = useDispatch();
    const paramsObj = useSelector((store) => store.paramsReducer);

    const widthHandle = (e) => dispatch(changeWidth(e.target.value));
    const heightHandle = (e) => dispatch(changeHeight(e.target.value));

    return (
        <form>
            dss
            <label>
                Width:
                <input
                    type="number"
                    name="width"
                    onChange={widthHandle}
                    value={paramsObj?.width}
                    min={250}
                    max={1000}
                    step={10}
                />
            </label>
            <label>
                Height:
                <input
                    type="number"
                    name="height"
                    onChange={heightHandle}
                    value={paramsObj?.height}
                    min={10}
                    max={100}
                />
            </label>
        </form>
    );
};

export default Inputs;
