/* eslint-disable react-hooks/exhaustive-deps */
import loacl from '@/lang/semi-ui-local';
import goTokenEthScan from '@/utils/ui_utils/goTokenEthScan';
import { ConfigProvider, LocaleProvider, Pagination, Table, Tag } from '@douyinfe/semi-ui';
import { ColumnProps } from '@douyinfe/semi-ui/lib/es/table';
import { Fragment, useMemo, } from 'react';
import sortTitle from './sortTitle';

const BuildTable = (
    { buildDataSource, columns, loading, setParams, ret, onChange, hidePage, params }: {
        buildDataSource: any[],
        columns: ColumnProps<any>[],
        loading: boolean,
        params: any,
        setParams: any,
        ret: any // 原始数据
        onChange?: any
        hidePage?: boolean
    }) => {


    const _columns = useMemo(() => {
        if (columns) {
            return columns.map((e: any) => {
                const copyFn: any = e?.render
                if (e?.dataIndex?.includes('token_name')) {
                    e.render = (text: any, record: any, index: any) =>
                        <div
                            className={record?.token_address ? 'hover' : ''}
                            onClick={() => record?.token_address && goTokenEthScan(record?.token_address)}>
                            {copyFn?.(record?.token, record, index) || record?.token?.symbol}
                        </div>
                }
                if (e?.dataIndex?.includes('wallet_address') && e?.dataIndex?.length === 14) {
                    e.render = (text: any, r: any) => {
                        const addr = r?.address
                        const tags = addr?.tags as Array<any>
                        return <div className='flex hover' onClick={() => window.open('/wallet-balance?address=' + (text || r?.address?.wallet_address))}>
                            {addr?.wallet_address_name || (text || addr?.wallet_address)}
                            <div>
                                {
                                    tags?.map(e => {
                                        return (
                                            <Tag style={{ margin: '3px' }}>
                                                {e.tag}
                                            </Tag>
                                        )
                                    })
                                }
                            </div>
                        </div>;
                    }
                }
                const isSort = sortTitle
                    .find(str => {
                        return str.toLocaleLowerCase().includes((e?.title as any)?.toLocaleLowerCase() || '') && str.length === e?.title?.length
                    })
                if (isSort) {
                    e.sorter = true
                    const currentSort = params?.sort?.[e?.dataIndex || '']

                    if (currentSort) {
                        (e as any).sortOrder = `${currentSort}end`
                    } else e.sortOrder = false
                }
                return e
            })
        }
    }, [columns, params])

    return (
        <LocaleProvider locale={loacl['en_US']}>
            <ConfigProvider locale={loacl['en_US']}>
                <Fragment>
                    <div className='flex-end'>
                        {!hidePage && <div className="flex-end">
                            <Pagination
                                pageSize={ret?.page_size}
                                total={ret?.total || 0}
                                currentPage={ret?.page}
                                onChange={(currentPage) => {
                                    setParams('page', {
                                        page: currentPage,
                                        page_size: ret?.page_size
                                    })
                                }}
                                size="small"
                                hoverShowPageSelect
                            />
                        </div>}
                    </div>
                    <div className="pro_table card">
                        <Table
                            onChange={onChange}
                            loading={loading}
                            dataSource={buildDataSource}
                            columns={_columns}
                            pagination={false}
                        />
                    </div>
                </Fragment>
            </ConfigProvider>
        </LocaleProvider>
    )
}
export default BuildTable;