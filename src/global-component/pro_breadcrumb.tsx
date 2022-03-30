import { Breadcrumb } from "@douyinfe/semi-ui";
import { memo, useMemo } from "react";
import { useHistory } from "react-router-dom";
import useSlice from "../hooks/useSlice";
import { basePath, RouteItemInterface } from "../pages/route";
import { GlobalStateInterface } from "../store/global_slice";

const ProBreadcrumb = memo(() => {
    const history = useHistory();
    const [global] = useSlice<GlobalStateInterface>();
    const path = history.location.pathname.split('/').join('/').replace(basePath, '');

    const bread: RouteItemInterface[] = useMemo(() => {
        const BreadcrumbArray: RouteItemInterface[] = []
        path && global.user_route.forEach(e => {
            if (e.items) {
                e.items.forEach(child => {
                    if (child.itemKey.indexOf(path) !== -1) {
                        BreadcrumbArray.push(e)
                    }
                })
            } else if (e.itemKey.indexOf(path) !== -1) {
                BreadcrumbArray.push(e)
            }
        })
        return BreadcrumbArray
    }, [path, global?.user_route])

    return <div className="card">
        <Breadcrumb>
            <Breadcrumb.Item
                onClick={() => {
                    history.replace(basePath)
                }}
            >主页</Breadcrumb.Item>
            {
                bread.map(e => (
                    e.items ?
                        e.items.map(
                            child =>
                                <Breadcrumb.Item
                                    key={e.itemKey}
                                    onClick={() => {
                                        history.replace(basePath + child.itemKey)
                                    }}
                                >
                                    {child.text}
                                </Breadcrumb.Item>
                        )
                        : <Breadcrumb.Item
                            key={e.itemKey}
                            onClick={() => {
                                history.replace(basePath + e.itemKey)
                            }}
                        >
                            {e.text}
                        </Breadcrumb.Item>
                ))
            }
        </Breadcrumb>
    </div>
})

export default ProBreadcrumb