/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import useSlice from "@/hooks/useSlice";
import useTable from "@/hooks/useTable";
import AddressService from "@/services/address_detail";
import { TransactionInterface, TransactionParams } from "@/services/address_detail/transation_interface";
import { GlobalStateInterface } from "@/store/global_slice";
import { formatUrl } from "@/utils/js_utils/format";
import { Pagination, Spin } from "@douyinfe/semi-ui";
import Text from "@douyinfe/semi-ui/lib/es/typography/text";
import dayjs from "dayjs";
import { Fragment, memo, useMemo, useState } from "react";
import HistoryItem from "./item";

const TrandeTable = memo(() => {
    const [{ mode }] = useSlice<GlobalStateInterface>();
    const url: any = formatUrl();
    const [total, setTotal] = useState(1);

    const {
        params,
        setParams,
        tableData,
        fetch,
        loading
    } = useTable<
        TransactionInterface,
        TransactionParams>(
            AddressService.getTransactions,
            {
                initParams: {
                    page: 1,
                    search: {
                        address: url.address
                    },
                },
                callback: (ret) => {
                    setTotal(ret.total)
                }
            }
        )

    const renderListData = useMemo(() => {
        if (!tableData) return []
        var dateTime: any = []
        const list = tableData?.list?.map((e) => {
            const day = dayjs(e?.blockSignedAt * 1000 || 0).format('YYYY-MM-DD');
            if (!e.proDate && dateTime.findIndex((d: any) => d === day) === -1) {
                e.proDate = day
                dateTime.push(day)
            }
            return {
                ...e
            }
        });
        return list
    }, [tableData])


    return (
        <div className="trans" style={{ height: 'calc(100vh - 18rem)', overflowY: 'scroll', }} >
            <div className='flex' style={{ justifyContent: 'flex-end' }}>
                <Pagination
                    showTotal
                    total={total}
                    pageSize={30}
                    onPageChange={page => setParams('page', page)}
                    size='small'
                    hoverShowPageSelect
                />
            </div>

            <div className='_table'>
                {
                    renderListData.map((e: any, i: number) => {
                        // if()
                        return (
                            <Fragment key={`${e.id}`}>
                                {
                                    e?.proDate && <div style={{ margin: '30px 0 12px 0' }}>
                                        <Text style={{ fontSize: '20px' }} >
                                            {e.proDate}
                                        </Text>
                                    </div>
                                }
                                <HistoryItem item={e} mode={mode} />
                            </Fragment>
                        )
                    })
                }
            </div>
            {/* <LangComponent>

                                    <Table
                                        className='table'
                                        pagination={false}
                                        columns={columns}
                                        dataSource={itm?.transactions || []}
                                    />
                                </LangComponent> */}
            {/* </div> */}

            {!loading && !renderListData[0] && <div className="fc" style={{ height: '60px' }}><Text>No Result</Text></div>}
            {loading && <div className="fc" style={{ height: '60px' }}><Spin size='large' /></div>}
            {/* {
                    (transactions[0] && !loading) && <div className='fc loadmore' style={{ height: '60px', cursor: 'pointer' }} onClick={() => loadmore()}>
                        <Text className='flex' style={{ fontSize: '18px', }}>
                            Load more <IconChevronDown />
                        </Text>
                    </div>
                } */}
        </div>
    )
})

export default TrandeTable