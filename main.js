var clicks = 0;

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
	x += 12;
	document.getElementById("box").style.width = (x + "%");
}