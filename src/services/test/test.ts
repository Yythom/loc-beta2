import logger from '../../utils/js_utils/logger';
import request from '../config/index'
import { TablItemInterface } from './testInterface';

const get_table_data = async (data
    ?: {
        page: number,
        pageSize: number,
        sortField: string,
        search: string,
    }) => {
    const result = await request<TablItemInterface[]>({
        method: 'get',
        url: '/test',
        params: {
            page: data?.page ?? 1,
            pageSize: data?.pageSize ?? 10,
            sortField: data?.sortField || '',
            search: data?.search || ''
        }
    })
    logger('data', data)
    return result;
}

export {
    get_table_data,
}

