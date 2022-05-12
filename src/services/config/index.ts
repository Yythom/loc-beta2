/* eslint-disable @typescript-eslint/no-unused-vars */
import { showNotic } from '@/utils/ui_utils/toast'
import axios, { AxiosRequestConfig } from 'axios'
import { baseURL, timeout } from './config'

function request<T>(config: AxiosRequestConfig): Promise<T | undefined> {
    const instance = axios.create({
        baseURL,
        // timeout,
        method: config?.method || 'POST',
        headers: {
            // 'Content-Type': 'application/json',
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
            if (res?.data) {
                resolve(res?.data)
            } else {
                resolve(undefined)
                showNotic('error', { content: `${res?.message}` });
            }
        }).catch(err => {
            if (err.response) {

            }
            resolve(undefined);
        })
    })
}
export default request;
