/* eslint-disable @typescript-eslint/no-unused-vars */
import { memo, } from "react"
import { Input, } from "@douyinfe/semi-ui"
import dayjs from "dayjs"
import { IconSearch } from "@douyinfe/semi-icons";
import { debounce } from "@/utils/js_utils/format";

const DefaultSetting = memo(({ setParams, setOpen, isOpen }: { setParams: Function, setOpen: Function, isOpen: Boolean, }) => {
    const dateChange = (data: any[]) => {
        if (data[0]) {
            const start = dayjs(data[0]).unix()
            const end = dayjs(data[1]).unix()
            console.log(data, start, end);
        }
    }

    return <div className='head fb'>
        <div className='flex'>
            {/* <LangComponent>
                <DatePicker
                    type="dateRange"
                    onChange={(e: any) => dateChange(e)}
                    // density="compact"
                    disabledDate={(date: any,) => {
                        return Number(dayjs(date).valueOf()) > Number(new Date(dayjs().valueOf()))
                    }}
                    style={{ width: 260 }} />
            </LangComponent> */}
            <Input
                autofocus
                placeholder='Wallet address' style={{ width: 500, }}
                onChange={debounce((e: any) => {
                    setParams('address', e);
                }, 300)} suffix={<IconSearch />} showClear
            />
            {/* <Text className='flex' onClick={() => setOpen(!isOpen)} style={{ fontSize: '18px', marginLeft: '20px' }}>
                More {!isOpen ? <IconChevronDown /> : <IconChevronUp />}
            </Text> */}
        </div>

        {/* 分页 */}
        {/* <div className='flex'>
            <Button theme='borderless' ><IconDownload size='large' style={{ color: mode === 'dark' ? '#fff' : '', paddingTop: '8px' }} /></Button>
            <Pagination
                showTotal
                // position='top'
                total={20}
                currentPage={1}
                pageSize={10}
                onPageChange={page => setPage(page)}
                size='small'
                hoverShowPageSelect
            // formatPageText= false
            />
        </div> */}
    </div>
})

export default DefaultSetting