var clicks = 0;
var helpers = 0;
var currXp = 0;
var lv = 1;
var nextXp = (lv +5)*(lv+5);


function clickUp(num)
{
	clicks = clicks + num;
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

function xpUpdate()
{
	if(currXp >= nextXp)
	{
		currXp -= nextXp;
		lv++;
		nextXp = (lv +5)*(lv+5);	
	}
	var per = currXp / nextXp;
	per = Math.floor(per*100);
	var elements = document.querySelectorAll('.graph');
    for(var i=0; i<elements.length; i++){
    elements[i].style.width = per + "%";
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
    document.getElementById("helpCost").innerHTML = nextCost;
	
}

window.setInterval(function(){
	clickUp(helpers);
}, 1000);
