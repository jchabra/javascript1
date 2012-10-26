$(function(){

$('#yellow').click(yellow);
$('#black').click(black);
$('#small').hover(small, unhover);
$('#big').hover(big, unhover);
// $('#reverse').hover(reverse($('#target1'.val())));
// $('#reverse').hover(reverse($('#target2').val()), unhover);
$('#reverse').hover(funreverse);
$('#clear').click(clear);
$('#normal').dblclick(normal);

});



function small(){
  $('#target2').css('font-size','4px');
}

function yellow(){
  $('body').css('background-color','yellow');
}

function black(){
  $('body').css('background-color','black');
}

function big(){
  $('#target2').css('font-size','30px');
  $('#target2').css('color','green');
  $('#target2').css('font-style', 'italic');
}

function unhover(){
  $('#target2').css('font-size', '14px');
  $('#target2').css('color','black');
  $('#target2').css('font-style', 'normal');  
}

function clear(){
      $('#target1').val("");
    $('#target2').val("");

 }

function normal(){

  var x = $('#target1').val();
  $('#target2').val(x);
    $('#target1').val(" ");
}

function funreverse(){
  // alert('here');
  var input = $('#target2').val();
    $('#target2').val(input.split("").reverse().join(""));
    $('#target2').css('font-style', 'italic');
}
//input.split("").reverse().join("")