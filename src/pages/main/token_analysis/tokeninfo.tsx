/* eslint-disable @typescript-eslint/no-unused-vars */
import EditInput from '@/components/edit_input';
import FlexItem from '@/global-component/flex-item';
import { getSubStr } from '@/utils/js_utils/format';
import { Popover, Toast } from '@douyinfe/semi-ui';
import { IconCopy } from "@douyinfe/semi-icons";
import { memo, useContext } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { TokenContext } from '.';

const Tokeninfo = memo(() => {
    const ctx = useContext(TokenContext)

    return (
        <div className="fb" style={{ color: '#fff', height: '120px', marginBottom: '3rem' }}>
            <div className="card fdc" style={{ width: '49%', height: '100%' }} >
                <div className="title">Token</div>
                <EditInput defaultValue='LINK' >
                    <div>LINK</div>
                </EditInput>
            </div>
            <div className="card fdc" style={{ width: '49%', height: '100%' }}>
                <div className="title">Info</div>
                <div className="fb" style={{ width: '70%', marginTop: '1rem' }}>
                    <div>
                        <FlexItem tip="Price：" content='$17' />
                        <FlexItem tip="Market Cap：" content='$17' />
                        <FlexItem tip="Volume(24h)：" content='$17' />
                    </div>

                    <div>
                        <FlexItem tip="Total Supply：" content='17' />
                        <FlexItem tip="Circulating Supply：" content='17' />
                        <FlexItem tip="Contracts：" content={
                            <div className="flex">
                                <Popover content='0x514910771af9ca656af840dff83e8264ecf986ca'>{getSubStr('0x514910771af9ca656af840dff83e8264ecf986ca')}</Popover>
                                <CopyToClipboard text="0x514910771af9ca656af840dff83e8264ecf986ca" onCopy={() => Toast.success('copy success')}>
                                    <IconCopy style={{ marginLeft: '2rem', cursor: 'pointer' }} />
                                </CopyToClipboard>
                            </div>
                        } />
                    </div>
                </div>
            </div>
        </div>
    )
})
export default Tokeninfo;