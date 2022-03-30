/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import useSlice from "@/hooks/useSlice";
import { GlobalStateInterface } from "@/store/global_slice";
import { formatUrl } from "@/utils/js_utils/format";
import { Button, Table } from "@douyinfe/semi-ui";
import { Fragment, memo, useLayoutEffect, useMemo, useState } from "react";
import LangComponent from "../../../../lang/local";
import { getBalances } from "../../../../services/info";


const BalanceTable = memo(() => {
    const [{ lang }] = useSlice<GlobalStateInterface>();
    const params: any = formatUrl();
    const [reqParams, setParams] = useState<any>({
        address: params?.address,
    });
    const [loadingToken, setLoadingToken] = useState(false);
    const [balances, setBalances] = useState<any>([]);

    const setReq = (key: String, value: any, isReturn?: boolean) => {
        const c = JSON.parse(JSON.stringify(reqParams))
        c[`${key}`] = value;
        if (key === 'sortField') {
            c['sortOrder'] = 'asc'
            c['offset'] = ''
        }
        if (isReturn) return c
        setParams(c)
    }
    const getAssets = async (data?: any) => {
        setLoadingToken(true);
        const res = await getBalances({
            address: params?.address,
        });

        setBalances(res?.data?.items || []);
        setLoadingToken(false)

    }

    useLayoutEffect(() => {
        const params: any = formatUrl();
        if (params?.address) {
            getAssets(reqParams)
        }
    }, [reqParams])

    const columns = useMemo(() => {
        return [
            {
                title: 'Token',
                dataIndex: 'contract_name',
                render: (text: any, record: any, index: any) => {
                    return <Button type='primary' className='flex btn' onClick={() => {
                        window.open(`https://coinmarketcap.com/zh/currencies/${encodeURIComponent(text?.replaceAll(' ', '-'))}`)
                    }}>
                        <div className="flex">
                            {/* <img src={record?.logo_url} alt="" style={{ width: 20, height: 20, borderRadius: '50%', marginRight: '6px' }} /> */}
                            {text}
                        </div>
                    </Button>;
                },
            },
            {
                title: 'Amount',
                dataIndex: 'balance_float',
                render: (text: any, record: any, index: any) => {
                    return <div className='flex'>
                        {text}
                    </div>;
                },
                // sorter: true
            },
            {
                title: 'Value(USD)',
                dataIndex: 'quote',
                render: (text: any, record: any, index: any) => {
                    return <div className='flex'>
                        {text}
                    </div>;
                },
                // sorter: true
            },
            {
                title: 'Last Transfer',
                dataIndex: 'last_transferred_at',
                render: (text: any, record: any, index: any) => {
                    return <div className='flex'>
                        {text}
                    </div>;
                },
                // sorter: true
            },
        ]
    }, [lang, reqParams]);
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
            const params = setReq('sortField', sortOrder ? dataIndex : '', true);
            params.sortOrder = sortOrder ? sortOrder?.replace('end', '') : '';
            setParams(params)
        }
    };
    return (
        <Fragment>
            <div className='search'>
                {/* <Input
                            value={search}
                            autofocus
                            placeholder='search' style={{ width: 260 }}
                            onChange={async (e) => {
                                setSearch2(e);
                            }} suffix={<IconSearch />} showClear
                        /> */}

            </div>
            <div style={{ height: 'calc(100vh - 18rem)', overflowY: 'scroll' }}>
                <div className="card">
                    <LangComponent>
                        <Table
                            onChange={onChange}
                            loading={loadingToken}
                            className='table'
                            pagination={false}
                            columns={columns}
                            dataSource={balances}
                        />
                    </LangComponent>
                </div>
            </div>
        </Fragment>
    )
})

export default BalanceTable