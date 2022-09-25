import classes from "./../../styles/first.module.css";

const Input = ({ onChangeHandle, value, caption, name, min, max, step = 1 }) => {
  return (
    <label className={classes.form__label}>
      <span className={classes.form__caption}>
        { caption }
      </span>
      <input
        type="range"
        name={name}
        onChange={onChangeHandle}
        value={value}
        min={min}
        max={max}
        step={step}
        className={classes.form__input}
      />
    </label>
  );
};

export default Input
