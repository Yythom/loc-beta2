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
import LangComponent from "@/lang/local";

const Menu = () => {
    const history = useHistory()
    const [global_slice, dispatch] = useSlice<GlobalStateInterface>();
    const path = history.location.pathname.split('/').join('/').replace(basePath, '');
    const [menu, setmenu] = useState(path || '');
    const [collapsed, setCollapsed] = useState(true)

    useLayoutEffect(() => {
        dispatch(actions.getMenuRouteAsync())
    }, [])
    return (
        <div className="fdc menu" style={{ height: '100%' }} >
            <div className="toggle fc hover" onClick={() => setCollapsed(!collapsed)}>
                <Icon icon="iconjigouguanli" color="#fff" />
            </div>
            <div className="_menu"
                onMouseEnter={() => {
                    setCollapsed(false)
                }}
                onMouseLeave={() => {
                    setCollapsed(true)
                }}>
                <LangComponent>
                    <Nav
                        isCollapsed={collapsed}
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
                    >
                        <Nav.Header
                            // eslint-disable-next-line jsx-a11y/alt-text
                            logo={<img src={require('@/image/logo/logo.jpg').default} />}
                            text={'LookonChain'}
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
                </LangComponent>
            </div>
        </div >

    );
}

export default Menu;



