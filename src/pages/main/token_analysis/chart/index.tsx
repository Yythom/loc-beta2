/* eslint-disable @typescript-eslint/no-unused-vars */
import ProEchart from '@/components/echart/pro_echart';
import useRequest from '@/hooks/useRequest';
import dayjs from 'dayjs';
import { memo, useContext, useMemo } from 'react';
import { TokenContext } from '..';
const Charts = memo(() => {
    const ctx = useContext(TokenContext)
    const [ret, fetch,
        setParams,] = useRequest<any, any>(async function name(params) {
            return {}
        }, {
            initParams: {
                search: {
                    days: 7
                }
            }
        })

    return (
        <div className='Charts'>
            <div>
                {/* 所有持币人数/SM持币地址数 VS 价格 */}
                {
                    ret && <ProEchart
                        classname='test1'
                        option={{
                            x_option: {
                                name: 'Date',
                                data: [2873891723, 1231827289]?.map((e: any) => dayjs(e.tag * 1000).format('MM/DD YYYY')),
                            },
                        }}
                        dataSource={[
                            [
                                {
                                    name: 'bzd',
                                    list: [123, 323, 488],
                                    y_option: {
                                        smooth: false,
                                        showSymbol: true
                                    }
                                },
                                {
                                    name: '33',
                                    list: [123, 3333, 488],
                                    y_option: {
                                        smooth: false,
                                        showSymbol: true
                                    }
                                }
                            ],
                        ]}
                    />
                }
            </div>
            <div>
                {/* 每日新增地址 VS 价格 */}
                {
                    ret && <ProEchart
                        classname='test2'
                        option={{
                            x_option: {
                                name: 'Date',
                                data: [2873891723, 1231827289]?.map((e: any) => dayjs(e.tag * 1000).format('MM/DD YYYY')),
                            },
                        }}
                        dataSource={[
                            [
                                {
                                    name: 'bzd',
                                    list: [123, 323, 488],
                                    y_option: {
                                        smooth: false,
                                        showSymbol: true
                                    }
                                },
                                {
                                    name: '33',
                                    list: [123, 3333, 488],
                                    y_option: {
                                        smooth: false,
                                        showSymbol: true
                                    }
                                }
                            ],
                        ]}
                    />
                }
            </div>
            <div>
                {/* SM持有Token数量 VS 价格 */}
                {
                    ret && <ProEchart
                        classname='test3'
                        option={{
                            x_option: {
                                name: 'Date',
                                data: [2873891723, 1231827289]?.map((e: any) => dayjs(e.tag * 1000).format('MM/DD YYYY')),
                            },
                        }}
                        dataSource={[
                            [
                                {
                                    name: 'bzd',
                                    list: [123, 323, 488],
                                    y_option: {
                                        smooth: false,
                                        showSymbol: true
                                    }
                                },
                                {
                                    name: '33',
                                    list: [123, 3333, 488],
                                    y_option: {
                                        smooth: false,
                                        showSymbol: true
                                    }
                                }
                            ],
                        ]}
                    />
                }
            </div>
        </div>
    )
})
export default Charts;