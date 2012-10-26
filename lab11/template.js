var Dog; //uppercase bc it is a generator that creates little children


$(function(){

Parse.initialize("jLjhTtCIkJSbti28zQ0xi50mLWj2gigpPlC8aXht", "pDIEswRs83zv3mOV52bGWuwhU6uvgPxn4DhaV5uG");
Dog = Parse.Object.extend("Dog");
$('#b1').click(save_data);
$('#b2').click(get_data);

});


function save_data()
{
	var d1 = new Dog(); //puppy
	var name = $('#t1').val();
	var age = $('#t2').val();
	d1.save({dog_name: name, dog_age: age}, { success: show_success }); // "dog_name" = key; "name" = value
}

function show_success()
{
	console.log('data saved to parse!');
}

function get_data()
{
	var query = new Parse.Query(Dog)
	query.ascending("dog_name"); //how you want to sort it
	query.find({ //sends the query and asks Parse to give us this info
		success: function(results) {
			for(var i = 0; i < results.length; i++)
			{
				var p = $('<p>');
				var name = results[i].get('dog_name');
				p.text(name);
				$('#data').prepend(p);
			}
		},
		error: function(error) {}
	});
}





// var testObject = new TestObject();
// testObject.save({foo: "bar"}, {
//   success: function(object) { //if it's successful, then send an alert
    // alert("yay! it worked");
//   }
// });