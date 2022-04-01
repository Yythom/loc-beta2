import Text from "@douyinfe/semi-ui/lib/es/typography/text";
import { memo } from "react";

const Logo = memo(() => {
    return (
        <div className='flex' onClick={() => window.location.href = window.location.origin} style={{ cursor: 'pointer' }}>
            {/* <Avatar size="small" style={{ marginRight: '8px' }}>
                <img src={icon.logo} alt="" />
            </Avatar> */}
            <Text>
                <h1 style={{ fontSize: '24px', fontStyle: 'normal' }}>
                    <a href={window.location.origin} style={{ color: 'inherit', fontSize: '45px' }}>
                        LoconChain
                    </a>
                </h1>
            </Text>
        </div>
    )
})

export default Logo;