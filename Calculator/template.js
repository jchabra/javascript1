var total = 0;

$(function(){

  $('#add').click(add);
  $('#sub').click(sub);
  $('#multiply').click(multiply);
  $('#divide').click(divide);
  $('#clear_button').click(clear);
  $('#add').hover(total_bg);
  $('#sub').hover(total_bg);
  $('#multiply').hover(total_bg);
  $('#divide').hover(total_bg);		

})

function add()
{
	var value1 = $('#value1').val();
	value1 = parseInt(value1);
	var value2 = $('#value2').val();
	value2 = parseInt(value2);
	total = value1 + value2;
	$('#total').text('You added ' + value1 + ' + ' + value2 + ' and as a result you get ' + total);
}

function sub()
{
	var value1 = $('#value1').val();
	value1 = parseInt(value1);
	var value2 = $('#value2').val();
	value2 = parseInt(value2);
	total = value1 - value2;
	$('#total').text('You subtracted ' + value1 + ' - ' + value2 + ' and as a result you get ' + total);
}

function multiply()
{
	var value1 = $('#value1').val();
	value1 = parseInt(value1);
	var value2 = $('#value2').val();
	value2 = parseInt(value2);
	total = value1 * value2;
	$('#total').text('You multiplied ' + value1 + ' * ' + value2 + ' and as a result you get ' + total);
}

function divide()
{
	var value1 = $('#value1').val();
	value1 = parseInt(value1);
	var value2 = $('#value2').val();
	value2 = parseInt(value2);
	total = value1 / value2;
	$('#total').text('You divided ' + value1 + ' / ' + value2 + ' and as a result you get ' + total);
}

function clear()
{
	var value1 = $('#value1').val('');
	var value2 = $('#value2').val('');
	var total = $('#total').text('');
	total.css('background-color', 'white');  
}

function total_bg()
{
	if (this.id == 'add')
	{
		$('#total').css('background-color', 'red');
	}
	else if (this.id == 'sub')
	{
		$('#total').css('background-color', 'blue');
	}
	else if (this.id == 'multiply')
	{
		$('#total').css('background-color', 'green');
	}
	else if (this.id == 'divide')
	{
		$('#total').css('background-color', 'yellow');
	}
}

