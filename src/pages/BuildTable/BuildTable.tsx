import loacl from '@/lang/semi-ui-local';
import { ConfigProvider, LocaleProvider, Pagination, Table } from '@douyinfe/semi-ui';
import { ColumnProps } from '@douyinfe/semi-ui/lib/es/table';
import { Fragment, memo, } from 'react';

const BuildTable = memo((
    { buildDataSource, columns, loading, setParams, ret, onChange, hidePage, }: {
        buildDataSource: any[],
        columns: ColumnProps<any>[],
        loading: boolean,
        setParams: any,
        ret: any // 原始数据
        onChange?: any
        hidePage?: boolean
    }) => {

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
                                    console.log(currentPage, 'currentPage');

                                    setParams('page', currentPage)
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
                            columns={columns}
                            pagination={false}
                        />
                    </div>
                </Fragment>
            </ConfigProvider>
        </LocaleProvider>
    )
})
export default BuildTable;