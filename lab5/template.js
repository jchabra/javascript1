var target_val = 0;
$(function(){
  $('.button').click(whatVal);
  $('#blue').click(blue);
  $('#red').click(red);
});
function whatVal(){
  var value = $(this).val();
  value = parseInt(value);
  target_val = value + target_val;
  $('#target').text(target_val);
}
function whatColor(){
  var value = $(this).val();

  // $('#target').css('background-color',value);
    alert('value');
}
function blue(){
  $('#target').css('background-color','blue');
}
function red(){
  $('#target').css('background-color','red');
}