/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Collapsible, } from "@douyinfe/semi-ui";
import { memo, ReactNode, useMemo, useState } from "react";
import Text from "@douyinfe/semi-ui/lib/es/typography/text";
import MoreSetting from "@/components/table_component/MoreSetting";
import { useHistory } from "react-router";
import useTable from "@/hooks/useTable";
import ConsistentService from "@/services/consistent";
import { ConsistentOutListInterface } from "@/services/consistent/in_interface";
import { ConsistentOutListParamsInterface } from "@/services/consistent/out_interface";

const ConsistentInCon = memo(() => {
    const history = useHistory()
    const {
        setParams,
        params,
        tableData,
        loading,
        BuildTable,
        handle: {
            setSearch
        }
    } = useTable<ConsistentOutListInterface, ConsistentOutListParamsInterface>(
        ConsistentService.get_consistent_in_list,
        {
            initParams: {
                page: 1,
                source: 'SmartMoney'
            }
        }
    )
    const [isOpen, setOpen] = useState<boolean>(false);

    const columns = useMemo(() => {
        return [
            {
                title: <>Token </>,
                dataIndex: 'token_name',
                render: (text: any, record: any, index: any) => {
                    return <div className='flex' >
                        <Text>{text}</Text>
                    </div>;
                },
            },
            {
                title: <>Inflow times </>,
                dataIndex: 'times',
                render: (text: any, record: any, index: any) => {
                    return <div
                        // bindKey="consistent_detail"
                        onClick={() => {
                            // history.push(`/token-flow?id=${record?.id}&type=in`)
                        }}>
                        <div className='flex'  >
                            <Text> {text}</Text>
                        </div>
                    </div>;
                },
            },
            {
                title: <>Address </>,
                dataIndex: 'address_num',
                render: (text: any, record: any, index: any) => {
                    return <div
                        // bindKey="consistent_detail"
                        onClick={() => {
                            // history.push(`/token-flow?id=${record?.id}&type=in`)
                        }}>
                        <div className='flex'  >
                            <Text>{text}</Text>
                        </div>
                    </div>;
                },
            },
            {
                title: <>Avg Inflow Times</>,
                dataIndex: 'avg_num',
                render: (text: any, record: any, index: any) => {
                    return <div>
                        <div className='flex'  >
                            <Text>{text}</Text>
                        </div>
                    </div>;
                },
            },
            {
                title: <>Volume</>,
                dataIndex: 'volume',
                render: (text: any, record: any, index: any) => {
                    return <div>
                        <div className='flex'  >
                            <Text>{text}</Text>
                        </div>
                    </div>;
                },
            },
        ]
    }, [params,]);

    return <div style={{ marginTop: '12px' }}>
        {/* <DefaultSetting setParams={setSearchParams} setOpen={setOpen} isOpen={isOpen} /> */}
        <div className="title">Consistent Token Inflow to Smart Money</div>
        <div className='fb' style={{ justifyContent: 'flex-end' }}>
            <Collapsible isOpen={true}>
                <MoreSetting
                    setParams={setSearch}
                    params={params}
                />
            </Collapsible>
        </div>

        <BuildTable columns={columns} />
    </div>

})

export default ConsistentInCon