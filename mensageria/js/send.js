$(document).ready(function(){
    var form = $('form[name=form]');

    $('input[type=submit][name=button]').click(function(evento){
    //Limpar campos de status
    $("#errorMsg").html("");
    $("#statusMsg").html("");

    console.log("Response")

    var array = form.serializeArray();
    // if (array[0].value == "" || array[1].value == "") {
    //     $("#errorMsg").html("Existem Campos que não foram preenchidos.");
    // }else 
    
    if ($("#txt_email").val().indexOf("@") == -1) {
        alert("Email inválido");
    }else{

        console.log("array >", array);
    
        $.ajax({
            method: 'post',
            url:    'mensageria/send-mail.php',
            data:   {
                nome: $("#txt_nome").val(),
                sobrenome: $("#txt_sobreNome").val(),
                email: $("#txt_email").val(),
                assunto: $("#txt_assunto").val(),
                mensagem: $("#txt_mensagem").val()

            },
            beforeSend: function(){
                console.log('data', data)
            },
            datatype: 'json',
            success: function(res){
                console.log(res);
                if (res == "0") {
                    alert("Falha no envio.");
                    
                }else if(res = '1'){
                    alert("Mensagem enviada com Sucesso");
                    //location.href = res;
                }
            },
            error: function(e){
                alert("Erro! Entre em contato com o administrador do sistema.");
            }
        });
    }

    evento.preventDefault();
   });

});