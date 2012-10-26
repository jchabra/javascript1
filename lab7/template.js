$(function(){

// $('.a').hover(color_the_box);
$('.a').mouseenter(color_the_box);
$('.a').mouseleave(make_it_white);
$('#add').click(add_node);
$('#addcolors').click(add_colors);
$('#boxes').on('hover', '.box', make_pretty); //the action is 'hover' and you want to use class="box"; 'make_pretty' is the name of the function

})

function make_pretty()
{
	$(this).toggleClass('alert');
}

function add_colors()
{
	var count = $('#count').val();
	count = parseInt(count);
	for(var i = 0; i < count; i++)
	{
	  var box = $('<div>'); //creating a DIV element and the variable is called box
	  box.text(i);
	  box.addClass('box');
	  // box.css('background', '#ccc');
	  $('#boxes').append(box);
	}
}

function add_node()
{
	var element = $('#element').val();
	var node = $('<' + element + '>'); //it will put the element in "< >"'s 
	var css = $('#css').val();
	var text = $('#text').val();
	node.addClass(css);
	node.text(text);
	$('#elements').prepend(node);
}



function color_the_box()
{
  // $(this).css('background', 'red'); --- THIS IS AN INLINE STYLE. YOU SHOULDN'T DO THIS UNLESS ABSOLUTELY NECESSARY.
  // $(this).addClass('alert'); --- THIS DOESN'T GET RID OF THE HOVER STATE. 
  // $(this).toggleClass('alert'); // -- THIS "TOGGLES" IN AND OUT OF THE "CLASS."

  var color = $(this).text();
  // $(this).css('background', color);
  $(this).css('background', color);
}

function make_it_white()
{
$(this).css('background', 'white');
}