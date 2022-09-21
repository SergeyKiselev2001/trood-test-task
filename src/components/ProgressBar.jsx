import OneBlock from "./OneBlock";
import classes from './../styles/style.module.css'

const ProgressBar = ({ items, height, width }) => {
    const blocksAmount = 100;
    const valueSum = items.reduce((prev, current) => prev += current.value, 0)

    const viewArr = items.map(el => {
        return {
            color: el.color,
            amount: el.value === 0 ? 0 : Math.round(blocksAmount / valueSum * el.value) || 1
        }
    })

    const numberOfBlocks = viewArr.reduce((prev, current) => prev += current.amount, 0)

    if (numberOfBlocks !== blocksAmount){
        const difference = numberOfBlocks - blocksAmount

        const biggestElem = viewArr.reduce(
            (prev, cur) =>  (prev.b > cur.b) ? prev : cur
        )

        if (numberOfBlocks > blocksAmount){
            biggestElem.amount-= difference
        } else {
            const difference = blocksAmount - numberOfBlocks
            biggestElem.amount-= difference
        }
    }

    const arrayOfBlocks = []

    viewArr.forEach(element => {
      for (let i = 0; i < element.amount; i++){
        arrayOfBlocks.push(element.color)
      }  
    });


    debugger

    return (
        <div style={{ height, width }} className={classes.progress_bar}>
            {arrayOfBlocks.map((color, index) => (
                <OneBlock key={index} color={color} />
            ))}
        </div>
    );
};

export default ProgressBar;
