/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { TabPane, Tabs } from "@douyinfe/semi-ui";
import { memo, useState } from "react";
import TrandeTable from "./trande/TrandeTable";
import BalanceTable from "./holding/holding";
import { formatUrl } from "@/utils/js_utils/format";
import './index.scss'


const AddressDetail = memo(() => {
    const [tab, setTab] = useState('1')
    const params: any = formatUrl()
    const tabChange = async (e: any, data?: any) => {
        setTab(e)
    }

    return (
        <div className='address-detail' style={{ width: '100%', height: '100%', }}>
            {/* <div className='content-head' >
                <div className='desc font-bold' ><Text style={{ fontSize: '18px' }}>Address</Text></div>
                <div style={{ marginTop: '10px' }}><Text style={{ fontSize: '32px', }}>{params?.address}</Text></div>
            </div> */}
            <Tabs activeKey={tab} onChange={(e) => {
                tabChange(e)
            }}>
                <TabPane tab="Transactions" itemKey="1">
                    {tab === '1' && <TrandeTable />}
                </TabPane>
                <TabPane tab="Token Holding" itemKey="2">
                    {tab === '2' && <BalanceTable />}
                </TabPane>
            </Tabs>
        </div >
    )
})

export default AddressDetail;