/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import {
    useHistory,
} from "react-router-dom";
import { stopInterval } from "../../utils/js_utils/interval";
import './index.scss'
import useSlice from "../../hooks/useSlice";
import { actions, GlobalStateInterface } from "../../store/global_slice";
import useRequest from "../../hooks/useRequest";
import LoginService from "../../services/login/login";
import { Button, Input } from "@douyinfe/semi-ui";
import { basePath } from "../route";
import Logo from "../../global-component/logo";

const Login = () => {
    stopInterval()
    const [global_slice, dispatch] = useSlice<GlobalStateInterface>();
    const history = useHistory()
    const [ret, login, setParams, loading, params] = useRequest<any, any>(
        LoginService.login,
        {
            start_owner: true,
            initParams: false,
            callback: (data: any) => {
                history.replace(basePath);
                // Storage.setStorageSync('token', data?.token)
            }
        });

    return (
        <div className='login fdc'>
            <Logo />
            <div className="fdc" style={{ marginTop: '3rem' }}>
                <Input
                    value={params?.account}
                    prefix='账号：'
                    onChange={(e) => setParams('account', e)}
                />
                <Input
                    value={params?.password}
                    type='password'
                    prefix='密码：'
                    onChange={(e) => setParams('password', e)}
                />
                <Button
                    loading={loading}
                    className="btn"
                    onClick={login}
                >
                    登录
                </Button>
            </div>
        </div >
    )
}

export default Login