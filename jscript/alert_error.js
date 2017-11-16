$(document).ready(function(){
	$('#alert_error_button').on('click',function(e){
		if (e != null){var evt = e || window.event;}
	    console.log('sessionStorage.msg=' + sessionStorage.msg);
		if (sessionStorage.msg == null || sessionStorage.msg == ''){return;}
		var id = 'dialog-message-error';
		var div = document.getElementById(id);
		if (div){$('#'+id).remove();}
		$('body').append('<div id="' + id + '">' + sessionStorage.msg + '</div>');
		$('#'+id).addClass('ui-state-error').attr('title','ОШИБКА').css({'background':'none','border':'none'});
		$(function(){
			$('#'+id).dialog({
				modal:true,
				width:500,
				show:{effect:'fadeIn',duration:500},
				hide:{effect:'fadeOut',duration:500},
				closeOnEscape:false,
				open:function() {
					$(this).parents('.ui-dialog:first').find('.ui-dialog-titlebar-close')
						.attr({'onclick':"$('#"+id+"').parent().find('.ui-dialog-buttonpane button:last').trigger('click')"});
				},
				buttons: {
					'Закрыть': function(){
						$(this).dialog('close');
					}
				}
			});
		});
	});
});