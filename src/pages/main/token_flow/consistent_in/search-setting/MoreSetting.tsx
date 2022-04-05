import { Popover, RadioGroup, } from "@douyinfe/semi-ui"
import { Radio } from "@douyinfe/semi-ui/lib/es/radio";
import Text from "@douyinfe/semi-ui/lib/es/typography/text"
import { Fragment, memo, } from "react"
import { IconSort } from '@douyinfe/semi-icons';
import useSlice from "@/hooks/useSlice";
import { GlobalStateInterface } from "@/store/global_slice";
export const PopContent = memo(({ text, content, hover, showHover, }: { text: any, content?: any, hover?: any, showHover?: boolean }) => {
    const [{ mode }] = useSlice<GlobalStateInterface>();

    return <Fragment>
        <div
            className={hover && 'pop_hover'}
            style={{ display: 'inline-block', cursor: 'pointer' }}
            onClick={() => hover && hover()}
        >
            <Text style={{ verticalAlign: 'top' }} >{content}</Text>
            {text && <Popover position='bottomLeft' content={<div style={{ color: mode === 'dark' ? '#fff' : '#333', maxWidth: '400px', padding: '8px', wordBreak: 'break-all' }}>{text}</div>} >
                <svg style={{ verticalAlign: 'middle' }} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path d="M931.84 513.536c0 228.864-185.856 414.72-414.72 414.72s-414.72-185.856-414.72-414.72 185.856-414.72 414.72-414.72 414.72 185.344 414.72 414.72z m-413.696-352.256c-188.416 0-353.792 165.376-353.792 353.28 0 195.584 158.208 353.792 353.792 353.792s353.792-158.208 353.792-353.792c0-186.88-163.328-353.28-353.792-353.28z" fill="#707070" p-id="824"></path><path d="M619.52 330.752c-23.552-24.064-58.368-38.912-96.768-38.912-43.008 0-78.848 17.92-104.448 48.128-23.04 26.112-34.816 62.464-34.816 104.448l53.248 0.512c0-29.184 8.192-52.736 21.504-69.632 14.336-19.968 34.304-30.208 64.512-30.208 25.088 0 45.056 6.656 58.88 20.992 13.312 13.312 20.48 31.744 20.48 55.808 0 16.896-6.144 32.256-17.92 47.616-3.584 4.608-9.728 9.728-20.48 21.504-32.256 29.696-52.224 51.712-60.416 69.632-7.168 14.848-11.264 30.208-11.264 52.736v13.824h51.712v-13.824c1.024-16.896 3.072-30.208 10.752-43.52 7.168-10.24 15.872-19.968 29.184-31.232 26.624-23.552 41.984-37.888 48.128-45.056 17.408-22.528 23.04-45.568 23.04-72.704 0-36.864-12.8-69.632-35.328-90.112zM519.68 668.672c-11.264 0-20.48 3.072-28.16 11.264-7.68 7.168-11.264 16.384-11.264 27.648s3.072 20.48 11.264 28.16c7.68 7.168 16.896 11.264 28.16 11.264s20.48-4.096 28.16-11.264 11.776-16.384 11.776-28.16c0-11.264-4.096-20.48-11.264-27.648-8.192-8.192-17.92-11.264-28.672-11.264z" fill="#707070" p-id="825"></path></svg>
            </Popover>}
            {
                showHover && <div className="sort" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                    <IconSort />
                </div>
            }
        </div>
    </Fragment>
})


const MoreSetting = memo(({ setParams, }: { setParams: Function, params: any }) => {
    // const { search } = params
    return <div>
        <div className=''>

            <div className="flex" style={{ width: '99%', }}>
                <div style={{ marginRight: '8px' }}><Text className='font-bold'>Time Range</Text></div>
                <div>
                    <RadioGroup
                        defaultValue={1}
                        onChange={(e) => {
                            setParams('time_range', e.target.value || '')
                        }}>
                        <Radio value={1}>1 Day</Radio>
                        <Radio value={3}>3 Day</Radio>
                        <Radio value={7}>7 Day</Radio>
                    </RadioGroup>
                </div>
            </div>
        </div>
    </div>
})

export default MoreSetting