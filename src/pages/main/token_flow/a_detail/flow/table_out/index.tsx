import './index.scss'
import TableComponent from './table';
import { memo } from 'react';
const FlowOut = memo(() => {
    return (
        <div >
            <TableComponent />
        </div >
    );
})

export default FlowOut;



