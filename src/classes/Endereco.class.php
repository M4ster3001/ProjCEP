<?php

 require '../classes/Solicitacoes.class.php';

 interface IEndereco {
    public function BuscarCep($cep);
 }

 class Endereco extends Solicitacoes implements IEndereco {
    private $response;

    public function BuscarCep($cep) {
        
        $response = json_decode( $this->Enviar($cep), TRUE );

        foreach($response as $key=>$val) { $response[$key] = filter_var(trim(addslashes($val)), FILTER_SANITIZE_STRING); }
        
        return $response;
    }
 }