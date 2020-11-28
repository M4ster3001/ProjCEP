<?php

class Solicitacoes {

    function  Enviar($cep) {

        $curl = curl_init();
        curl_setopt( $curl, CURLOPT_URL, "https://viacep.com.br/ws/". $cep ."/json/" );
        curl_setopt( $curl, CURLOPT_RETURNTRANSFER, true );
        $enviar = curl_exec( $curl );
        curl_close( $curl );

        return $enviar;
    }
}