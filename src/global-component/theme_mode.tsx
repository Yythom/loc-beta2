/* eslint-disable @typescript-eslint/no-unused-vars */
import { Switch } from "@douyinfe/semi-ui";
import { memo } from "react";
import useSlice from "../hooks/useSlice";
import { actions } from "../store/global_slice";

const ThemeMode = memo(() => {
    const [global, dispatch] = useSlice()
    return <div className='head-item setting' style={{ transform: 'scale(0.6)' }}>
        <Switch
            size='large'
            defaultChecked
            onChange={() => {
                const body = document.body;
                dispatch(actions.setMode(body.hasAttribute('theme-mode') ? 'light' : 'dark'))
                if (body.hasAttribute('theme-mode')) {
                    body.removeAttribute('theme-mode');
                } else {
                    body.setAttribute('theme-mode', 'dark');
                }
            }}
        >
            Theme
        </Switch>
    </div>
})
export default ThemeMode