/* eslint-disable react-hooks/exhaustive-deps */
import { Collapsible } from "@douyinfe/semi-ui";
import Text from "@douyinfe/semi-ui/lib/es/typography/text";
import dayjs from "dayjs";
import { Fragment, memo, useState } from "react";
interface Props {
    item: any,
    mode: string,
}
const HistoryItem = memo(({ item, mode, }: Props) => {
    const [isOpen, setOpen] = useState(false);

    if (!item) {
        return null
    }

    return (
        <Fragment>
            <div className='card item' style={{ marginBottom: '10px' }} onClick={() => {
                setOpen(!isOpen)
            }}>
                <div className='fb' style={{ width: '100%', }}>
                    {/* 1 */}
                    <div className='flex'  >
                        <div className='fd'>
                            <div className='font-bold'>
                                <Text style={{ fontSize: '16px' }}>
                                    {item?.fun}
                                </Text>
                            </div>
                            <div>
                                <Text style={{ fontSize: '12px', opacity: '.7' }}>
                                    {dayjs(item?.blockSignedAt * 1000).format(`HH:mm:ss  UTC Z`)}
                                </Text>
                            </div>
                        </div>
                    </div>

                    {/* 2 */}
                    <div className='flex'>
                        <div className='fd'>
                            <Text>{item?.title}</Text>
                        </div>
                    </div>

                    {/* 3 */}
                    <div className='fdc'>
                        <Text className='font-bold'>{item?.details?.swap}</Text>
                    </div>
                </div>


                <Collapsible isOpen={isOpen}>
                    <div className='flex info' style={{ padding: '20px 20px 0', boxSizing: 'border-box', flexWrap: 'wrap' }}>
                        {
                            item?.details && Object.keys(item?.details).map((e: any) => {
                                return (
                                    <div className='fee fdc' key={e} style={{ width: '20%' }}>
                                        <Text className='font-bold'>{e}</Text>
                                        <Text style={{ opacity: '.7', fontSize: '13px' }}>
                                            {item?.details[e]}
                                        </Text>
                                    </div>
                                )
                            })
                        }
                    </div>
                </Collapsible>
            </div>

        </Fragment>
    )
})

export default HistoryItem;