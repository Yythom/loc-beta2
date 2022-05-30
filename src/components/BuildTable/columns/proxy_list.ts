import dayjs from "dayjs";
import columnsControl from "./columns_control";

const _columns = {
    _static: [
        {
            title: '代理ID',
            dataIndex: 'agent_id', // 列data映射key
            _sort: 1, // 列排序 
        },
        {
            title: '站点ID',
            dataIndex: 'store_id', // 列data映射key
            _sort: 2, // 列排序 
        },
        {
            title: '代理名称',
            dataIndex: 'agent_name', // 列data映射key
            _sort: 3, // 列排序 
        },

    ],
    _double: [
        {
            title: '代理类型',
            dataIndex: 'type', // 列data映射key
            double_dataIndex: 'message',
            _sort: 5, // 列排序 
        },
        {
            title: '状态',
            dataIndex: 'status', // 列data映射key
            double_dataIndex: 'message',
            _sort: 6, // 列排序 
        },
    ],
    _other: [
        {
            title: '层级',
            dataIndex: 'level',
            render: (text: any) => text + ' 级代理',
            _sort: 4, // 列排序 
        },
        {
            title: '创建时间',
            dataIndex: 'create_at',
            render: (text: any) => dayjs(text * 1000).format('YYYY-MM-DD HH:mm:ss'),
            _sort: 7, // 列排序 
        },
    ]
}

const proxy_list_columns = columnsControl(_columns);
export default proxy_list_columns;