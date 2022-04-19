import LangComponent from '@/lang/local';
import { Pagination, Table } from '@douyinfe/semi-ui';
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
        <Fragment>
            <div className='flex-end'>
                {!hidePage && <div className="flex-end">
                    <LangComponent>
                        <Pagination
                            total={100}
                            onChange={(currentPage) => {
                                setParams('page', currentPage)
                            }}
                            size="small"
                            hoverShowPageSelect
                        />
                    </LangComponent>
                </div>}
            </div>
            <div className="pro_table card">
                <LangComponent>
                    <Table
                        onChange={onChange}
                        loading={loading}
                        dataSource={buildDataSource}
                        columns={columns}
                        pagination={false}
                    />
                </LangComponent>
            </div>
        </Fragment>
    )
})
export default BuildTable;