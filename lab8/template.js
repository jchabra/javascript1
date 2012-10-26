var counter = 0; //global variable

$(function(){

  setTimeout(display_text, 3000); //after 3000 miliseconds, i want you to display some text
  setInterval(display_more, 100); //it changes on an interval every second

})

function display_more()
{
	var d = $('<div>'); //create a div
	// d.text(counter); //set the div text to the variable counter
	d.addClass('funky');
	$('#test').prepend(d); //divs get prepended
	counter++;
	var color1 = counter % 256; // this will be a number no greater than 255 (because we're doing a modulus %)
	var color2 = (counter + counter) % 256; 
	var color3 = (counter * counter) % 256; 
	var color_string = 'rgb('+ color1 +', '+ color2 +', '+ color3 +')';
	d.css('background-color', color_string);
}

function display_text()
{
	$('#test').text('hello world')
}