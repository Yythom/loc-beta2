// console.log(process.env);

// export const baseURL = 'https://lookonchain.com/api'
export const baseURL = process.env.NODE_ENV === "development" ?
    'http://47.242.64.229:9501/api' : 'https://lookonchain.com/api'

//接口地址
export const timeout = 10000                    //请求延迟
// export const ossURL = 'https://ryq-mall-ml.oss-cn-chengdu.aliyuncs.com';
// export function setOssFilepath(modal: String) {
//     // modal 上传模块路线 例如 product_image
//     return `dev/shz/${modal}/`;
// }