$(document).ready(function () {

    var url = location.href;
    var array = url.split('/');
    var currentUrl = array[array.length - 1];

    // Declare sensors
    $('body').append('<div class="sensors">' +
        '<span>S1:</span><span class="sensor_1">0</span>' +
        '<span>|S2:</span><span class="sensor_2">0</span>' +
        '<span>|S3:</span><span class="sensor_3">0</span>' +
        '<span>|P:</span><span class="projector">0</span>' +
        '</div>');

    simulateSensors(currentUrl);

    setInterval(function () {
        getSensors(currentUrl);
    }, 500);

});


/**
 * Renvoi une url en fonction de l'état des capteurs
 *
 * @param currentUrl
 */
function getSensors(currentUrl) {

    $.getJSON('http://192.168.0.12/', {
        //
    }).done(function (json) {
        $('.sensors .sensor_' + json.sensor).text(json.current);
        if (json.current == 1) {
            if (currentUrl == "regles.html") {
                document.location = "charbon.html";
            }
        }
    });
    // $.getJSON('http://192.168.0.13/', {
    //     //
    // }).done(function (json) {
    //     $('.sensors .sensor_' + json.sensor).text(json.current);
    //     if (json.current == 1) {
    //         if (currentUrl != "video.html") {
    //             document.location = "video.html";
    //         }
    //     }
    // });
    $.getJSON('http://192.168.0.14/', {
        //
    }).done(function (json) {
        $('.sensors .sensor_' + json.sensor).text(json.current);
        if (json.current == 1) {
            if (currentUrl == "indication3.html") {
                document.location = "musiqueinterview.html";
            }
        }
    });
}


/**
 * Simulation par clic des capteurs
 * @param currentUrl
 */
function simulateSensors(currentUrl) {

    $('.sensor_1').on('click', function () {
        if (currentUrl != "charbon.html") {
            $(this).text(1);
            document.location = "charbon.html";
        }
    });

    $('.sensor_2').on('click', function () {
        if (currentUrl != "video.html") {
            $(this).text(1);
            document.location = "video.html";
        }
    });

    $('.sensor_3').on('click', function () {
        if (currentUrl != "musiqueinterview.html") {
            $(this).text(1);
            document.location = "musiqueinterview.html";
        }
    });

    $('.projector').on('click', function () {
        if ($(this).text() == 1) {
            switchOffVideoprojector();
        } else {
            switchOnVideoprojector();
        }
    });
}


/**
 * Active le vidéoprojecteur
 */
function switchOnVideoprojector() {

    $.getJSON('../treatment.php', {
        action: 'GPIOControl',
        pin: 1,
        state: 1
    }).done(function (json) {
        $('.projector').text(json);
    });
}


/**
 * Désactive le vidéoprojecteur
 */
function switchOffVideoprojector() {

    $.getJSON('../treatment.php', {
        action: 'GPIOControl',
        pin: 1,
        state: 0
    }).done(function (json) {
        $('.projector').text(json);
    });
}