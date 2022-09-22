import { useSelector } from "react-redux";
import TokenTable from "./TokenTable";
import classes from './../../styles/second.module.css'

const SecondTask = () => {
    const items = useSelector(store => store.tableDataReducer.tableData)

    const headerCell={}
    const filters={}
    const onSort={}
    const onFilter={}
    
    const onBuy = (id) => {
        alert(id)
    } 


    const tokenTableProps = { items, headerCell, filters, onSort, onFilter, onBuy }

    return (
        <div className={classes.container}>
            <TokenTable {...tokenTableProps} />
        </div>
    )
}

export default SecondTask;