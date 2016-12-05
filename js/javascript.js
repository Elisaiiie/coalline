$(document).ready(function () {


    var url = location.href;
    var array = url.split('/');
    var currentUrl = array[array.length - 1];


    // Declare sensors

    $('body').prepend('<div class="sensors">' +
        '<div class="sensor_1">0</div>' +
        '<div class="sensor_2">0</div>' +
        '<div class="sensor_3">0</div>' +
        '</div>');

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
            if (currentUrl != "charbon.html") {
                document.location = "charbon.html";
            }
        }
    });
    $.getJSON('http://192.168.0.13/', {
        //
    }).done(function (json) {
        $('.sensors .sensor_' + json.sensor).text(json.current);
        if (json.current == 1) {
            if (currentUrl != "video.html") {
                document.location = "video.html";
            }
        }
    });
    $.getJSON('http://192.168.0.14/', {
        //
    }).done(function (json) {
        $('.sensors .sensor_' + json.sensor).text(json.current);
        if (json.current == 1) {
            if (currentUrl != "musiqueinterview.html") {
                document.location = "musiqueinterview.html";
            }
        }
    });
}