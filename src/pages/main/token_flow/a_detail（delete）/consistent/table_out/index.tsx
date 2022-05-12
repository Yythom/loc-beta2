import './index.scss'
import TableComponent from './table';
import { memo } from 'react';
const ConsistentOut = memo(() => {
    return (
        <div >
            <TableComponent />
        </div >
    );
})

export default ConsistentOut;



