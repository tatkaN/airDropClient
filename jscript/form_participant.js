Template.enter_participant.events({
  'submit form': function(event){
    event.preventDefault();

    console.log('enter_participant');

    if ($('#participant1_waves_address').val() == '' ||
       $('#participant1_bitcoin_address').val() == '' ||
       $('#participant1_signature').val() == '' ){
      sessionStorage.msg = 'Все поля должны быть заполнены.';
      $('#alert_error_button').click();
      return false;
    }

    console.log('Сохраняем на сервер');
    /* Здесь будет вызов POST */

    $.ajax({
      type: 'POST',
      url: 'http://api.airdrop.someshine.ru/blockchain/bitcoin_rpc/verifymessage',
      data:{
        address_waves: $('#participant1_waves_address').val(),
        address_bitcoin: $('#participant1_bitcoin_address').val(),
        signature: $('#participant1_signature').val()
      },
      success: function(result,request){
        console.log('result.result=' + result.result);
        console.log('result.error=' + result.error);
        console.log('result.id=' + result.id);
        if (result.result){
          sessionStorage.msg = 'Ok.';
          $('#alert_error_button').click();
        }else{
          if (result.error == null){
            sessionStorage.msg = result.error.message;
            $('#alert_error_button').click();
          }
        }
      },
      error: function (error) {
        console.log('result=' + result);
        sessionStorage.msg = 'Ошибка запроса.';
        $('#alert_error_button').click();
      }
    });
  }
});

