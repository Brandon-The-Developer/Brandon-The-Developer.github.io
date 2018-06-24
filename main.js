var clicks = 0;
var helpers = 0;
var power =0;
var currXp = 0;
var lv = 1;
var nextXp = 36;
var hasHitLv25 = false;
var loaded = false;
var myaudio = new Audio('music.mp3');
myaudio.loop = true;


function clickUp(num)
{
	clicks = num===1? (power===0?clicks + num : (power*10) + clicks ) : clicks + num;
	updateBar(num);
	checkS();
	format();
}

function updateBar(num)
{
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
    for(var i=0; i<elements.length; i++)
	{
		elements[i].style.width = per + "%";
	}
	document.getElementById("currentXP").innerHTML = currXp;
	document.getElementById("levelUpXP").innerHTML = nextXp;
	document.getElementById("level").innerHTML = "xp Lv:" + lv;
}

function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
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


	
function save()
{
	var save = {
    clicks: clicks,
    helpers:helpers,
	power:power,
	currXp:currXp,
	lv:lv,
	nextXp:nextXp,
	}
	localStorage.setItem("save",JSON.stringify(save));
}	

function load()
{
	var savegame = JSON.parse(localStorage.getItem("save"));
	if (typeof savegame.clicks !== "undefined") clicks = savegame.clicks;
	if (typeof savegame.helpers !== "undefined") helpers = savegame.helpers;
	if (typeof savegame.power !== "undefined") power = savegame.power;
	if (typeof savegame.currXp !== "undefined") currXp = savegame.currXp;
	if (typeof savegame.lv !== "undefined") lv = savegame.lv;
	if (typeof savegame.nextXp !== "undefined") nextXp = savegame.nextXp;
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

function mute()
{
	myaudio.muted = !myaudio.muted;
	document.getElementById("mute").innerHTML = document.getElementById("mute").innerHTML === "Mute" ? "UnMute" : "Mute";
}

window.setInterval(function(){
	clickUp(helpers);
	document.getElementById("clickNum").innerHTML = clicks;
	document.getElementById("helpNum").innerHTML = helpers;
	if(hasHitLv25 !== false && lv >= 25 )
	{
		document.getElementById("powerNum").innerHTML = " Lv: ";
		document.getElementById("unlockStart").innerHTML = "Click Power";
		document.getElementById("power").innerHTML = power;
		hasHitLv25 = true;
	}
	if(!loaded)
	{
		load();
		myaudio.play();
		loaded=true;
	}
}, 1000);
