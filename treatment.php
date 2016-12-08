<?php


if ($_GET['action'] == 'GPIOControl') {
    echo json_encode( GPIOControl( $_GET['pin'], $_GET['state'] ) );
}


/**
 * Envoi une commande 1|0 à une connexion GPIO
 *
 * @param $pin
 * @param $state
 * @return string
 */
function GPIOControl( $pin, $state )
{

    $pin = intval( $pin );
    $state = intval( $state );

    exec( "gpio mode $pin output" );
    exec( "gpio write $pin $state" );
    $val = exec( "gpio read $pin 2>&1" );

    return $val;
}
