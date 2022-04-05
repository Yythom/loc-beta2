import './index.scss'
import TableComponent from './table';
import { memo } from 'react';
const FlowIn = memo(() => {
    return (
        <div >
            <TableComponent />
        </div >
    );
})

export default FlowIn;



