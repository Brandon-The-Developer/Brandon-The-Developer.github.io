var clicks = 0;
var helpers = 0;

function clickUp(num)
{
	clicks = clicks + num;
	document.getElementById("clickNum").innerHTML = clicks;
	checkS();
	format();
	
}

function checkS()
{
	if(clicks === 1)
	{
		document.getElementById("needS").innerHTML = "Click!";
	}
	else
	{
		document.getElementById("needS").innerHTML = "Clicks!";
	}
}

function format()
{
	var x = document.getElementById("clickNum").textContent.length;
	x = (10*x) + 125
	document.getElementById("box").style.width = (x + "px");
}

function buyHelp()
{
	var helperCost = Math.floor(10 * Math.pow(1.1,helpers));
	if(clicks >= helperCost)
	{
		helpers++;
		clicks -= helperCost;
		document.getElementById("helpNum").innerHTML = helpers;
		document.getElementById("clickNum").innerHTML = clicks;
	}
	var nextCost = Math.floor(10 * Math.pow(1.1,helpers)); 
    document.getElementById("helpCost").innerHTML = "Costs " + nextCost + " Clicks";
	
}

window.setInterval(function(){

	clickUp(helpers);

}, 1000);