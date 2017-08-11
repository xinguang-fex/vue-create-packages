/**
 * This class is used for defining tool methods such as isType, deepClone, flatten, etc...
 */


export default class Utils {
    /**
     * [JsonToStr 将json转化为str]
     * @param {[type]} data [description]
     */
    static JsonToStr(data){
        var str = '';
        if (!data) {
            return null;
        }
        for (var key in data) {
            str += key + '=' + encodeURIComponent(data[key]) + '&';
        }
        return str.substring(0, str.length - 1);
    }

    static getHash() {

        var params = location.hash.slice(1);
        params = params.split('&');
        var result = {};
        var val;
        for(var i=0,len=params.length;i<len;i++){
            if(params[i]){
                val = params[i].split('=');
                result[val[0]] = val[1] || '';
            }
        }
        return result;

    }

    
    static hashGet(key) {
        let hashMap = Utils.getHash()
        return key ? hashMap[key] : hashMap;
    }

    static hashSet(data, clearall) {
        var hashMap = Utils.getHash();
        if(clearall){
            window.location.hash = Utils.hashToStr(data)
        }else{
            for(var key in data){
                hashMap[key] = data[key]
            }
            window.location.hash = Utils.hashToStr(hashMap)
        }
    }

    // window.addEventListener('hashchange', function () {
    //     //绑定hash
    //     hashMap = getHash()
    // })

    static hashToStr(data){
        var str = ''
        for(var key in data){
            str+= key+'='+data[key]+ '&'
        }
        str = str.substring(0, str.length -1)
        return str
    }
    
    /**
     * [loadJs 动态加载js 文件]
     * @param  {[type]}   url      [description]
     * @param  {Function} callback [description]
     * @return {[type]}            [description]
     */
    static loadJs(url,callback) {
        var oHead = document.getElementsByTagName('HEAD').item(0);
        var oScript= document.createElement("script");
        oScript.type = "text/javascript";
        oScript.src=url;
        oHead.appendChild( oScript);

    }
    
    /**
     * [loadScript 动态加载js文件，回调处理： 封装了标准实现和IE 实现所需的功能]
     * @param  {[type]}   url      [description]
     * @param  {Function} callback [description]
     * @return {[type]}            [description]
     */
    static loadScript(url, callback){
        var script = document.createElement ("script")
        script.type = "text/javascript";
        if (script.readyState){ //IE
            script.onreadystatechange = function(){
                if (script.readyState == "loaded" || script.readyState == "complete"){
                    script.onreadystatechange = null;
                    callback();
                }
            };
        } else { //Others
            script.onload = function(){
                callback();
            };
        }
        script.src = url;
        document.getElementsByTagName("HEAD")[0].appendChild(script);
    }
}
