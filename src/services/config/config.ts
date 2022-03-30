// console.log(process.env);

export const baseURL = 'http://localhost:8701'
//接口地址
export const timeout = 10000                    //请求延迟
export const ossURL = 'https://ryq-mall-ml.oss-cn-chengdu.aliyuncs.com';
export function setOssFilepath(modal: String) {
    // modal 上传模块路线 例如 product_image
    return `dev/shz/${modal}/`;
}