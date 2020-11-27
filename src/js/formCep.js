$(document).ready(function(){
    $("form .pre-loading").attr("class", "");

    $("form input").attr("style", "border: 1px solid #ced4da;");
    
    $("#inputCEP").keyup(function() {
        $(".toast").remove();

        let message = 'Carregando';
    
        const cep = $(this).val();
        
        if(cep.length == 8 && !isNaN(cep)) {
            
            $.ajax({
                url: `https://viacep.com.br/ws/${cep}/json/`,
                method: "GET",
                contentType: "aplication/json",
                beforeSend: function() {
                    $("body").append(Toast('<i class="fa fa-search fa-lg faa-float animated fa-fw font-blue"></i>', message, 'loading'));

                    $(`#${message.replace(/\s/g, "_")}`).toast("show");
                }
            }).done(function(response) {

                $(`#${message.replace(/\s/g, "_")}`).hide();

                if(!response.erro) {

                    message = "Dados localizados";
                    $("body").append(Toast('<i class="fa fa-check-circle fa-1x font-green"></i>', message, 'success'));
                    
                    $(`#${message.replace(/\s/g, "_")}`).toast("show");
                    
                    $(`#${message.replace(/\s/g, "_")}`).delay(2000).fadeOut();
                    
                    $("#inputAddress").val(response.logradouro);
                    $("#inputCity").val(response.localidade);
                    $("#inputDistrict").val(response.bairro);
                    $("#inputState").val(response.uf);
                }else{

                    $(`#${message.replace(/\s/g, "_")}`).hide();

                    message = "CEP não localizado";
                    $("body").append(Toast('<i class="fa fa-exclamation-triangle fa-1x font-red"></i>', message, 'fail'));

                    $(`#${message.replace(/\s/g, "_")}`).toast("show");

                    $(`#${message.replace(/\s/g, "_")}`).delay(2000).fadeOut().fadeOut();
                }
            }).fail(function() {

                $(`#${message.replace(/\s/g, "_")}`).hide();

                message = "Ocorreu um erro ao procurar os dados";
                $("body").append(Toast('<i class="fa fa-exclamation-triangle fa-1x font-red"></i>', message, 'fail'));

                $(`#${message.replace(/\s/g, "_")}`).toast("show");

                $(`#${message.replace(/\s/g, "_")}`).delay(2000).fadeOut().fadeOut();
            })
        } else {

            if(isNaN(cep)) {

                message = "Digite somente números";
                $("body").append(Toast('<i class="fa fa-exclamation-triangle fa-1x font-red"></i>', message, 'fail'));
                
                $(`#${message.replace(/\s/g, "_")}`).toast("show");
                
                $(`#${message.replace(/\s/g, "_")}`).delay(2000).fadeOut().fadeOut();
            }
        }
    });
});