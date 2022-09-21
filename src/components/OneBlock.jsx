import classes from './../styles/style.module.css'

const OneBlock = ({ color }) => {

    return (
        <div style={{backgroundColor: color}} className={classes.progress_bar__block} />
    )
}

export default OneBlock