import './index.scss'
import Text from "@douyinfe/semi-ui/lib/es/typography/text";
import TableComponent from './table';
import { memo } from 'react';
const SmartMoneyconsistentSwapout = memo(() => {
    return (
        <div >
            <div className='content-head' style={{ marginBottom: '12px', flex: 1 }}>
                <div className='desc' style={{ width: '80%', wordBreak: 'break-all', lineHeight: '24px' }}>
                    <Text>
                        <h2>Smart Money consistent Swap out</h2>
                    </Text>
                </div>
            </div>
            <TableComponent />
        </div >
    );
})

export default SmartMoneyconsistentSwapout;



