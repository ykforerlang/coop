export const canUseWebSocket= () => {

}

export const userCookieKey = 'uinfo'


export function setCookie(cname,cvalue,exdays = 7) {
    const d = new Date();
    d.setTime(d.getTime()+(exdays*24*60*60*1000));
    const expires = "expires="+d.toGMTString();
    window.document.cookie = (" " +  cname + "=" + cvalue + "; " + expires + "; path=/");
}


export function getCookie(cname) {
    const name = cname + "=";
    const ca = window.document.cookie.split(';');
    for(var i=0; i<ca.length; i++)
    {
        var c = ca[i].trim();
        if (c.indexOf(name)==0) return c.substring(name.length,c.length);
    }
    return "";
}

export function delCookie(cname) {
    const expires = "expires=Thu, 01 Jan 1970 00:00:00 GMT"
    window.document.cookie = (" " +  cname + "=" + "" + "; " + expires + "; path=/");
}

export function getUrlParamObj() {
    const { search } = window.location
    if(search === '') return {}

    const result = {}
    const subs = search.substring(1)
    subs.split('&').forEach(ele => {
        const [k, v] = ele.split('=')

        result[k] = v
    })
    return result
}


export function isPc() {
    const sUserAgent = window.navigator.userAgent.toLowerCase();
    const bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    const bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    const bIsMidp = sUserAgent.match(/midp/i) == "midp";
    const bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    const bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
    const bIsAndroid = sUserAgent.match(/android/i) == "android";
    const bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
    const bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";

    if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
        return false
    } else {
        return true
    }
}

