function formContato(){
    var jsonSaveDadosUser = {
        "email": $("#co_email").val(),
        "nome": $("#co_firstName").val(),
        "assunto": $("#co_assunto").val(),
        "mensagem": $("#co_mensagem").val()
    };

    var urlSaveDadosUser = 'http://api.vtexcrm.com.br/cyclone/dataentities/CO/documents/';

    $.ajax({
        headers: {
            'Accept': 'application/vnd.vtex.ds.v10+json',
            'Content-Type': 'application/json',
        },
        data: JSON.stringify(jsonSaveDadosUser),
        type: 'PATCH',
        url: urlSaveDadosUser,
        success: function (data) {
          console.log(data);
          $("div#messageSuccess").removeClass("hide");
          $("#co_email").val("");
          $("#co_firstName").val("");
          $("#co_assunto").val("");
          $("#co_mensagem").val("");
          window.alert('Sua mensagem foi enviada com sucesso. Em breve, entraremos em contato.');
        },
        error: function (data) {
          console.log(data);
          window.alert('Ocorreu um erro ao enviar sua mensagem. Pode tentar de novo daqui alguns minutos?');
        }
    });
}