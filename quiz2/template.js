$(function(){

  $('#makeboxes').click(make_boxes);

})

function make_boxes()
{
	var number = $('#number').val();
	number = parseInt(number);
	
	for(var i = 0; i < number; i++)
	{
	  var box = $('<div>'); 
	  box.text(i);
	  box.addClass('box');
	  $('#boxes').append(box);
	}
}