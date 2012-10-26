var bal = 1000;


$(function(){

	$('#amount').focus();
	$('#deposit').click(dep);
	$('#withdraw').click(wd);
});

function dep(){
	var amt = $('#amount').val();
	amt = parseInt(amt);
	bal = bal + amt;
	$('#balance').text('$'+bal);
	checkBalance(bal);
}

function wd(){
	var amt = $('#amount').val();
	amt = parseInt(amt);
	bal = bal - amt;
	$('#balance').text('$'+bal);
	checkBalance(bal);
}

function checkBalance(bal)
{
	if (bal>0)
		{
			$('#balance').css('background','white').css('color', 'black');
		}
		else {
			$('#balance').css('background','red').css('color', 'white');
		}
}

