import { memo } from "react";

const Icon = memo(({
    icon,
    text,
    classname,
    size,
    color,

}:
    {
        icon: string,
        text?: string,
        classname?: string,
        size?: string,
        color?: string,
    }
) =>
    <div className={classname}>
        <i style={{
            padding: '0 .4rem', display: 'inline-block',
            fontSize: size,
            color: color,
        }} className={`iconfont ${icon}`}></i>
        {text}
    </div>
);
export default Icon;