import { Spin } from "@douyinfe/semi-ui";
import { memo } from "react";

const ProLoading = memo(() => {
    return (
        <div className='fc' style={{ paddingTop: '50px' }}>
            <Spin size="large" />
        </div>
    )
})

export default ProLoading;