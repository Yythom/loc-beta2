import { Toast } from '@douyinfe/semi-ui'
import axios, { AxiosRequestConfig } from 'axios'
import Storage from '../../utils/js_utils/storage'
import { baseURL, timeout } from './config'

function request<T>(config: AxiosRequestConfig): Promise<T | undefined> {
    const instance = axios.create({
        baseURL,
        timeout,
        method: config?.method || 'POST',
        headers: {
            'Content-Type': 'application/json',
            'authorization': 'Bearer ' + Storage.getStorageSync('token')
        }
    })

    //! 数据过滤
    instance.interceptors.response.use(res => {
        return res.data
    })

    //请求拦截
    instance.interceptors.request.use(function (res) {
        // removePending(config); //在一个axios发送前执行一下判定操作，在removePending中执行取消操作
        /**
         * @addToken
         */
        return res
    }, function (error) {

        return Promise.reject(error)
    })

    // 此处封装一层捕捉错误
    return new Promise((resolve, reject) => {
        instance(config).then((res: any) => {
            if (res) {
                let opts = {
                    content: res?.msg,
                    duration: 2,
                };
                if (res?.code === 0) {
                    resolve(res.data)

                } else if (res?.code === 'B_0000005') {
                    // Toast.warning(opts);
                    // const domain = Storage.getStorageSync('domain')
                    // setTimeout(() => {
                    //     Storage.clear();
                    //     Storage.setStorageSync('domain', domain);
                    // }, 1000);
                    // setTimeout(() => {
                    //     window.location.href = window.location.origin;
                    // }, 2000);
                } else {
                    Toast.warning(opts);
                }
            }
        }).catch(err => {
            if (err.response) {

            }
            resolve(undefined);
        })
    })
}
export default request;
