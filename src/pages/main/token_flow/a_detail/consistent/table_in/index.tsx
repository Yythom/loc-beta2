import './index.scss'
import TableComponent from './table';
import { memo } from 'react';
const ConsistentIn = memo(() => {
    return (
        <div >
            <TableComponent />
        </div >
    );
})

export default ConsistentIn;



