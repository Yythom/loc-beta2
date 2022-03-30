/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import useSlice from "@/hooks/useSlice";
import { GlobalStateInterface } from "@/store/global_slice";
import { debounce, formatUrl } from "@/utils/js_utils/format";
import { IconChevronDown, IconSearch } from "@douyinfe/semi-icons";
import { Input, Pagination, Spin, Table } from "@douyinfe/semi-ui";
import Text from "@douyinfe/semi-ui/lib/es/typography/text";
import dayjs from "dayjs";
import { Fragment, memo, useEffect, useState } from "react";
import { shallowEqual, useSelector } from "react-redux";
import LangComponent from "../../../../lang/local";
import { getTransactions } from "../../../../services/info";
import TrandeSearch from "../../dashboard/table/TrandeSearch";
import HistoryItem from "./his-item";
import renderAddress from "./renderAddress";

const debou = debounce((fn: Function) => {
    fn()
}, 800)
const TrandeTable = memo(() => {
    const [{ mode }] = useSlice<GlobalStateInterface>();
    const [transactions, setTransactions] = useState<any>([{ timestamp: 1 }]);
    const [tokenMap, setTokenMap] = useState<any>(null);
    const params: any = formatUrl();
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(1);
    const [search, setSearch] = useState<any>({
        address: params?.address,
    });
    const [loading, setLoading] = useState(false);

    const setReq = (key: String, value: any) => {
        const c = JSON.parse(JSON.stringify(search))
        c[`${key}`] = value;
        setSearch(c)
        return c
    }

    useEffect(() => {
        const params: any = formatUrl();
        if (search && params?.address) {
            console.log('执行');
            getTransactionsData({ ...search, address: params?.address })
        }
    }, [search])

    const getTransactionsData = async (data?: any) => {
        setLoading(true)
        const res = await getTransactions({ search: data?.search || { ...search }, page: data?.page || page, page_size: 30 });
        /** 增加时间节点标记 */
        var dateTime: any = []
        const list = res?.list?.map((e: any) => {
            const day = dayjs(e?.blockSignedAt * 1000 || 0).format('YYYY-MM-DD');
            if (!e.proDate && dateTime.findIndex((d: any) => d === day) === -1) {
                e.proDate = day
                dateTime.push(day)
            }
            return {
                ...e
            }
        });
        console.log(list, 'getTransactions');
        setPage(res?.page)
        setTotal(res?.total)
        setTransactions(list || []);
        setLoading(false);
    }

    return (
        <Fragment>
            <div style={{ height: 'calc(100vh - 18rem)', overflowY: 'scroll', }} >
                <div className='flex' style={{ justifyContent: 'flex-end' }}>
                    <Pagination
                        showTotal
                        total={total}
                        currentPage={page}
                        pageSize={30}
                        onPageChange={page => getTransactionsData({ page })}
                        size='small'
                        hoverShowPageSelect
                    />
                </div>

                <div className='_table'>
                    {
                        transactions?.map((e: any, i: number) => {
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

                {!loading && !transactions[0] && <div className="fc" style={{ height: '60px' }}><Text>No Result</Text></div>}
                {loading && <div className="fc" style={{ height: '60px' }}><Spin size='large' /></div>}
                {/* {
                    (transactions[0] && !loading) && <div className='fc loadmore' style={{ height: '60px', cursor: 'pointer' }} onClick={() => loadmore()}>
                        <Text className='flex' style={{ fontSize: '18px', }}>
                            Load more <IconChevronDown />
                        </Text>
                    </div>
                } */}
            </div>
        </Fragment >
    )
})

export default TrandeTable