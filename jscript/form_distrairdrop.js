$(document).ready(function(){
  $('#tabs_setting_count_btn').on('click',function(e){
    if (e != null){var evt = e || window.event;}
    console.log('click tabs_setting_count_btn');
    $('#tabs_setting_height').attr('disabled',false);

  });

  $('#tabs_setting_height_btn').on('click',function(e){
    if (e != null){var evt = e || window.event;}
    console.log('click tabs_setting_height_btn');

  });
  
  $('#tab_list_airdrop_btn').on('click',function(e){
    if (e != null){var evt = e || window.event;}
    console.log('click tab_list_airdrop_btn');

  });

  $('#tab_transactions_airdrop_table').on('click',function(e){
    if (e != null){var evt = e || window.event;}
    console.log('click tab_transactions_airdrop_table');

  });
});