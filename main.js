import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

/*
Router.route('', function () {});
Router.route('/req',function () {
	console.log("req");
});
*/

window.addEventListener('load', function() {
	$('#home_tabs').tabs();
  	$('#home_tabs_enterAirdrop').tabs();
	$('#home_tabs_distrAirdrop').tabs();
    $('input[type=submit]').button();
    $('input[type=button]').button();
});