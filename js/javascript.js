$(document).ready(function () {


    var url = location.href;
    var array = url.split('/');
    var currentUrl = array[array.length - 1];

    setInterval(function () {
        getSensors(currentUrl);
    }, 500);

});


function getSensors(currentUrl) {


    $.getJSON('http://192.168.0.12/', {
        //
    }).done(function (json) {
        $('.sensors .sensor_' + json.sensor).text(json.current);
        if (json.current == 1) {
            if (currentUrl != "regles.html") {
                document.location = "regles.html";
            }
        }
    });
    $.getJSON('http://192.168.0.13/', {
        //
    }).done(function (json) {
        $('.sensors .sensor_' + json.sensor).text(json.current);
        if (json.current == 1) {
            if (currentUrl != "indication1.html") {
                document.location = "indication1.html";
            }
        }
    });
    $.getJSON('http://192.168.0.14/', {
        //
    }).done(function (json) {
        $('.sensors .sensor_' + json.sensor).text(json.current);
        if (json.current == 1) {
            if (currentUrl != "charbon.html") {
                document.location = "charbon.html";
            }
        }
    });
}