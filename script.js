let timeend, days, hours, minutes ;
timeend = new Date (2019, 05, 26, 24, 00);
function time() {
    today = new Date();
    today = Math.floor((timeend-today)/1000);
    today = Math.floor(today/60);
    today = Math.floor(today/60);
    tmin = today%60;
    today = Math.floor(today/60);
    if (tmin < 10) tmin = '0' + tmin;
    thour = today%24;
    today = Math.floor(today/24);
    timestr1 = today;
    timestr2 = thour;
    timestr3 = tmin;
    document.querySelector('.day').innerHTML = timestr1;
    document.querySelector('.hour').innerHTML = timestr2;
    document.querySelector('.min').innerHTML = timestr3;
    window.setTimeout("time()", 1000);
}

