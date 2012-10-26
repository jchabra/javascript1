var checkingBal = 850;
var savingsBal = 1000;

$(function(){
	$('#checking_amount').focus();
	$('#checking_deposit').click(checking_dep);
	$('#checking_withdraw').click(checking_wd);
	$('#savings_deposit').click(savings_dep);
	$('#savings_withdraw').click(savings_wd);

	// var checkingBal = $('#checking_balance').text();
	// checkingBal = parseInt(checkingBal);

	// var savingsBal = $('#savings_amount').text();
	// savingsBal = parseInt(savingsBal);

	// var total = checkingBal + savingsBal;
	// total = parseInt(total);
});


function checking_dep(){
	var amt = $('#checking_amount').val();
	amt = parseInt(amt);
	checkingbal = checkingbal + amt;
	$('#checking_balance').text('$'+checkingBal);
	// updateBalance(bal);
}

function checking_wd(){
	var amt = $('#checking_amount').val();
	amt = parseInt(amt);
	checkingbal = checkingbal - amt;
	// updateBalance(bal);

	if(amt <= checkingBal)
	{
		checkingBal = checkingBal - amt;
	}
	else if(amt <= (checkingBal + savingsBal))
	{
		savingsBal = (checkingBal + savingsBal) - amt;
		checkingBal = 0;
	}

	$('#checking_balance').text('$'+checkingBal);
	$('#savings_balance').text('$'+savingsBal);
}

function savings_dep(){
	var amt = $('#savings_amount').val();
	amt = parseInt(amt);
	savingsBal = savingsBal + amt;
	$('#savings_balance').text('$'+savingsBal);	
	// updateBalance(bal);
}

function savings_wd(){
	var amt = $('#savings_amount').val();
	amt = parseInt(amt);
	
	// updateBalance(bal);

	if(amt <= savingsBal)
	{
	  savingsBal = savingsBal - amt;
	}
	$('#savings_balance').text('$'+savingsBal);
}







// function updateBalance(bal)
// {
// 	if (bal>0)
// 		{
// 			$('#checking_balance').css('background','white').css('color', 'black');
// 		}
// 		else {
// 			$('#checking_balance').css('background','red').css('color', 'white');
// 		}
// }

