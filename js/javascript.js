$(document).ready(function () {

    getSensor();

});


function getSensor() {

    $.getJSON('treatment.php', {
        action: 'getCurrentSensor'
    }).done(function (json) {
        console.log(json);
    });
}