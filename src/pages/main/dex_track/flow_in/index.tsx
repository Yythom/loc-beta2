import './index.scss'
import Text from "@douyinfe/semi-ui/lib/es/typography/text";
import TableComponent from './table';
import { memo } from 'react';
const FlowIn = memo(() => {
    return (
        <div >
            <div className='content-head' style={{ marginBottom: '12px' }}>
                <div className='desc' style={{ width: '80%', wordBreak: 'break-all', lineHeight: '24px' }}>
                    <Text>
                        <h2>Token Inflow from CEX</h2>
                    </Text>
                </div>
            </div>
            <TableComponent />
        </div >
    );
})

export default FlowIn;


