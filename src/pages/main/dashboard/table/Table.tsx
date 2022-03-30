/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Collapsible, Table } from "@douyinfe/semi-ui";
import { memo, useEffect, useMemo, useState } from "react";
import Text from "@douyinfe/semi-ui/lib/es/typography/text";
import LangComponent from "../../../../lang/local";
import { Pagination, DatePicker, } from '@douyinfe/semi-ui';
import dayjs from "dayjs";
import MoreSetting, { PopContent, } from "./MoreSetting";
import DefaultSetting from "./DefaultSetting";
import { useHistory } from "react-router";
import { getProfitRankList } from "../../../../services/info";
import TrandeSearch from "./TrandeSearch";
import { debounce } from "@/utils/js_utils/format";
import NumberUtils from "@/utils/js_utils/number";
import { DashboardInterface } from "@/services/dasboard/interface";
import useTable from "@/hooks/useTable";

const initSearch = {
    // total_invest_start: '',  //投资总金额开始值
    // total_invest_end: '',

    // total_profit_start: '', //表示收益总金额结束
    // total_profit_end: '',

    // total_profit_rate_start: '', //表示收益率开始值
    // total_profit_rate_end: ''
    "address": "",
    "swapTimes": 1,
    "timeRange": 1
}
export const initParams = {
    "page": 1,
    "page_size": 30,
    "sort": {
        profitUsd: 'desc'
    },
    "search": {
        "address": "",
        "swapTimes": 1,
        "timeRange": 1
    }
}

const Tables = memo(() => {
    const history = useHistory()
    const {
        setParams,
        params,
        tableData,
        loading
    } = useTable<DashboardInterface, any>(
        getProfitRankList,
        {
            initParams,
        }
    )
    const [isOpen, setOpen] = useState(false);
    const [sortOrder, setSortOrder] = useState<any>('descend')

    const columns = useMemo(() => {
        return [
            {
                title: <>
                    Address<PopContent
                        text='Address'
                    />
                </>,
                dataIndex: 'address',
                render: (text: any, record: any, index: any) => {
                    return <div className='flex' style={{ cursor: 'pointer' }} onClick={() => {
                        // window.open(`${window.location.origin}/address?address=${text}`)
                        history.push(`/address?address=${text}`)
                    }}>
                        <Text>{text}</Text>
                    </div>;
                },
            },
            {
                title: <>
                    Invest(USD)<PopContent
                        text={
                            <div>
                                <p>
                                    The cost spent on purchasing tokens during the selected time. The purchasing price is the current price at the time you open Lookonchain. Please check the example below for more details.
                                </p>
                                <p>
                                    On Jan 1, address A purchases 1 ETH for 175 LINK when the ETH price is $3,500 and the LINK price is $20. And we assume address A only trades once in the whole of January.

                                    If you open Lookonchain on Jan 1, the “Invest" of address A is $3,500.

                                    On Jan 2, the price of ETH changes to $4,000.

                                    When you open Lookonchain on Jan 2, the "Invest" of address A on Jan 1st is $4,000.

                                    Invest = (1 ETH) * (ETH price on Jan 2) = 1 * $4,000 = $4,000

                                    Because the price of ETH has changed.
                                </p>
                            </div>
                        }
                    />
                </>,
                dataIndex: 'investUsd',
                render: (text: any, record: any, index: any) => {
                    return <div className='flex'>
                        {NumberUtils.numToFixed(text, 6)}
                    </div>;
                },
                sorter: true,
            },
            {
                title: <>
                    Return(USD)<PopContent
                        text={
                            <div>
                                <p>
                                    The current value of the tokens purchased during the selected time. The token price is the current price at the time you open Lookonchain. Please check the example below for more details.
                                </p>
                                <p>
                                    Example:
                                    On Jan 1, address A purchases 1 ETH for 175 LINK when the ETH price is $3,500 and the LINK price is $20. And we assume address A only trades once in the whole of January.

                                    If you open Lookonchain on Jan 1, the “Return" of address A is $3,500.

                                    On Jan 2, the price of LINK changes to $30.

                                    When you open Lookonchain on Jan 2, the "Return" of address A on Jan 1st is $5,250.

                                    Return = (175 LINK) * ( LINK price on Jan 2) =175 *  $30 = $5,250

                                    Because the price of LINK has changed.
                                </p>
                            </div>
                        }
                    />
                </>,
                dataIndex: 'returnUsd',
                render: (text: any, record: any, index: any) => {
                    return <div className='flex'>
                        {NumberUtils.numToFixed(text, 6)}
                    </div>;
                },
                sorter: true,
            },
            {
                title: <>
                    Profit(USD)<PopContent
                        text={
                            <div>
                                <p>
                                    The value of the tokens purchased during the selected time minus the cost. The token price and purchasing price is the current price at the time you open Lookonchain. Please check the example below for more details.
                                </p>
                                <p>
                                    Example:

                                    On Jan 1, address A purchases 1 ETH for 175 LINK when the ETH price is $3,500 and the LINK price is $20. And we assume address A only trades once in the whole of January.

                                    If you open Lookonchain on Jan 1, the “Profit" of address A is $0.

                                    On Jan 2, the price of ETH changes to $4,000, and the price of LINK changes to $30.

                                    When you open Lookonchain on Jan 2, the “Profit" of address A is $1,250.

                                    Profit = Return - Invest = (175 * $30) - (1 * $4,000) = $5,250 - $4,000 = $1,250

                                    Because the price of ETH and LINK has changed.
                                </p>
                            </div>
                        }
                    />
                </>,
                dataIndex: 'profitUsd',
                render: (text: any, record: any, index: any) => {
                    return <div className='flex'>
                        {NumberUtils.numToFixed(text, 6)}
                    </div>;
                },
                sorter: true,
                sortOrder: sortOrder,
            },
            {
                title: <>
                    ROI<PopContent
                        text={'Profit(USD)/Invest(USD) * 100% '}
                    />
                </>,
                dataIndex: 'profitRate',
                render: (text: any, record: any, index: any) => {
                    return <div className='flex'>
                        {NumberUtils.numToFixed(text, 6)}%
                    </div>;
                },
                sorter: true
            }, {
                title: <>
                    Swap Times
                    <PopContent
                        text={`Number of times the account swaps with another account. For example, account A buys 10 ETH from account B. Then the Swap Num of account A is 1. `}
                    />
                </>,
                dataIndex: 'swapNum',
                render: (text: any, record: any, index: any) => {
                    return <div className='flex'>
                        {text}
                    </div>;
                },
                sorter: true
            },

        ]
    }, [params, sortOrder]);

    const onChange = (e: any) => {
        const { sorter } = e;
        if (sorter) {
            console.log(e, '00000');
            const { sortOrder, dataIndex } = sorter;
            // switch (sortOrder) {
            //     case "ascend": // 升序
            //         break;
            //     case "descend": // 降序
            //         break;
            //     default:
            //         break;
            // }
            const sortRet: any = {}
            sortRet[dataIndex] = sortOrder ? sortOrder?.replace('end', '') : '';
            setParams({
                ...params,
                page: 1,
                sort: sortRet
            })
            if (dataIndex === "profitUsd") {
                setSortOrder(sortOrder);
            } else {
                setSortOrder('');
            }
        }
    };

    const setSearchParams = (key: String, value: any, isReturn?: boolean) => {
        const c = JSON.parse(JSON.stringify(params?.search || {}))
        c[`${key}`] = value;
        console.log(c, 'search');
        setParams({
            ...params,
            page: 1,
            search: c
        })
    }
    return <div style={{ marginTop: '12px' }}>
        <DefaultSetting setParams={setSearchParams} setOpen={setOpen} isOpen={isOpen} />
        <Collapsible isOpen={true}>
            <MoreSetting
                setParams={setSearchParams}
                params={params}
            />
            {/* <TrandeSearch search={search} setSearch={(obj: any) => {
                console.log({ ...search, ...obj }, 'obj');
                setSearch({ ...search, ...obj })
            }} /> */}
        </Collapsible>
        <div className='flex' style={{ justifyContent: 'flex-end' }}>
            <Pagination
                showTotal
                total={tableData?.total}
                currentPage={params?.page}
                pageSize={30}
                onPageChange={page => setParams('page', page)}
                size='small'
                hoverShowPageSelect
            />
        </div>

        <div className='Portfolio card' style={{ marginTop: '20px' }}>
            <LangComponent>
                <Table
                    onChange={onChange}
                    loading={loading}
                    className='table'
                    pagination={false}
                    columns={columns}
                    dataSource={tableData?.list}
                />
            </LangComponent>
        </div>
    </div>

})

export default Tables