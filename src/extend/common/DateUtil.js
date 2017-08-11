export default class DateUtil {
    static formatDate(value, format) {
        let maps = {
            yyyy: function(d) {
                return d.getFullYear();
            },
            MM: function(d) {
                return fix(d.getMonth() + 1);
            },
            dd: function(d) {
                return fix(d.getDate());
            },
            HH: function(d) {
                return fix(d.getHours());
            },
            mm: function(d) {
                return fix(d.getMinutes());
            },
            ss: function(d) {
                return fix(d.getSeconds());
            }
        };

        let chunk = new RegExp(Object.keys(maps).join("|"), "g");

        function fix(d) {
            d = "" + (d || "");
            if (d.length <= 1) {
                d = "0" + d;
            }
            return d;
        }

        function formatDateInside(value, format) {
            format = format || "yyyy-MM-dd HH:mm:ss";
            value = new Date(value);
            return format.replace(chunk, function(capture) {
                return maps[capture] ? maps[capture](value) : "";
            });
        }

        return formatDateInside(value, format);
    }

    /**
	 * [calcCountDownByLeftTime 通过剩余秒数返回格式化的时间]
	 * @param  {[type]} leftTimeMills [description]
	 * @return {[type]}               [description]
	 */
    static calcCountDownByLeftTime(leftTime) {
        let secondsPerMinute = 60;
        let secondsPerHour = 60 * secondsPerMinute;

        let leftHours = Math.floor(leftTime / secondsPerHour);
        let leftMinutes = Math.floor(
            (leftTime - leftHours * secondsPerHour) / secondsPerMinute
        );
        let leftSeconds = Math.floor(leftTime % 60);

        if (leftTime < 0) {
            leftHours = 0;
            leftMinutes = 0;
            leftSeconds = 0;
        }

        return {
            hours: leftHours,
            minutes: leftMinutes,
            seconds: leftSeconds
        };
    }

    /**
	 * [timestramptoDate 时间戳转化为日期格式,返回格式：YYYY-MM-DD HH:mm:s]
	 * @param  {[type]} timestamp [description]
	 * @return {[type]}           [description]
	 */
    static timestramptoDate(timestamp) {
        var tt = new Date(parseInt(timestamp));
        var month = "", day = "", hours = "", minutes = "", seconds = "";
        if (tt.getMonth() + 1 < 10) {
            month = "0" + (tt.getMonth() + 1);
        } else {
            month = tt.getMonth() + 1;
        }

        if (tt.getDate() < 10) {
            day = "0" + tt.getDate();
        } else {
            day = tt.getDate();
        }
        if (tt.getHours() < 10) {
            hours = "0" + tt.getHours();
        } else {
            hours = tt.getHours();
        }
        if (tt.getMinutes() < 10) {
            minutes = "0" + tt.getMinutes();
        } else {
            minutes = tt.getMinutes();
        }
        if (tt.getSeconds() < 10) {
            seconds = "0" + tt.getSeconds();
        } else {
            seconds = tt.getSeconds();
        }
        return {
            YEAR: tt.getFullYear(),
            MONTH: month,
            DAY: day,
            HOURS: hours,
            MINUTES: minutes,
            SECONDS: seconds
        };
    }
    
    /**
     * [DateProcess 业务时间处理,处理开始时间和结束时间搜索问题]
     * @param {[type]} date [description]
     */
    static DateProcess(startTime,endTime) {
        let sT = (new Date(startTime)).getTime() / 1000
        let eT = (new Date(endTime)).getTime() / 1000
        if(!startTime)  sT = "";
        if(!endTime) eT = "";

        if(sT > eT) {
            let tmp =  sT;
            let tmp2= eT
            sT = tmp2;
            eT = tmp ;
        }
        if(eT != "" ) {
            eT = eT +　86399
        }

        return [ sT, eT ]
    }
}
