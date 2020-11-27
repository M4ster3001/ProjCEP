<?php
?>

<div class="container container-sm container-md container-lg">
    <form class="pre-loading"> 
        <div class="form-row">
            <div class="form-group col-md-2">
              <label for="inputZip">CEP</label>
              <input type="text" class="form-control" id="inputCEP" maxlength="8" required>
            </div>
            <div class="form-group col-md-10">
                <label for="inputAddress">Logradouro</label>
                <input type="text" class="form-control" id="inputAddress">
            </div>
        </div>

        <div class="form-row">
            <div class="form-group col-md-4">
              <label for="inputCity">Bairro</label>
                <input type="text" class="form-control" id="inputDistrict">
            </div>
            <div class="form-group col-md-4">
              <label for="inputCity">Cidade</label>
                <input type="text" class="form-control" id="inputCity">
            </div>
            <div class="form-group col-md-4">
              <label for="inputState">Estado</label>
                <input type="text" class="form-control" id="inputState">
            </div>
        </div>
        <hr/>
        <button type="submit" class="btn btn-primary btn-outback">Buscar</button>
    </form>
</div>
