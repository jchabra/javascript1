$(function(){

  $('#add').click(search_flickr);
  

})

function search_flickr()
{
	var search = $('#search').val();
	$.getJSON('http://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=983623213423a06bcf786170f75328ca&tags=' + search + '&format=json&jsoncallback=?', flickrResults); 
	// change the key in the url above to personal (jasmine's) key. Get rid of the "no" in front of jsoncallback. The last part that says =1, change that to =? and add ", flickrResults"
}

function flickrResults(data)
{
	$.each(data.photos.photo, getPhoto); 
}

function getPhoto(index, item) // get photo from the index and it will be the objected "photo" -- ex: go to index1 and get photo
{
	var src = "http://farm"+ item.farm +".static.flickr.com/"+ item.server +"/"+ item.id +"_"+ item.secret +"_m.jpg"; //farm = farm of computers (data center)
	var div = $('<div>');
	div.addClass('photo');
	var img = $('<img>');
	img.attr('src', src); //attaching the image to the photos div
	div.append(img);
	$('#photos').prepend(div);
}