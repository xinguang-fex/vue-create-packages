/**
 * 配置编译环境和线上环境之间的切换,根据环境自动切换后他调用接口地址
 * 
 * baseUrl: 接口域名地址域名地址：
 * routerMode: 路由模式
 * imgBaseUrl: 图片所在域名地址 (如果有静态域名服务时使用)
 * 
 */

let baseUrl = ''; 
let routerMode = 'history';
let imgBaseUrl = '';


if (process.env.NODE_ENV == 'development') {
    baseUrl = "";
    imgBaseUrl = "";
}else if(process.env.NODE_ENV == 'testing') {
    baseUrl = '' 
    imgBaseUrl = ''
}else if(process.env.NODE_ENV == 'production'){
    baseUrl = '';
    imgBaseUrl = "";
}


export {
    baseUrl,
    routerMode,
    imgBaseUrl,
}