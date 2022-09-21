import classes from './../../styles/first.module.css'

const ProgressBarInfo = ({ items }) => {
    const valueSum = items.reduce((prev, current) => (prev += current.value), 0);

    return (
        <div className={classes.info_block}>
            {items.map((el, index) => (
                <div key={index} className={classes.info_block__item}>
                    <div
                        className={classes.info_block__circle}
                        style={{ backgroundColor: el.color }}
                    />
                    <span className={classes.info_block__caption}>
                        {`${el.name}: ${el.value} (${((el.value / valueSum) * 100).toFixed(1)}%)`}
                    </span>
                </div>
            ))}
        </div>
    );
};

export default ProgressBarInfo;
