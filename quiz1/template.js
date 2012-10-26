var answer = 0;

$(function(){

  $('#add').click(add);

})

function add()
{
	var number1 = $('#number1').val();
	number1 = parseInt(number1);
	var number2 = $('#number2').val();
	number2 = parseInt(number2);
	answer = number1 + number2;
	$('#answer').text(answer);
}