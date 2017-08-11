import {
    baseUrl
} from './envconf'

import Utils from "@/extend/common/Utils";
// import axios from 'axios'
// axios.defaults.timeout = 5000

// axios.defaults.headers.post["Access-Control-Allow-Origin"] ="*"
// axios.defaults.headers.post["Access-Control-Allow-Headers"] = "X-Requested-With,Content-Type"
// axios.defaults.headers.post["Access-Control-Allow-Credentials"] = true;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
// axios.defaults.baseURL = baseUrl


export default async(url = '', data = {}, type = 'GET', method = 'fetch') => {
    type = type.toUpperCase();
    url = baseUrl + url;

    if (type == 'GET') {
        let dataStr = ''; //数据拼接字符串
        Object.keys(data).forEach(key => {
            dataStr += key + '=' + data[key] + '&';
        })

        if (dataStr !== '') {
            dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
            url = url + '?' + dataStr;
        }
    }

    // window.fetch 全局对象存在情况下，直接调用系统的fetch 函数.
    if (window.fetch && method == 'fetch')  { 
        let requestConfig = {
            credentials: 'include',
            method: type,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            mode: "cors",
            cache: "force-cache"
        }

        if (type == 'POST') {
            Object.defineProperty(requestConfig, 'body', {
                value: Utils.JsonToStr(data)
            })
        }

        try {
            const response = await fetch(url, requestConfig);
            const responseJson = await response.json();
            return responseJson
        } catch (error) {
            throw new Error(error)
        }
    } else {
        // return new Promise((resolve, reject) => {
        //     let requestObj;
        //     if (window.XMLHttpRequest) {
        //         requestObj = new XMLHttpRequest();
        //     } else {
        //         requestObj = new ActiveXObject;
        //     }

        //     let sendData = '';
        //     if (type == 'POST') {
        //         sendData = Utils.JsonToStr(data);
        //     }

        //     requestObj.open(type, url, true);
        //     requestObj.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        //     requestObj.send(sendData);

        //     requestObj.onreadystatechange = () => {

        //         if (requestObj.readyState == 4) {
        //             if (requestObj.status == 200) {
        //                 let obj = requestObj.response
        //                 if (typeof obj !== 'object') {
        //                     obj = JSON.parse(obj);
        //                 }
        //                 resolve(obj)
        //             } else {
        //                 reject(requestObj)
        //             }
        //         }
        //     }
        // })
    }
}

// export function fetchPost (url, params = {}) {
//   return new Promise((resolve, reject) => {
//     axios.post(url, params).then(res => {
       
//       resolve(res.data)
//     }).catch((error) => {
//       reject(error)
//     })
//   })
// }
// export function fetchGet (url, params = {}) {
//   return new Promise((resolve, reject) => {
//     axios.get(url, params).then(res => {
//       resolve(res.data)
//     }).catch((error) => {
//       reject(error)
//     })
//   })
// }


   