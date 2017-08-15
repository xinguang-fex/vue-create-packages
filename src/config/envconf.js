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

/**
 * [根据 process.env.NODE_ENV 区分服务器不同环境，本地调试NODE_ENV原则上仍然是'development',
 * 如果是冒烟测试则手动将development block 内容修改为测试环境(testing)对应的地址即可]
 * @param  {[type]}  [description]
 * @return {[type]}                      [description]
 */
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