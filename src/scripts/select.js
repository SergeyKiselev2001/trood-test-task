export const select = (filters, items, sortBy) => {
    const sortByCopy = sortBy
    const ascending = sortBy[0] !== '-'
    const fieldName = sortByCopy.replace('-', '')

    let itemsCopy = [...items]

    if (filters.status !== "All") {
        itemsCopy = items.filter((el) => el.status === filters.status);
    }

    if (filters.type !== "All") {
        itemsCopy = items.filter((el) => el.type === filters.type);
    }

    if (typeof items[0][fieldName] === 'number'){
        itemsCopy.sort((a, b) => a[fieldName] - b[fieldName])
    } 

    if (sortBy === 'conditions'){
        const years = itemsCopy.filter(el => el.conditions.indexOf('years') >= 0)
        const months = itemsCopy.filter(el => el.conditions.indexOf('months') >= 0)

        

        debugger
    }

    return ascending ? itemsCopy.reverse() : itemsCopy 
}