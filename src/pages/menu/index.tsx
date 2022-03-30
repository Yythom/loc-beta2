/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useLayoutEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import { Nav, } from "@douyinfe/semi-ui";
import { stopInterval } from "../../utils/js_utils/interval";
import useSlice from "../../hooks/useSlice";
import Storage from "../../utils/js_utils/storage";
import { actions, GlobalStateInterface } from "../../store/global_slice";
import './index.scss'
import { basePath, } from "../route";
import Icon from "../../global-component/icon";

const Menu = () => {
    const history = useHistory()
    const [global_slice, dispatch] = useSlice<GlobalStateInterface>();
    const path = history.location.pathname.split('/').join('/').replace(basePath, '');
    const [menu, setmenu] = useState(path || '');

    useLayoutEffect(() => {
        dispatch(actions.getMenuRouteAsync())
    }, [])
    return (
        <div className="fdc" style={{ height: '100%' }}>
            <Nav
                defaultOpenKeys={Storage.getStorageSync('openKeys') || []}
                selectedKeys={[menu]}
                style={{ height: '100%', border: 'none' }}
                onClick={(el: any) => {
                    if (!el?.openKeys) {
                        stopInterval() // 重置全局轮训
                        setmenu(el.itemKey)
                        history.push(basePath + el.itemKey)
                    } else {
                        Storage.setStorageSync('openKeys', el.openKeys);
                    }
                }}
                footer={{
                    collapseButton: true,
                }}
            >
                <Nav.Header
                    // eslint-disable-next-line jsx-a11y/alt-text
                    logo={<img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2F07%2Faa%2F5b%2F07aa5bb71261cba6540c1b750dac7690.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650087669&t=a8692e46abf591e4ac3bddb972e17172" />}
                    text={'admin'}
                />
                {
                    global_slice.user_route.map(item => {
                        if (!item.text) return null;
                        if (item.items) {
                            return <Nav.Sub
                                key={item.itemKey}
                                itemKey={item.itemKey}
                                text={item.text}
                                icon={<Icon icon={item.icon} />}
                            >
                                {item.items.map(child =>
                                    <Nav.Item
                                        style={{
                                            width: 'calc(100% - 5rem)',
                                            marginLeft: '3rem'
                                        }}
                                        key={child.itemKey}
                                        itemKey={child.itemKey}
                                        text={child.text}
                                        icon={<Icon icon={child.icon} />}
                                    />
                                )}
                            </Nav.Sub>
                        } else {
                            return <Nav.Item
                                key={item.itemKey}
                                itemKey={item.itemKey}
                                text={item.text}
                                icon={<Icon icon={item.icon} />}
                            />
                        }
                    })
                }
            </Nav>
        </div >

    );
}

export default Menu;



