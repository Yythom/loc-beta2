import { ConfigProvider, LocaleProvider } from "@douyinfe/semi-ui";
import { memo } from "react";
import useSlice from "../hooks/useSlice";
import { GlobalStateInterface } from "../store/global_slice";
import loacl from "./semi-ui-local";

const LangComponent = memo(({ children }) => {
    const [global_slice] = useSlice<GlobalStateInterface>();
    return (
        <LocaleProvider locale={loacl[global_slice.lang]}>
            <ConfigProvider locale={loacl[global_slice.lang]}>
                {children}
            </ConfigProvider>
        </LocaleProvider>
    )
})
export default LangComponent;