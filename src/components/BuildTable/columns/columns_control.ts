const columnsControl = (_columns: any) => {
    return [..._columns._static || [], ..._columns._double || [], ..._columns._other || []].sort((a: any, b: any) => { return a._sort - b._sort }).map(e => {
        const item: any = { ...e }
        if (item?.double_dataIndex) {
            item.render = (text: any, record: any) => {
                return record[item.dataIndex][item.double_dataIndex]
            }
        }
        return item
    })
}
// TODO: 
columnsControl.sort = (_columns: any, key: string) => {
    // 'asc';
    // 'desc'
}

export default columnsControl;
