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
            <div className="card fb editinfo" style={{ width: '49%', height: '100%' }} >
                <div className='fdc'>
                    <div className="title">Wallet Address</div>
                    <EditInput defaultValue='dwalkjndkwjalhndkjl' >
                        <div>
                            {getSubStr('dwalkjndkwjalhndkjl')}
                        </div>
                    </EditInput>
                </div>
                <div className='fdc'>
                    <div className="title">Token</div>
                    <EditInput defaultValue='LINK' >
                        <div>LINK</div>
                    </EditInput>
                </div>
            </div>
            <div className="card fdc" style={{ width: '49%', height: '100%' }}>
                <div className="title">Info</div>
                <div className="fb" style={{ width: '96%', marginTop: '1rem' }}>
                    <div>
                        <FlexItem tip="Holding Amount：" content='$17' />
                        <FlexItem tip="Amount in：" content='$17' />
                        <FlexItem tip="Amount out：" content='$17' />
                        <FlexItem tip="Profit：" content='$17' />
                    </div>

                    <div>
                        <FlexItem tip="Holding Cost：" content='$17' />
                        <FlexItem tip="Value in：" content='$17' />
                        <FlexItem tip="Value out：" content='$17' />
                        <FlexItem tip="ROI：" content='$17' />
                    </div>

                    <div>
                        <FlexItem tip="Holding Ranking：" content='$17' />
                        <FlexItem tip="Price in：" content='$17' />
                        <FlexItem tip="Price out：" content='$17' />
                    </div>
                </div>
            </div>
        </div>
    )
})
export default Tokeninfo;