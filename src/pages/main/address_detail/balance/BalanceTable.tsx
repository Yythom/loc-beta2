/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import useSlice from "@/hooks/useSlice";
import useTable from "@/hooks/useTable";
import AddressService from "@/services/address_detail";
import { HoldingInterface } from "@/services/address_detail/hold_interface";
import { GlobalStateInterface } from "@/store/global_slice";
import { formatUrl } from "@/utils/js_utils/format";
import { Button, Table } from "@douyinfe/semi-ui";
import { Fragment, memo, useLayoutEffect, useMemo, useState } from "react";
import LangComponent from "../../../../lang/local";

const BalanceTable = memo(() => {
    const [{ lang }] = useSlice<GlobalStateInterface>();
    const url: any = formatUrl();

    const {
        params,
        setParams,
        tableData,
        fetch,
        loading
    } = useTable<
        HoldingInterface,
        { address: string }>(
            AddressService.getHoldings,
            {
                initParams: {
                    address: url.address
                },
            }
        )

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
    }, [lang, tableData]);

    return (
        <Fragment>
            <div style={{ height: 'calc(100vh - 18rem)', overflowY: 'scroll' }}>
                <div className="card">
                    <LangComponent>
                        <Table
                            loading={loading}
                            className='table'
                            pagination={false}
                            columns={columns}
                            dataSource={tableData?.data.items || []}
                        />
                    </LangComponent>
                </div>
            </div>
        </Fragment>
    )
})

export default BalanceTable