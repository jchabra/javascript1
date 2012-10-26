$(function(){

	// this is single-line comment

	/* 
	* this is a mult-line comment 
	*/

	var balance = 1000;

	var response = prompt("Do you want to make a (d)eposit, (w)ithdraw or (q)uit?");
	
	
	while(response != 'q') 
		
	{
		var amount = prompt('How much?');
		amount = parseInt(amount)

		if(response == 'd')
		{	
			balance = balance + amount;
			console.log('You just deposited $' + amount + '.00 and your balance is $' + balance + '.00');
		}
		else
		{
			balance = balance - amount;
			console.log('You just withdrew $' + amount + '.00 and your balance is $' + balance + '.00');
		}

		response = prompt('Do you want to make a (d)eposit or (w)ithdraw or (q)uit?');
		
	}

	console.log('Thank you for ATMing with us, your balance is : $' + balance + '.00');

});







