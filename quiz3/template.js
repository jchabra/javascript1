$(function(){

  $('#add').click(add_colors);
  $('#colors').on('hover', '.color', change_bg);

})

function add_colors()
{
	var colors = $('#colors_string').val();
	colors = colors.split(', ');
	
	for(var i = 0; i < colors.length; i++)	
	{
		var color = $('<div>');
		color.addClass('color');
		color.css('background-color', colors[i]); 
		$('#colors').append(color); 
	}
}

function change_bg()
{
	var color = $(this).css('background-color'); 
	$('#hoverbox').css('background-color', color); 
}