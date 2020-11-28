<?php

if  ( 
        $_SERVER['REQUEST_METHOD'] === 'POST' && 
        $_SERVER['HTTP_HOST'] == 'localhost:8095' 
    ) {

    $cep = isset( $_POST['cep'] ) ? filter_var( trim( addslashes( $_POST['cep'] ) ), FILTER_SANITIZE_NUMBER_INT ) : NULL;
    
    if( !empty($cep) && strlen($cep) == 8 ) {

        require_once('../classes/Endereco.class.php');
        
        $endereco = (new Endereco())->BuscarCep($cep);

        echo json_encode($endereco);
    }
}