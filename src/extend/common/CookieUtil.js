export default class CookieUtil {
    // cookie relative
    // utility function called by getCookie()
    static getCookieVal(offset) {
        var endstr = document.cookie.indexOf(";", offset);
        if (endstr == -1) {
            endstr = document.cookie.length;
        }
        return unescape(document.cookie.substring(offset, endstr));
    }

    // primary function to retrieve cookie by name
    static getCookie(name) {
        var arg = name + "=";
        var alen = arg.length;
        var clen = document.cookie.length;
        var i = 0;
        while (i < clen) {
            var j = i + alen;
            if (document.cookie.substring(i, j) == arg) {
                return CookieUtil.getCookieVal(j);
            }
            i = document.cookie.indexOf(" ", i) + 1;
            if (i == 0) break;
        }
        return null;
    }

    // store cookie value with optional details as needed
    static setCookie(name, value, expires, path, domain, secure) {
        document.cookie =
            name +
            "=" +
            escape(value) +
            (expires ? "; expires=" + expires : "") +
            (path ? "; path=" + path : "") +
            (domain ? "; domain=" + domain : "") +
            (secure ? "; secure" : "");
    }

    // remove the cookie by setting ancient expiration date
    static deleteCookie(name, path, domain) {
        if (CookieUtil.getCookie(name)) {
            document.cookie =
                name +
                "=" +
                (path ? "; path=" + path : "") +
                (domain ? "; domain=" + domain : "") +
                "; expires=Thu, 01-Jan-1970 00:00:01 GMT";
        }
    }

    /**
	 * [setCookie_h5 支持H5的设置cookie]
	 * @param {[type]} e [cookie name]
	 * @param {[type]} t [cookie value]
	 */
    static setCookie_h5(e, t) {
        if (window.localStorage) localStorage.setItem(e, t);
        else {
            var a = 30, r = new Date();
            r.setTime(r.getTime() + 24 * a * 60 * 60 * 1e3), (document.cookie =
                e + "=" + escape(t) + ";expires=" + r.toGMTString());
        }
    }

    /**
	 * [delCookie_h5 支持H5的删除cookie]
	 * @param  {[type]} e [cookie name]
	 * @return {[type]}   [description]
	 */
    static delCookie_h5(e) {
        if (window.localStorage) localStorage.removeItem(e);
        else {
            var t = new Date();
            t.setTime(t.getTime() - 1);
            var a = DF.getCookie(e);
            null != a &&
                (document.cookie = e + "=" + a + ";expires=" + t.toGMTString());
        }
    }

    /**
	 * [getCookie_h5 支持H5的获取cookie]
	 * @param  {[type]} e [cookie name]
	 * @return {[type]}   [description]
	 */
    static getCookie_h5(e) {
        if (window.localStorage) return localStorage.getItem(e);
        var t, a = new RegExp("(^| )" + e + "=([^;]*)(;|$)");
        return (t = document.cookie.match(a)) ? t[2] : null;
    }
}
