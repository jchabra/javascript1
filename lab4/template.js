$(function(){

  $('#color_button').click(add_color);
  $('#colors').on('hover', '.color', hovering); //selects the #colors id; calls out to the 

})

function hovering()
{
  	$(this).toggleClass('hover'); //(this) is the the thing you're hovering over; Toggle turns off the class when you move away from it
}

function add_color()
{
	var color = $('#color_text').val(); //you type in the value and you get a color out of it
	var d = $('<div>'); //it will create a div
	d.addClass('color'); //it will create a div with a class of .color
	d.css('background-color', color); //this div will have a style; the color will be the color that's input into the field
	$('#colors').append(d);
}