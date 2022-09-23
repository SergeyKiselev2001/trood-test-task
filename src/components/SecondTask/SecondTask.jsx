import { useDispatch, useSelector } from "react-redux";
import TokenTable from "./TokenTable";
import { setFilter } from "../../redux/actionCreators";
import classes from './../../styles/second.module.css'

const SecondTask = () => {
    const state = useSelector(store => store.tableDataReducer)
    const { sortBy, filters, tableData } = state

    const dispatch = useDispatch()

    const onSort = () => {

    }
    
    const onFilter = (value) => {
        dispatch(setFilter(value))
    }
    
    const onBuy = (id) => {
        alert(id)
    }

    let items = tableData
    
    if (filters.status !== 'All') {
        items = tableData.filter(el => el.status === filters.status)
    }

    if (filters.type !== 'All'){
        items = items.filter(el => el.type === filters.type)
    }


    const tokenTableProps = {
        items,
        sortBy,
        filters,
        onSort,
        onFilter,
        onBuy
    }

    return (
        <div className={classes.container}>
            <TokenTable {...tokenTableProps} />
        </div>
    )
}

export default SecondTask;