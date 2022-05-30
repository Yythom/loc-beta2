import { Toast } from '@douyinfe/semi-ui'
import axios from 'axios'
import Storage from '@/utils/js_utils/storage'
import { BASE_URL, TIME_OUT } from './config'

function request<T>(url: string, config: any): Promise<T | undefined> {
    const instance = axios.create({
        baseURL: BASE_URL,
        timeout: TIME_OUT,
        method: config?.method || 'POST',
        // data: config.body || {},
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + Storage.getStorageSync('token')
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
        const conf = { url, ...config, data: config.body }
        delete conf.body;
        console.log(config);

        instance(conf).then((res: any) => {
            if (res) {
                let opts = {
                    content: res?.msg,
                    duration: 2,
                };
                if (res?.code === 0) {
                    resolve(res.data)
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
