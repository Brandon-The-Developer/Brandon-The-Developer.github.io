var clicks = 0;
var helpers = 0;
var power =0;
var currXp = 0;
var lv = 1;
var nextXp = 36;


function clickUp(num)
{
	clicks = num===1? (power===0?clicks + num : (power*10) + clicks ) : clicks + num;
	currXp += num;
	if(currXp >= nextXp)
	{
		currXp -= nextXp;
		lv++;
		nextXp = (lv +5)*(lv+5);	
	}
	var per = currXp / nextXp;
	per = Math.floor(per*100);
	document.getElementById("clickNum").innerHTML = clicks;
	var elements = document.querySelectorAll('.graph');
    for(var i=0; i<elements.length; i++){
    elements[i].style.width = per + "%";
	}
	document.getElementById("currentXP").innerHTML = currXp;
	document.getElementById("levelUpXP").innerHTML = nextXp;
	document.getElementById("level").innerHTML = "xp Lv:" + lv;
	checkS();
	format();

	
}

function checkS()
{
	if(helpers === 1)
	{
		document.getElementById("needS").innerHTML = "Helper!";
	}
	else
	{
		document.getElementById("needS").innerHTML = "Helpers!";
	}
}


	
	


function format()
{
	var x = document.getElementById("clickNum").textContent.length;
	x = (10*x) + 125
	document.getElementById("box").style.width = (x + "px");
}
//pwer for cost+inome per unit= time period
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
    document.getElementById("helpCost").innerHTML = nextCost;
	//10^(1+
}

function buyPower()
{
	if(lv >= 25)
	{
		var powerCost = 10000;
		document.getElementById("power").innerHTML = power;
		if(clicks >= powerCost)
		{
			power++;
			clicks -= powerCost;
			document.getElementById("power").innerHTML = power;
			document.getElementById("clickNum").innerHTML = clicks;
		}
		var nextPCost = Math.floor(10000 * Math.pow(1.099,power)); 
		document.getElementById("powerCost").innerHTML = nextPCost;
	}
}

window.setInterval(function(){
	clickUp(helpers);
	document.getElementById("clickNum").innerHTML = clicks;
	document.getElementById("helpNum").innerHTML = helpers;
	if(lv >= 25)
	{
		document.getElementById("powerNum").innerHTML = " Lv: ";
		document.getElementById("unlockStart").innerHTML = "Click Power";
		document.getElementById("power").innerHTML = power;
	}
}, 1000);
