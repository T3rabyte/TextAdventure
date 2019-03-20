let images = document.getElementById('image');
let ennemyplaatje = document.getElementById('plaatje');
let kamers = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg",];
kamers[10] = "10.jpg";
kamers[11] = "11.jpg";
kamers[12] = "12.jpg";
kamers[13] = "13.jpg";
kamers[14] = "14.jpg";
kamers[15] = "15.jpg";
kamers[16] = "16.jpg";
kamers[17] = "17.jpg";
kamers[18] = "18.jpg";
kamers[19] = "19.jpg";
kamers[20] = "20.jpg";
kamers[21] = "21.jpg";
kamers[22] = "22.jpg";
kamers[23] = "23.jpg";
kamers[24] = "24.jpg";
kamers[25] = "25.jpg";

kamers[100] = "titelscreen.png";

kamers[200] = "dedeScreen.png";

var dicesUsed = 0;

let ennemy = [];
ennemy[0] = "wolf.png";
ennemy[1] = "viking.png";
ennemy[2] = "ogre.png";
ennemy[3] = "wachter.png";
ennemy[4] = "drakon.png";
ennemy[5] = "endbozz.png";

let diceArray = [];
let indexKamer;
let zitInKamer = 101;

var damageEnemy;
var	enemyIs;

let richtingen = [];
richtingen[0] = ["Spjelkavik", "Angvik", "Knarrlaget"];
richtingen[1] = ["Trondheim", "Angvik", "Skarsvag"];
richtingen[2] = ["Trondheim", "Spjelkavik", "Knarrlaget", "Rakvag", "Skarsvag"];
richtingen[3] = ["Trondheim", "Angvik", "Rakvag", "Hellefjord"];
richtingen[4] = ["Angvik", "Knarrlaget", "Skarsvag", "Hellefjord", "Hjemmeluft"];
richtingen[5] = ["Spjelkavik", "Angvik", "Rakvag", "Hjemmeluft", "Stjordal", "Hitra"];
richtingen[6] = ["Knarrlaget", "Rakvag"];
richtingen[7] = ["Rakvag", "Skarsvag"];
richtingen[8] = ["Skarsvag"];
richtingen[9] = ["Skarsvag"];

var dataBroadsword;
var dataCrystal;
var dataFireball;
var dataBoop;

var healthWolf = 30;
var healthViking = 60;
var healthOgre = 60;
var healthWachter = 60;
var healthDragon = 70;
var healthEndboss = 80;

var wolf = false;
var viking = false;
var wachter = false;
var ogre = false;
var dragon = false;
var endboss = false;

var attackDamage;

var richting = 0;

let sound = new Audio();


var broadswordStyle = document.getElementById('broadsword');
var crystalStyle = document.getElementById('healingCrystal');
var fireballStyle = document.getElementById('fireball');
var boopStyle = document.getElementById('boop');

var mogenlijkhedenJS = document.getElementById('mogenlijkheden');

let inventory = ["broadsword", "crystal", "fireball","boop"];

let diceValue;

var goldFound = false;
var goldFound2 = false;
var healthFound = false;
var healthFound2 = false;

document.getElementById('start').onclick = function() {start();}; 

document.getElementById('attack').onclick = function() {attack();};

document.getElementById('muteMusic').onclick = function(){sound.muted = true;};
document.getElementById('resumeMusic').onclick = function(){sound.muted = false;};

var hide = document.getElementById('start')
var appear10 = document.getElementById('appear');
var appear11 = document.getElementById('appear2');
var appear12 = document.getElementById('appear3');

myInput.addEventListener('keydown', getInput, false);

var locationjs = document.getElementById('locationHTML');

var infoGold = 5;
var infoHealth = 15;

kamerWeergaven();

function start()
{
	hide.classList.toggle("hiden");
	appear10.classList.toggle("hiden");
	appear11.classList.toggle("hiden");
	zitInKamer = 1;
	kamerWeergaven();
	muziekstart();
}

function kamerWeergaven()
{
	indexKamer = zitInKamer -= 1;
	console.log(indexKamer);
	images.src = "img/background/" + kamers[indexKamer];
	diceGenarator();
	location1();
	mogenlijkhedenJS.innerHTML = "";
	document.getElementById('coins').innerHTML ="Gold: <br>" +	infoGold + "💰";
	document.getElementById('yourHealth').innerHTML ="Health: <br>" + infoHealth + "❤️";
	if (indexKamer == 100) 
	{
		document.getElementById('coins').innerHTML ="Gold: <br>∞💰";
		document.getElementById('yourHealth').innerHTML ="Health: <br>∞❤️";
	}
	mogenlijkheden();
}

function location1()
{
	switch (zitInKamer)
	{
		case 0:
			locationjs.innerHTML = "Location: <br>Trondheim";
			break;
		case 1:
			locationjs.innerHTML = "Location: <br>Spjelkavik";
			break;
		case 2:
			locationjs.innerHTML = "Location: <br>Angvik";
			break;
		case 3:
			locationjs.innerHTML = "Location: <br>Knarrlaget";
			break;
		case 4:
			locationjs.innerHTML = "Location: <br>Rakvag";
			break;
		case 5:
			locationjs.innerHTML = "Location: <br>Skarsvag";
			break;
		case 6:
			locationjs.innerHTML = "Location: <br>Hellefjord";
			break;
		case 7:
			locationjs.innerHTML = "Location: <br>Hjemmeluft";
			break;
		case 8:
			locationjs.innerHTML = "Location: <br>Stjordal";
			break;
		case 9:
			locationjs.innerHTML = "Location: <br>Hitra";
			break;
		case 10:
			locationjs.innerHTML = "Location: <br>Path";
			break;
		case 11:
			locationjs.innerHTML = "Location: <br>Path";
			break;
		case 12:
			locationjs.innerHTML = "Location: <br>Path";
			break;
		case 13:
			locationjs.innerHTML = "Location: <br>Path";
			break;
		case 14:
			locationjs.innerHTML = "Location: <br>Treasure";
			break;
		case 15:
			locationjs.innerHTML = "Location: <br>Treasure";
			break;
		case 16:
			locationjs.innerHTML = "Location: <br>Path";
			break;
		case 17:
			locationjs.innerHTML = "Location: <br>Path";
			break;
		case 18:
			locationjs.innerHTML = "Location: <br>Path";
			break;
		case 19:
			locationjs.innerHTML = "Location: <br>Treasure";
			break;
		case 20:
			locationjs.innerHTML = "Location: <br>Path";
			break;
		case 21:
			locationjs.innerHTML = "Location: <br>Path";
			break;
		case 22:
			locationjs.innerHTML = "Location: <br>Treasure";
			break;
		case 23:
			locationjs.innerHTML = "Location: <br>Path";
			break;
		case 24:
			locationjs.innerHTML = "Location: <br>Path";
			break;
		case 100:
			locationjs.innerHTML = "Location: <br>Titelscreen";
			break;
		case 200:
			locationjs.innerHTML = "Location: <br>Hell"
	}
}

function muziekstart()
{
	sound.src = "img/muziek/muziek.wav";
	sound.loop = true
	sound.volume = 0.02;
	sound.play();
}

function diceCreator1()
{
	let dice7 = document.createElement('div');

	dice7.id = 'dice1';
	dice7.className = 'dice';
	document.getElementById('dice1').setAttribute('draggable', true);
	document.getElementById('dice1').addEventListener('ondragstart', function(){drag(event)}, true);

	document.getElementById('viewer1').appendChild(dice1);
}

function diceCreator2()
{
	let dice8 = document.createElement('div');

	dice8.id = 'dice2';
	dice8.className = 'dice';
	document.getElementById('dice2').setAttribute('draggable', true);
	document.getElementById('dice2').addEventListener('ondragstart', function(){drag(event)}, true);

	document.getElementById('viewer1').appendChild(dice2);
}

function diceCreator3()
{
	let dice9 = document.createElement('div');

	dice9.id = 'dice3';
	dice9.className = 'dice';
	document.getElementById('dice3').setAttribute('draggable', true);
	document.getElementById('dice3').addEventListener('ondragstart', function(){drag(event)}, true);

	document.getElementById('viewer1').appendChild(dice3);
}

function diceCreator4()
{
	let dice10 = document.createElement('div');

	dice10.id = 'dice4';
	dice10.className = 'dice';
	document.getElementById('dice4').setAttribute('draggable', true);
	document.getElementById('dice4').addEventListener('ondragstart', function(){drag(event)}, true);

	document.getElementById('viewer1').appendChild(dice4);
}

function diceCreator5()
{
	let dice11 = document.createElement('div');

	dice11.id = 'dice5';
	dice11.className = 'dice';
	document.getElementById('dice5').setAttribute('draggable', true);
	document.getElementById('dice5').addEventListener('ondragstart', function(){drag(event)}, true);

	document.getElementById('viewer1').appendChild(dice5);
}

function diceCreator6()
{
	let dice12 = document.createElement('div');

	dice12.id = 'dice6';
	dice12.className = 'dice';
	document.getElementById('dice6').setAttribute('draggable', true);
	document.getElementById('dice6').addEventListener('ondragstart', function(){drag(event)}, true);

	document.getElementById('viewer1').appendChild(dice6);
}

function diceGenarator()
{
	diceCreator1();
	diceCreator2();
	diceCreator3();
	diceCreator4();
	diceCreator5();
	diceCreator6();
	
	let dice1 = document.getElementById('dice1');
	let dice2 = document.getElementById('dice2');
	let dice3 = document.getElementById('dice3');
	let dice4 = document.getElementById('dice4');
	let dice5 = document.getElementById('dice5');
	let dice6 = document.getElementById('dice6');

	diceArray[0] = Math.floor( Math.random() * 6 ) +1;
	diceArray[1] = Math.floor( Math.random() * 6 ) +1;
	diceArray[2] = Math.floor( Math.random() * 6 ) +1;
	diceArray[3] = Math.floor( Math.random() * 6 ) +1;
	diceArray[4] = Math.floor( Math.random() * 6 ) +1;
	diceArray[5] = Math.floor( Math.random() * 6 ) +1;


	dice1.innerHTML = diceArray[0];
	dice2.innerHTML = diceArray[1];
	dice3.innerHTML = diceArray[2];
	dice4.innerHTML = diceArray[3];
	dice5.innerHTML = diceArray[4];
	dice6.innerHTML = diceArray[5];
}

function allowDrop(ev) 
{
  ev.preventDefault();
}

function drag(ev) 
{
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) 
{
  ev.preventDefault();
  data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}

function dropBroadsword(ev) 
{
  ev.preventDefault();
  dataBroadsword = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(dataBroadsword));
}

function dropCrystal(ev) 
{
  ev.preventDefault();
  dataCrystal = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(dataCrystal));
}

function dropFireball(ev) 
{
  ev.preventDefault();
  dataFireball = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(dataFireball));
}

function dropBoop(ev) 
{
  ev.preventDefault();
  dataBoop = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(dataBoop));
}

function battle()
{
	if (zitInKamer == 11) 
	{
		appear12.classList.toggle("hiden");
		ennemyplaatje.src = "img/enemys/" + ennemy[0];
		enemyIs = healthWolf;
		wolf = true;
		document.getElementById('plaatjeEnemy').innerHTML = "Enemy: " + enemyIs + "❤️";
		kamerWeergaven();
		battleWolf();
	}

	if (zitInKamer == 12) 
	{
		appear12.classList.toggle("hiden");
		ennemyplaatje.src = "img/enemys/" + ennemy[0];
		enemyIs = healthWolf;
		wolf = true;
		document.getElementById('plaatjeEnemy').innerHTML = "Enemy: " + enemyIs + "❤️";
		kamerWeergaven();
		battleWolf();
	}

	if (zitInKamer == 13) 
	{
		appear12.classList.toggle("hiden");
		ennemyplaatje.src = "img/enemys/" + ennemy[0];
		enemyIs = healthWolf;
		wolf = true;
		document.getElementById('plaatjeEnemy').innerHTML = "Enemy: " + enemyIs + "❤️";
		kamerWeergaven();
		battleWolf();
	}

	if (zitInKamer == 14) 
	{
		kamerWeergaven();
		battleWachter();
	}

	if (zitInKamer == 17) 
	{
		appear12.classList.toggle("hiden");
		ennemyplaatje.src = "img/enemys/" + ennemy[1];
		enemyIs = healthViking;
		viking = true;
		document.getElementById('plaatjeEnemy').innerHTML = "Enemy: " + enemyIs + "❤️";
		kamerWeergaven();
		battleViking();
	}

	if (zitInKamer == 18) 
	{
		kamerWeergaven();
		battleWachter();
	}

	if (zitInKamer == 19) 
	{
		appear12.classList.toggle("hiden");
		ennemyplaatje.src = "img/enemys/" + ennemy[1];
		enemyIs = healthViking;
		viking = true;
		document.getElementById('plaatjeEnemy').innerHTML = "Enemy: " + enemyIs + "❤️";
		kamerWeergaven();
		battleViking();
	}

	if (zitInKamer == 21) 
	{
		kamerWeergaven();
		battleOgre();
	}

	if (zitInKamer == 22) 
	{
		kamerWeergaven();
		battleOgre();
	}

	if (zitInKamer == 24) 
	{
		appear12.classList.toggle("hiden");
		ennemyplaatje.src = "img/enemys/" + ennemy[1];
		enemyIs = healthViking;
		viking = true;
		document.getElementById('plaatjeEnemy').innerHTML = "Enemy: " + enemyIs + "❤️";
		kamerWeergaven();
		battleViking();
	}

	if (zitInKamer == 25) 
	{
		kamerWeergaven();
		battleDragon();
	}

	if (zitInKamer == 26) 
	{
		kamerWeergaven();
		battleWachter();
	}
}

function battleWolf()
{
	if (dicesUsed == 6) 
	{
		damageEnemy = Math.floor( Math.random() * 3 ) +1;
		infoHealth -= damageEnemy;
		if (infoHealth <= 0) 
		{
			zitInKamer = 201;
			appear10.classList.toggle("hiden");
			appear11.classList.toggle("hiden");
			appear12.classList.toggle("hiden");
			infoGold = "∞";
			infoHealth = "∞";
			kamerWeergaven();
		}
		document.getElementById('yourHealth').innerHTML ="Health: <br>" + infoHealth + "❤️";
		document.getElementById('coins').innerHTML ="Gold: <br>" +	infoGold + "💰";
		diceGenarator();
		dicesUsed = 0;
	}
}

function battleViking()
{
	if (dicesUsed == 6) 
	{
		damageEnemy = Math.floor( Math.random() * 6 ) +1;
		infoHealth -= damageEnemy;
		if (infoHealth <= 0) 
		{
			zitInKamer = 201;
			appear10.classList.toggle("hiden");
			appear11.classList.toggle("hiden");
			appear12.classList.toggle("hiden");
			infoGold = "∞";
			infoHealth = "∞";
			kamerWeergaven();
		}
		document.getElementById('yourHealth').innerHTML ="Health: <br>" + infoHealth + "❤️";
		document.getElementById('coins').innerHTML ="Gold: <br>" +	infoGold + "💰";
		diceGenarator();
		dicesUsed = 0;
	}
}

function battleOgre()
{
	if (dicesUsed == 0) 
	{
		appear12.classList.toggle("hiden");
		ennemyplaatje.src = "img/enemys/" + ennemy[2];
		enemyIs = healthOgre;
		viking = true;
		document.getElementById('plaatjeEnemy').innerHTML = "Enemy: " + enemyIs + "❤️";
	}
	if (dicesUsed == 6) 
	{
		damageEnemy = Math.floor( Math.random() * 6 ) +1;
		infoHealth -= damageEnemy;
		if (infoHealth <= 0) 
		{
			zitInKamer = 201;
			appear10.classList.toggle("hiden");
			appear11.classList.toggle("hiden");
			appear12.classList.toggle("hiden");
			infoGold = "∞";
			infoHealth = "∞";
			kamerWeergaven();
		}
		document.getElementById('yourHealth').innerHTML ="Health: <br>" + infoHealth + "❤️";
		document.getElementById('coins').innerHTML ="Gold: <br>" +	infoGold + "💰";
		diceGenarator();
		dicesUsed = 0;
	}
}

function battleWachter()
{
	if (dicesUsed == 0) 
	{
		appear12.classList.toggle("hiden");
		ennemyplaatje.src = "img/enemys/" + ennemy[3];
		enemyIs = healthWachter;
		wachter = true;
		document.getElementById('plaatjeEnemy').innerHTML = "Enemy: " + enemyIs + "❤️";
	}
		
	if (dicesUsed == 6) 
	{
		damageEnemy = Math.floor( Math.random() * 10 ) +1;
		infoHealth -= damageEnemy;
		if (infoHealth <= 0) 
		{
			zitInKamer = 201;
			appear10.classList.toggle("hiden");
			appear11.classList.toggle("hiden");
			appear12.classList.toggle("hiden");
			infoGold = "∞";
			infoHealth = "∞";
			kamerWeergaven();
		}
		document.getElementById('yourHealth').innerHTML ="Health: <br>" + infoHealth + "❤️";
		document.getElementById('coins').innerHTML ="Gold: <br>" +	infoGold + "💰";
		diceGenarator();
		dicesUsed = 0;
	}
}

function battleDragon()
{
	if (dicesUsed == 0) 
	{
		document.getElementById('appear3').classList.toggle("hiden");
		ennemyplaatje.src = "img/enemys/" + ennemy[4];
		enemyIs = healthDragon;
		dragon = true;
		document.getElementById('plaatjeEnemy').innerHTML = "Enemy: " + enemyIs + "❤️";
	}
		
	if (dicesUsed == 6) 
	{
		damageEnemy = Math.floor( Math.random() * 14 ) +1;
		infoHealth -= damageEnemy;
		if (infoHealth <= 0) 
		{
			zitInKamer = 201;
			appear10.classList.toggle("hiden");
			appear11.classList.toggle("hiden");
			appear12.classList.toggle("hiden");
			infoGold = "∞";
			infoHealth = "∞";
			kamerWeergaven();
		}
		document.getElementById('yourHealth').innerHTML ="Health: <br>" + infoHealth + "❤️";
		document.getElementById('coins').innerHTML ="Gold: <br>" +	infoGold + "💰";
		diceGenarator();
		dicesUsed = 0;
	}
}

function battleEndboss()
{

}

function getInput(evt) 
{
    if (evt.key == "Enter")	
    {
  		let inputArray = myInput.value.split(" ");

  		if (inputArray[0] == "to") 
  		{
  			//Trondheim
  			if (indexKamer == 0) 
  			{
  				switch (inputArray[1])
  				{
  					case "Spjelkavik":
  					    richting = 2;
  						zitInKamer = 11;
  						battle();
  						break;
  					case "Angvik":
  						richting = 3;
  						zitInKamer = 12;
  						battle();
  						break;
  					case "Knarrlaget":
  						richting = 4;
  						zitInKamer = 13;
  						battle();
  						break;
  				}
  			}
  			//Spjelkavik
  			if (indexKamer == 1) 
  			{
  				switch (inputArray[1])
  				{
  					case "Trondheim":
  						richting = 1;
  						zitInKamer = 11;
  						battle();
  						break;
  					case "Angvik":
  						richting = 3;
  						zitInKamer = 14;
  						battle();
  						break;
  					case "Skarsvag":
  						richting = 6;
  						zitInKamer = 16;
  						kamerWeergaven();
  						break;
  				}
  			}
  			//Angvik
  			if (indexKamer == 2) 
  			{
  				switch (inputArray[1])
  				{
  					case "Trondheim":
  						richting = 1;
  						zitInKamer = 12;
  						battle();
  						break;
  					case "Spjelkavik":
  						richting = 2;
  						zitInKamer = 14;
  						battle();
  						break;
  					case "Knarrlaget":
  						richting = 4;
  						zitInKamer = 15;
  						kamerWeergaven();
  						break;
  					case "Rakvag":
  						richting = 5;
  						zitInKamer = 18;
  						battle();
  						break;
  					case "Skarsvag":
  						richting = 6;
  						zitInKamer = 17;
  						battle();
  						break;
  				}
  			}
  			//Knarrlaget
  			if (indexKamer == 3) 
  			{
  				switch (inputArray[1])
  				{
  					case "Trondheim":
  						richting = 1;
  						zitInKamer = 13;
  						battle();
  						break;
  					case "Angvik":
  						richting = 3;
  						zitInKamer = 15;
  						kamerWeergaven();
  						break;
  					case "Rakvag":
  						richting = 5;
  						zitInKamer = 19;
  						battle();
  						break;
  					case "Hellefjord":
  						richting = 7;
  						zitInKamer = 20;
  						kamerWeergaven();
  						break;
  				}
  			}
  			//Rakvag
  			if (indexKamer == 4) 
  			{
  				switch (inputArray[1])
  				{
  					case "Angvik":
  						richting = 3;
  						zitInKamer = 18;
  						battle();
  						break;
  					case "Knarrlaget":
  						richting = 4;
  						zitInKamer = 19;
  						battle();
  						break;
  					case "Skarsvag":
  						richting = 6;
  						zitInKamer = 26;
  						battle();
  						break;
  					case "Hellefjord":
  						richting = 7;
  						zitInKamer = 21;
  						battle();
  						break;
  					case "Hjemmeluft":
  						richting = 8;
  						zitInKamer = 23;
  						kamerWeergaven();
  						break;
  				}	
  			}
  			//Skarsvag
  			if (indexKamer == 5) 
  			{
  				switch (inputArray[1])
  				{
  					case "Spjelkavik":
  						richting = 2;
  						zitInKamer = 16;
  						kamerWeergaven();
  						break;
  					case "Angvik":
  						richting = 3;
  						zitInKamer = 17;
  						battle()();
  						break;
  					case "Rakvag":
  						richting = 5;
  						zitInKamer = 26;
  						battle();
  						break;
  					case "Hjemmeluft":
  						richting = 8;
  						zitInKamer = 24;
  						battle();
  						break;
  					case "Stjordal":
  						richting = 9;
  						zitInKamer = 22;
  						battle();
  						break;
  					case "Hitra":
  						richting = 10;
  						zitInKamer = 25;
  						battle();
  						break;
  				}
  			}
  			//Hellefjord
  			if (indexKamer == 6) 
  			{
  				switch (inputArray[1])
  				{
  					case "Knarrlaget":
  						richting = 4;
  						zitInKamer = 20;
  						kamerWeergaven();
  						break;
  					case "Rakvag":
  						richting = 5;
  						zitInKamer = 21;
  						battle();
  						break;
  				}
  			}
  			//Hjemmeluft
  			if (indexKamer == 7) 
  			{
  				switch (inputArray[1])
  				{
  					case "Rakvag":
  						richting = 5;
  						zitInKamer = 23;
  						kamerWeergaven();
  						break;
  					case "Skarsvag":
  						richting = 6;
  						zitInKamer = 24;
  						battle();
  						break;
  				}
  			}
  			//Stjordal
  			if (indexKamer == 8) 
  			{
  				switch (inputArray[1])
  				{
  					case "Skarsvag":
  						richting = 6;
  						zitInKamer = 22;
  						battle();
  						break;
  				}
  			}
  			//Hitra
  			if (indexKamer == 9) 
  			{
  				switch (inputArray[1])
  				{
  					case "Skarsvag":
  						richting = 6;
  						zitInKamer = 25;
  						battle();
  						break;
  				}
  			}
  		}
  		if (inputArray[0] == "pay") 
  		{
  			switch (zitInKamer)
  			{
  				case 13:
  					document.getElementById('appear3').classList.toggle("hiden");
  					infoGold -= 5;
  					zitInKamer = richting;
  					kamerWeergaven();
  					break;
  				case 17:
  					document.getElementById('appear3').classList.toggle("hiden");
  					infoGold -= 5;
  					zitInKamer = richting;
  					kamerWeergaven();
  					break;
  				case 25:
  					document.getElementById('appear3').classList.toggle("hiden");
  					infoGold -= 5;
  					zitInKamer = richting;
  					kamerWeergaven();
  					break;
  			}
  		}	
  		if (inputArray[0] == "pick" && inputArray[1] == "up") 
  		{
  			if(goldFound == false) 
			{	
  				infoGold += 7;
  				goldFound = true;
				zitInKamer = richting;
				kamerWeergaven();
  			}
  			else if(goldFound2 == false)
  			{
  				infoGold += 7;
  				goldFound = true;
				zitInKamer = richting;
				kamerWeergaven();
  			}
  			else if(healthFound == false) 
  			{
  				infoHealth += 3;
  				healthFound = true;
				zitInKamer = richting;
				kamerWeergaven();
  			}
  			else if(healthFound2 == false) 
  			{
  				infoHealth += 3;
  				healthFound2 = true;
				zitInKamer = richting;
				kamerWeergaven();
  			}
  			else
  			{
  				zitInKamer = richting;
		   		kamerWeergaven();
  			}
  		}
  		myInput.value = "";
  	}
}

function mogenlijkheden()
{
	if (zitInKamer == 0) 
	{
		for (let i = 0; i < richtingen[indexKamer].length; i++) 
		{
    		mogenlijkhedenJS.innerHTML += "<li>" + richtingen[indexKamer][i] + "</li>";
  		}
	}
	if (zitInKamer == 1) 
	{
		for (let i = 0; i < richtingen[indexKamer].length; i++) 
		{
    		mogenlijkhedenJS.innerHTML += "<li>" + richtingen[indexKamer][i] + "</li>";
  		}
	}
	if (zitInKamer == 2) 
	{
		for (let i = 0; i < richtingen[indexKamer].length; i++) 
		{
    		mogenlijkhedenJS.innerHTML += "<li>" + richtingen[indexKamer][i] + "</li>";
  		}
	}
	if (zitInKamer == 3) 
	{
		for (let i = 0; i < richtingen[indexKamer].length; i++) 
		{
    		mogenlijkhedenJS.innerHTML += "<li>" + richtingen[indexKamer][i] + "</li>";
  		}
	}
	if (zitInKamer == 4) 
	{
		for (let i = 0; i < richtingen[indexKamer].length; i++) 
		{
    		mogenlijkhedenJS.innerHTML += "<li>" + richtingen[indexKamer][i] + "</li>";
  		}
	}
	if (zitInKamer == 5) 
	{
		for (let i = 0; i < richtingen[indexKamer].length; i++) 
		{
    		mogenlijkhedenJS.innerHTML += "<li>" + richtingen[indexKamer][i] + "</li>";
  		}
	}
	if (zitInKamer == 6) 
	{
		for (let i = 0; i < richtingen[indexKamer].length; i++) 
		{
    		mogenlijkhedenJS.innerHTML += "<li>" + richtingen[indexKamer][i] + "</li>";
  		}
	}
	if (zitInKamer == 7) 
	{
		for (let i = 0; i < richtingen[indexKamer].length; i++) 
		{
    		mogenlijkhedenJS.innerHTML += "<li>" + richtingen[indexKamer][i] + "</li>";
  		}
	}
	if (zitInKamer == 8) 
	{
		for (let i = 0; i < richtingen[indexKamer].length; i++) 
		{
    		mogenlijkhedenJS.innerHTML += "<li>" + richtingen[indexKamer][i] + "</li>";
  		}
	}
	if (zitInKamer == 9) 
	{
		for (let i = 0; i < richtingen[indexKamer].length; i++) 
		{
    		mogenlijkhedenJS.innerHTML += "<li>" + richtingen[indexKamer][i] + "</li>";
  		}
	}
}

function attack()
{
	if (dataBroadsword == "dice1") 
	{
		console.log(diceArray[0] + " broadsword");
		diceArray[0] += 2;
		dicesUsed += 1;
		enemyIs -= diceArray[0];
		document.getElementById('plaatjeEnemy').innerHTML = "Enemy: " + enemyIs + "❤️";
		dataBroadsword = 0;
		if (wolf == true) 
		{
			if (enemyIs >=1) 
			{
				battleWolf();
			}
			if (enemyIs < 1)
			{
				infoGold += 1;
				zitInKamer = richting;
				document.getElementById('appear3').classList.toggle("hiden");
				wolf = false;
				enemyIs = 30;
				dicesUsed = 0;
				kamerWeergaven();
			}
		}
		if (viking == true) 
		{
			if (enemyIs >= 1) 
			{
				battleViking();
			}
			if (enemyIs <= 0)
			{
				infoGold += 1;
				zitInKamer = richting;
				appear12.classList.toggle("hiden");
				viking = false;
				enemyIs = 30;
				dicesUsed = 0;
				kamerWeergaven();
			}
		}
		if (ogre == true) 
		{
			if (enemyIs >= 1) 
			{
				battleOgre();
			}
			if (enemyIs < 1)
			{
				infoGold += 2;
				zitInKamer = richting;
				appear12.classList.toggle("hiden");
				ogre = false;
				enemyIs = 30;
				dicesUsed = 0;
				kamerWeergaven();
			}
		}
		if (wachter == true) 
		{
			if (enemyIs >= 1) 
			{
				battleWachter();
			}
			if (enemyIs < 1)
			{
				infoGold += 4;
				zitInKamer = richting;
				appear12.classList.toggle("hiden");
				wachter = false;
				enemyIs = 30;
				dicesUsed = 0;
				kamerWeergaven();
			}
		}
		if (dragon == true) 
		{
			if (enemyIs >= 1) 
			{
				battleDragon();
			}
			if (enemyIs < 1)
			{
				infoGold += 10;
				zitInKamer = richting;
				appear12.classList.toggle("hiden");
				dragon = false;
				enemyIs = 30;
				dicesUsed = 0;
				kamerWeergaven();
			}
		}
	}

	if (dataBroadsword == "dice2") 
	{
		console.log(diceArray[1] + " broadsword");
		diceArray[1] += 2;
		dicesUsed += 1;
		enemyIs -= diceArray[1];
		document.getElementById('plaatjeEnemy').innerHTML = "Enemy: " + enemyIs + "❤️";
		dataBroadsword = 0;
		if (wolf == true) 
		{
			if (enemyIs >=1) 
			{
				battleWolf();
			}
			if (enemyIs < 1)
			{
				infoGold += 1;
				zitInKamer = richting;
				document.getElementById('appear3').classList.toggle("hiden");
				wolf = false;
				enemyIs = 30;
				dicesUsed = 0;
				kamerWeergaven();
			}
		}
		if (viking == true) 
		{
			if (enemyIs >= 1) 
			{
				battleViking();
			}
			if (enemyIs <= 0)
			{
				infoGold += 1;
				zitInKamer = richting;
				document.getElementById('appear3').classList.toggle("hiden");
				viking = false;
				enemyIs = 30;
				dicesUsed = 0;
				kamerWeergaven();
			}
		}
		if (ogre == true) 
		{
			if (enemyIs >= 1) 
			{
				battleOgre();
			}
			if (enemyIs < 1)
			{
				infoGold += 2;
				zitInKamer = richting;
				document.getElementById('appear3').classList.toggle("hiden");
				ogre = false;
				enemyIs = 30;
				dicesUsed = 0;
				kamerWeergaven();
			}
		}
		if (wachter == true) 
		{
			if (enemyIs >= 1) 
			{
				battleWachter();
			}
			if (enemyIs < 1)
			{
				infoGold += 4;
				zitInKamer = richting;
				appear12.classList.toggle("hiden");
				wachter = false;
				enemyIs = 30;
				dicesUsed = 0;
				kamerWeergaven();
			}
		}
		if (dragon == true) 
		{
			if (enemyIs >= 1) 
			{
				battleDragon();
			}
			if (enemyIs < 1)
			{
				infoGold += 10;
				zitInKamer = richting;
				appear12.classList.toggle("hiden");
				dragon = false;
				enemyIs = 30;
				dicesUsed = 0;
				kamerWeergaven();
			}
		}
	}

	if (dataBroadsword == "dice3") 
	{
		console.log(diceArray[2] + " broadsword");
		diceArray[2] += 2;
		dicesUsed += 1;
		enemyIs -= diceArray[2];
		document.getElementById('plaatjeEnemy').innerHTML = "Enemy: " + enemyIs + "❤️";
		dataBroadsword = 0;
		if (wolf == true) 
		{
			if (enemyIs >=1) 
			{
				battleWolf();
			}
			if (enemyIs < 1)
			{
				infoGold += 1;
				zitInKamer = richting;
				document.getElementById('appear3').classList.toggle("hiden");
				wolf = false;
				enemyIs = 30;
				dicesUsed = 0;
				kamerWeergaven();
			}
		}
		if (viking == true) 
		{
			if (enemyIs >= 1) 
			{
				battleViking();
			}
			if (enemyIs <= 0)
			{
				infoGold += 1;
				zitInKamer = richting;
				document.getElementById('appear3').classList.toggle("hiden");
				viking = false;
				enemyIs = 30;
				dicesUsed = 0;
				kamerWeergaven();
			}
		}
		if (ogre == true) 
		{
			if (enemyIs >= 1) 
			{
				battleOgre();
			}
			if (enemyIs < 1)
			{
				infoGold += 2;
				zitInKamer = richting;
				document.getElementById('appear3').classList.toggle("hiden");
				ogre = false;
				enemyIs = 30;
				dicesUsed = 0;
				kamerWeergaven();
			}
		}
		if (wachter == true) 
		{
			if (enemyIs >= 1) 
			{
				battleWachter();
			}
			if (enemyIs < 1)
			{
				infoGold += 4;
				zitInKamer = richting;
				appear12.classList.toggle("hiden");
				wachter = false;
				enemyIs = 30;
				dicesUsed = 0;
				kamerWeergaven();
			}
		}
		if (dragon == true) 
		{
			if (enemyIs >= 1) 
			{
				battleDragon();
			}
			if (enemyIs < 1)
			{
				infoGold += 10;
				zitInKamer = richting;
				appear12.classList.toggle("hiden");
				dragon = false;
				enemyIs = 30;
				dicesUsed = 0;
				kamerWeergaven();
			}
		}
	}

	if (dataBroadsword == "dice4") 
	{
		console.log(diceArray[3] + " broadsword");
		diceArray[3] += 2;
		dicesUsed += 1;
		enemyIs -= diceArray[3];
		document.getElementById('plaatjeEnemy').innerHTML = "Enemy: " + enemyIs + "❤️";
		dataBroadsword = 0;
		if (wolf == true) 
		{
			if (enemyIs >=1) 
			{
				battleWolf();
			}
			if (enemyIs < 1)
			{
				infoGold += 1;
				zitInKamer = richting;
				document.getElementById('appear3').classList.toggle("hiden");
				wolf = false;
				enemyIs = 30;
				dicesUsed = 0;
				kamerWeergaven();
			}
		}
		if (viking == true) 
		{
			if (enemyIs >= 1) 
			{
				battleViking();
			}
			if (enemyIs <= 0)
			{
				infoGold += 1;
				zitInKamer = richting;
				document.getElementById('appear3').classList.toggle("hiden");
				viking = false;
				enemyIs = 30;
				dicesUsed = 0;
				kamerWeergaven();
			}
		}
		if (ogre == true) 
		{
			if (enemyIs >= 1) 
			{
				battleOgre();
			}
			if (enemyIs < 1)
			{
				infoGold += 2;
				zitInKamer = richting;
				appear12.classList.toggle("hiden");
				ogre = false;
				enemyIs = 30;
				dicesUsed = 0;
				kamerWeergaven();
			}
		}
		if (wachter == true) 
		{
			if (enemyIs >= 1) 
			{
				battleWachter();
			}
			if (enemyIs < 1)
			{
				infoGold += 4;
				zitInKamer = richting;
				appear12.classList.toggle("hiden");
				wachter = false;
				enemyIs = 30;
				dicesUsed = 0;
				kamerWeergaven();
			}
		}
		if (dragon == true) 
		{
			if (enemyIs >= 1) 
			{
				battleDragon();
			}
			if (enemyIs < 1)
			{
				infoGold += 10;
				zitInKamer = richting;
				appear12.classList.toggle("hiden");
				dragon = false;
				enemyIs = 30;
				dicesUsed = 0;
				kamerWeergaven();
			}
		}
	}

	if (dataBroadsword == "dice5") 
	{
		console.log(diceArray[4] + " broadsword");
		diceArray[4] += 2;
		dicesUsed += 1;
		enemyIs -= diceArray[4];
		document.getElementById('plaatjeEnemy').innerHTML = "Enemy: " + enemyIs + "❤️";
		dataBroadsword = 0;
		if (wolf == true) 
		{
			if (enemyIs >=1) 
			{
				battleWolf();
			}
			if (enemyIs < 1)
			{
				infoGold += 1;
				zitInKamer = richting;
				document.getElementById('appear3').classList.toggle("hiden");
				wolf = false;
				enemyIs = 30;
				dicesUsed = 0;
				kamerWeergaven();
			}
		}
		if (viking == true) 
		{
			if (enemyIs >= 1) 
			{
				battleViking();
			}
			if (enemyIs <= 0)
			{
				infoGold += 1;
				zitInKamer = richting;
				document.getElementById('appear3').classList.toggle("hiden");
				viking = false;
				enemyIs = 30;
				dicesUsed = 0;
				kamerWeergaven();
			}
		}
		if (ogre == true) 
		{
			if (enemyIs >= 1) 
			{
				battleOgre();
			}
			if (enemyIs < 1)
			{
				infoGold += 2;
				zitInKamer = richting;
				appear12.classList.toggle("hiden");
				ogre = false;
				enemyIs = 30;
				dicesUsed = 0;
				kamerWeergaven();
			}
		}
		if (wachter == true) 
		{
			if (enemyIs >= 1) 
			{
				battleWachter();
			}
			if (enemyIs < 1)
			{
				infoGold += 4;
				zitInKamer = richting;
				appear12.classList.toggle("hiden");
				wachter = false;
				enemyIs = 30;
				dicesUsed = 0;
				kamerWeergaven();
			}
		}
		if (dragon == true) 
		{
			if (enemyIs >= 1) 
			{
				battleDragon();
			}
			if (enemyIs < 1)
			{
				infoGold += 10;
				zitInKamer = richting;
				appear12.classList.toggle("hiden");
				dragon = false;
				enemyIs = 30;
				dicesUsed = 0;
				kamerWeergaven();
			}
		}
	}

	if (dataBroadsword == "dice6") 
	{
		console.log(diceArray[5] + " broadsword");
		diceArray[5] += 2;
		dicesUsed += 1;
		enemyIs -= diceArray[5];
		document.getElementById('plaatjeEnemy').innerHTML = "Enemy: " + enemyIs + "❤️";
		dataBroadsword = 0;
		if (wolf == true) 
		{
			if (enemyIs >=1) 
			{
				battleWolf();
			}
			if (enemyIs < 1)
			{
				infoGold += 1;
				zitInKamer = richting;
				document.getElementById('appear3').classList.toggle("hiden");
				wolf = false;
				enemyIs = 30;
				dicesUsed = 0;
				kamerWeergaven();
			}
		}
		if (viking == true) 
		{
			if (enemyIs >= 1) 
			{
				battleViking();
			}
			if (enemyIs <= 0)
			{
				infoGold += 1;
				zitInKamer = richting;
				document.getElementById('appear3').classList.toggle("hiden");
				viking = false;
				enemyIs = 30;
				dicesUsed = 0;
				kamerWeergaven();
			}
		}
		if (ogre == true) 
		{
			if (enemyIs >= 1) 
			{
				battleOgre();
			}
			if (enemyIs < 1)
			{
				infoGold += 2;
				zitInKamer = richting;
				document.getElementById('appear3').classList.toggle("hiden");
				ogre = false;
				enemyIs = 30;
				dicesUsed = 0;
				kamerWeergaven();
			}
		}
		if (wachter == true) 
		{
			if (enemyIs >= 1) 
			{
				battleWachter();
			}
			if (enemyIs < 1)
			{
				infoGold += 4;
				zitInKamer = richting;
				appear12.classList.toggle("hiden");
				wachter = false;
				enemyIs = 30;
				dicesUsed = 0;
				kamerWeergaven();
			}
		}
		if (dragon == true) 
		{
			if (enemyIs >= 1) 
			{
				battleDragon();
			}
			if (enemyIs < 1)
			{
				infoGold += 10;
				zitInKamer = richting;
				appear12.classList.toggle("hiden");
				dragon = false;
				enemyIs = 30;
				dicesUsed = 0;
				kamerWeergaven();
			}
		}
	}

//////////////////////////////////////////////////////////////////////////////////////////////////

	if (dataCrystal == "dice1") 
	{
		console.log(diceArray[0] + " Crystal");
		if (diceArray[0] <= 3 && infoHealth > 15) 
		{ 
			infoHealth += diceArray[0];
			dicesUsed +=1;
			document.getElementById('yourHealth').innerHTML ="Health: <br>" + infoHealth + "❤️";
		
			if (wolf == true) 
			{
				if (enemyIs >=1) 
				{
					battleWolf();
				}
				if (enemyIs < 1)
				{
					infoGold += 1;
					zitInKamer = richting;
					document.getElementById('appear3').classList.toggle("hiden");
					wolf = false;
					enemyIs = 30;
					dicesUsed = 0;
					kamerWeergaven();
				}
			}
			if (viking == true) 
			{
				if (enemyIs >= 1) 
				{
					battleViking();
				}
				if (enemyIs <= 0)
				{
					infoGold += 1;
					zitInKamer = richting;
					document.getElementById('appear3').classList.toggle("hiden");
					viking = false;
					enemyIs = 30;
					dicesUsed = 0;
					kamerWeergaven();
				}
			}
			if (ogre == true) 
			{
				if (enemyIs >= 1) 
				{
					battleOgre();
				}
				if (enemyIs < 1)
				{
					infoGold += 2;
					zitInKamer = richting;
					document.getElementById('appear3').classList.toggle("hiden");
					ogre = false;
					enemyIs = 30;
					dicesUsed = 0;
					kamerWeergaven();
				}
			}
			if (wachter == true) 
			{
				if (enemyIs >= 1) 
				{
					battleWachter();
				}
				if (enemyIs < 1)
				{
					infoGold += 4;
					zitInKamer = richting;
					appear12.classList.toggle("hiden");
					wachter = false;
					enemyIs = 30;
					dicesUsed = 0;
					kamerWeergaven();
				}
			}
			if (dragon == true) 
			{
				if (enemyIs >= 1) 
				{
					battleDragon();
				}
				if (enemyIs < 1)
				{
					infoGold += 10;
					zitInKamer = richting;
					appear12.classList.toggle("hiden");
					dragon = false;
					enemyIs = 30;
					dicesUsed = 0;
					kamerWeergaven();
				}
			}
		}	
		dataCrystal = 0;
	}

	if (dataCrystal == "dice2") 
	{
		console.log(diceArray[1] + " Crystal");
		if (diceArray[1] <= 3 && infoHealth > 15) 
		{
			infoHealth += diceArray[1];
			dicesUsed +=1;
			document.getElementById('yourHealth').innerHTML ="Health: <br>" + infoHealth + "❤️";
			if (wolf == true) 
			{
				if (enemyIs >=1) 
				{
					battleWolf();
				}
				if (enemyIs < 1)
				{
					infoGold += 1;
					zitInKamer = richting;
					document.getElementById('appear3').classList.toggle("hiden");
					wolf = false;
					enemyIs = 30;
					dicesUsed = 0;
					kamerWeergaven();
				}
			}
			if (viking == true) 
			{
				if (enemyIs >= 1) 
				{
					battleViking();
				}
				if (enemyIs <= 0)
				{
					infoGold += 1;
					zitInKamer = richting;
					document.getElementById('appear3').classList.toggle("hiden");
					viking = false;
					enemyIs = 30;
					dicesUsed = 0;
					kamerWeergaven();
				}
			}
			if (ogre == true) 
			{
				if (enemyIs >= 1) 
				{
					battleOgre();
				}
				if (enemyIs < 1)
				{
					infoGold += 2;
					zitInKamer = richting;
					document.getElementById('appear3').classList.toggle("hiden");
					ogre = false;
					enemyIs = 30;
					dicesUsed = 0;
					kamerWeergaven();
				}
			}
			if (wachter == true) 
			{
				if (enemyIs >= 1) 
				{
					battleWachter();
				}
				if (enemyIs < 1)
				{
					infoGold += 4;
					zitInKamer = richting;
					appear12.classList.toggle("hiden");
					wachter = false;
					enemyIs = 30;
					dicesUsed = 0;
					kamerWeergaven();
				}
			}
			if (dragon == true) 
			{
				if (enemyIs >= 1) 
				{
					battleDragon();
				}
				if (enemyIs < 1)
				{
					infoGold += 10;
					zitInKamer = richting;
					appear12.classList.toggle("hiden");
					dragon = false;
					enemyIs = 30;
					dicesUsed = 0;
					kamerWeergaven();
				}
			}
		}
		dataCrystal = 0;
	}

	if (dataCrystal == "dice3") 
	{
		console.log(diceArray[2] + " Crystal");
		if (diceArray[2] <= 3 && infoHealth > 15) 
		{
			infoHealth += diceArray[2];
			dicesUsed +=1;
			document.getElementById('yourHealth').innerHTML ="Health: <br>" + infoHealth + "❤️";
			if (wolf == true) 
			{
				if (enemyIs >=1) 
				{
					battleWolf();
				}
				if (enemyIs < 1)
				{
					infoGold += 1;
					zitInKamer = richting;
					document.getElementById('appear3').classList.toggle("hiden");
					wolf = false;
					enemyIs = 30;
					dicesUsed = 0;
					kamerWeergaven();
				}
			}
			if (viking == true) 
			{
				if (enemyIs >= 1) 
				{
					battleViking();
				}
				if (enemyIs <= 0)
				{
					infoGold += 1;
					zitInKamer = richting;
					document.getElementById('appear3').classList.toggle("hiden");
					viking = false;
					enemyIs = 30;
					dicesUsed = 0;
					kamerWeergaven();
				}
			}
			if (ogre == true) 
			{
				if (enemyIs >= 1) 
				{
					battleOgre();
				}
				if (enemyIs < 1)
				{
					infoGold += 2;
					zitInKamer = richting;
					document.getElementById('appear3').classList.toggle("hiden");
					ogre = false;
					enemyIs = 30;
					dicesUsed = 0;
					kamerWeergaven();
				}
			}
			if (wachter == true) 
			{
				if (enemyIs >= 1) 
				{
					battleWachter();
				}
				if (enemyIs < 1)
				{
					infoGold += 4;
					zitInKamer = richting;
					appear12.classList.toggle("hiden");
					wachter = false;
					enemyIs = 30;
					dicesUsed = 0;
					kamerWeergaven();
				}
			}
			if (dragon == true) 
			{
				if (enemyIs >= 1) 
				{
					battleDragon();
				}
				if (enemyIs < 1)
				{
					infoGold += 10;
					zitInKamer = richting;
					appear12.classList.toggle("hiden");
					dragon = false;
					enemyIs = 30;
					dicesUsed = 0;
					kamerWeergaven();
				}
			}
		}
		dataCrystal = 0;
	}

	if (dataCrystal == "dice4") 
	{
		console.log(diceArray[3] + " Crystal");
		if (diceArray[3] <= 3 && infoHealth > 15) 
		{
			infoHealth += diceArray[3];
			dicesUsed +=1;
			document.getElementById('yourHealth').innerHTML ="Health: <br>" + infoHealth + "❤️";
			if (wolf == true) 
			{
				if (enemyIs >=1) 
				{
					battleWolf();
				}
				if (enemyIs < 1)
				{
					infoGold += 1;
					zitInKamer = richting;
					document.getElementById('appear3').classList.toggle("hiden");
					wolf = false;
					enemyIs = 30;
					dicesUsed = 0;
					kamerWeergaven();
				}
			}
			if (viking == true) 
			{
				if (enemyIs >= 1) 
				{
					battleViking();
				}
				if (enemyIs <= 0)
				{
					infoGold += 1;
					zitInKamer = richting;
					document.getElementById('appear3').classList.toggle("hiden");
					viking = false;
					enemyIs = 30;
					dicesUsed = 0;
					kamerWeergaven();
				}
			}
			if (ogre == true) 
			{
				if (enemyIs >= 1) 
				{
					battleOgre();
				}
				if (enemyIs < 1)
				{
					infoGold += 2;
					zitInKamer = richting;
					document.getElementById('appear3').classList.toggle("hiden");
					ogre = false;
					enemyIs = 30;
					dicesUsed = 0;
					kamerWeergaven();
				}
			}
			if (wachter == true) 
			{
				if (enemyIs >= 1) 
				{
					battleWachter();
				}
				if (enemyIs < 1)
				{
					infoGold += 4;
					zitInKamer = richting;
					appear12.classList.toggle("hiden");
					wachter = false;
					enemyIs = 30;
					dicesUsed = 0;
					kamerWeergaven();
				}
			}
			if (dragon == true) 
			{
				if (enemyIs >= 1) 
				{
					battleDragon();
				}
				if (enemyIs < 1)
				{
					infoGold += 10;
					zitInKamer = richting;
					appear12.classList.toggle("hiden");
					dragon = false;
					enemyIs = 30;
					dicesUsed = 0;
					kamerWeergaven();
				}
			}
		}
		dataCrystal = 0;
	}

	if (dataCrystal == "dice5") 
	{
		console.log(diceArray[4] + " Crystal");
		if (diceArray[4] <= 3 && infoHealth > 15) 
		{
			infoHealth += diceArray[4];
			dicesUsed +=1;
			document.getElementById('yourHealth').innerHTML ="Health: <br>" + infoHealth + "❤️";
			if (wolf == true) 
			{
				if (enemyIs >=1) 
				{
					battleWolf();
				}
				if (enemyIs < 1)
				{
					infoGold += 1;
					zitInKamer = richting;
					document.getElementById('appear3').classList.toggle("hiden");
					wolf = false;
					enemyIs = 30;
					dicesUsed = 0;
					kamerWeergaven();
				}
			}
			if (viking == true) 
			{
				if (enemyIs >= 1) 
				{
					battleViking();
				}
				if (enemyIs <= 0)
				{
					infoGold += 1;
					zitInKamer = richting;
					document.getElementById('appear3').classList.toggle("hiden");
					viking = false;
					enemyIs = 30;
					dicesUsed = 0;
					kamerWeergaven();
				}
			}
			if (ogre == true) 
			{
				if (enemyIs >= 1) 
				{
					battleOgre();
				}
				if (enemyIs < 1)
				{
					infoGold += 2;
					zitInKamer = richting;
					document.getElementById('appear3').classList.toggle("hiden");
					ogre = false;
					enemyIs = 30;
					dicesUsed = 0;
					kamerWeergaven();
				}
			}
			if (wachter == true) 
			{
				if (enemyIs >= 1) 
				{
					battleWachter();
				}
				if (enemyIs < 1)
				{
					infoGold += 4;
					zitInKamer = richting;
					appear12.classList.toggle("hiden");
					wachter = false;
					enemyIs = 30;
					dicesUsed = 0;
					kamerWeergaven();
				}
			}
			if (dragon == true) 
			{
				if (enemyIs >= 1) 
				{
					battleDragon();
				}
				if (enemyIs < 1)
				{
					infoGold += 10;
					zitInKamer = richting;
					appear12.classList.toggle("hiden");
					dragon = false;
					enemyIs = 30;
					dicesUsed = 0;
					kamerWeergaven();
				}
			}
		}
		dataCrystal = 0;
	}

	if (dataCrystal == "dice6" && infoHealth > 15) 
	{
		console.log(diceArray[5] + " Crystal");
		if (diceArray[5] <= 3) 
		{
			infoHealth += diceArray[5];
			dicesUsed +=1;
			document.getElementById('yourHealth').innerHTML ="Health: <br>" + infoHealth + "❤️";
			if (wolf == true) 
			{
				if (enemyIs >=1) 
				{
					battleWolf();
				}
				if (enemyIs < 1)
				{
					infoGold += 1;
					zitInKamer = richting;
					document.getElementById('appear3').classList.toggle("hiden");
					wolf = false;
					enemyIs = 30;
					dicesUsed = 0;
					kamerWeergaven();
				}
			}
			if (viking == true) 
			{
				if (enemyIs >= 1) 
				{
					battleViking();
				}
				if (enemyIs <= 0)
				{
					infoGold += 1;
					zitInKamer = richting;
					document.getElementById('appear3').classList.toggle("hiden");
					viking = false;
					enemyIs = 30;
					dicesUsed = 0;
					kamerWeergaven();
				}
			}
			if (ogre == true) 
			{
				if (enemyIs >= 1) 
				{
					battleOgre();
				}
				if (enemyIs < 1)
				{
					infoGold += 2;
					zitInKamer = richting;
					document.getElementById('appear3').classList.toggle("hiden");
					ogre = false;
					enemyIs = 30;
					dicesUsed = 0;
					kamerWeergaven();
				}
			}
			if (wachter == true) 
			{
				if (enemyIs >= 1) 
				{
					battleWachter();
				}
				if (enemyIs < 1)
				{
					infoGold += 4;
					zitInKamer = richting;
					appear12.classList.toggle("hiden");
					wachter = false;
					enemyIs = 30;
					dicesUsed = 0;
					kamerWeergaven();
				}
			}
			if (dragon == true) 
			{
				if (enemyIs >= 1) 
				{
					battleDragon();
				}
				if (enemyIs < 1)
				{
					infoGold += 10;
					zitInKamer = richting;
					appear12.classList.toggle("hiden");
					dragon = false;
					enemyIs = 30;
					dicesUsed = 0;
					kamerWeergaven();
				}
			}
		}
		dataCrystal = 0;
	}

//////////////////////////////////////////////////////////////////////////////////////////////////

	if (dataFireball == "dice1") 
	{
		console.log(diceArray[0] + " Fireball");
		enemyIs -= diceArray[0];
		dicesUsed +=1;
		document.getElementById('plaatjeEnemy').innerHTML = "Enemy: " + enemyIs + "❤️";
		if (wolf == true) 
		{
			if (enemyIs >=1) 
			{
				battleWolf();
			}
			if (enemyIs < 1)
			{
				infoGold += 1;
				zitInKamer = richting;
				document.getElementById('appear3').classList.toggle("hiden");
				wolf = false;
				enemyIs = 30;
				dicesUsed = 0;
				kamerWeergaven();
			}
		}
		if (viking == true) 
		{
			if (enemyIs >= 1) 
			{
				battleViking();
			}
			if (enemyIs <= 0)
			{
				infoGold += 1;
				zitInKamer = richting;
				appear12.classList.toggle("hiden");
				viking = false;
				enemyIs = 30;
				dicesUsed = 0;
				kamerWeergaven();
			}
		}
		if (ogre == true) 
		{
			if (enemyIs >= 1) 
			{
				battleOgre();
			}
			if (enemyIs < 1)
			{
				infoGold += 2;
				zitInKamer = richting;
				appear12.classList.toggle("hiden");
				ogre = false;
				enemyIs = 30;
				dicesUsed = 0;
				kamerWeergaven();
			}
		}
		if (wachter == true) 
		{
			if (enemyIs >= 1) 
			{
				battleWachter();
			}
			if (enemyIs < 1)
			{
				infoGold += 4;
				zitInKamer = richting;
				appear12.classList.toggle("hiden");
				wachter = false;
				enemyIs = 30;
				dicesUsed = 0;
				kamerWeergaven();
			}
		}
		if (dragon == true) 
			{
				if (enemyIs >= 1) 
				{
					battleDragon();
				}
				if (enemyIs < 1)
				{
					infoGold += 10;
					zitInKamer = richting;
					appear12.classList.toggle("hiden");
					dragon = false;
					enemyIs = 30;
					dicesUsed = 0;
					kamerWeergaven();
				}
			}
		dataFireball = 0;
	}
	if (dataFireball == "dice2") 
	{
		console.log(diceArray[1] + " Fireball");
		enemyIs -= diceArray[1];
		dicesUsed +=1;
		document.getElementById('plaatjeEnemy').innerHTML = "Enemy: " + enemyIs + "❤️";
		if (wolf == true) 
		{
			if (enemyIs >=1) 
			{
				battleWolf();
			}
			if (enemyIs < 1)
			{
				infoGold += 1;
				zitInKamer = richting;
				document.getElementById('appear3').classList.toggle("hiden");
				wolf = false;
				enemyIs = 30;
				dicesUsed = 0;
				kamerWeergaven();
			}
		}
		if (viking == true) 
		{
			if (enemyIs >= 1) 
			{
				battleViking();
			}
			if (enemyIs <= 0)
			{
				infoGold += 1;
				zitInKamer = richting;
				appear12.classList.toggle("hiden");
				viking = false;
				enemyIs = 30;
				dicesUsed = 0;
				kamerWeergaven();
			}
		}
		if (ogre == true) 
		{
			if (enemyIs >= 1) 
			{
				battleOgre();
			}
			if (enemyIs < 1)
			{
				infoGold += 2;
				zitInKamer = richting;
				appear12.classList.toggle("hiden");
				ogre = false;
				enemyIs = 30;
				dicesUsed = 0;
				kamerWeergaven();
			}
		}
		if (wachter == true) 
		{
			if (enemyIs >= 1) 
			{
				battleWachter();
			}
			if (enemyIs < 1)
			{
				infoGold += 4;
				zitInKamer = richting;
				appear12.classList.toggle("hiden");
				wachter = false;
				enemyIs = 30;
				dicesUsed = 0;
				kamerWeergaven();
			}
		}
		if (dragon == true) 
			{
				if (enemyIs >= 1) 
				{
					battleDragon();
				}
				if (enemyIs < 1)
				{
					infoGold += 10;
					zitInKamer = richting;
					appear12.classList.toggle("hiden");
					dragon = false;
					enemyIs = 30;
					dicesUsed = 0;
					kamerWeergaven();
				}
			}
		dataFireball = 0;
	}
	if (dataFireball == "dice3") 
	{
		console.log(diceArray[2] + " Fireball");
		enemyIs -= diceArray[2];
		dicesUsed +=1;
		document.getElementById('plaatjeEnemy').innerHTML = "Enemy: " + enemyIs + "❤️";
		if (wolf == true) 
		{
			if (enemyIs >=1) 
			{
				battleWolf();
			}
			if (enemyIs < 1)
			{
				infoGold += 1;
				zitInKamer = richting;
				document.getElementById('appear3').classList.toggle("hiden");
				wolf = false;
				enemyIs = 30;
				dicesUsed = 0;
				kamerWeergaven();
			}
		}
		if (viking == true) 
		{
			if (enemyIs >= 1) 
			{
				battleViking();
			}
			if (enemyIs <= 0)
			{
				infoGold += 1;
				zitInKamer = richting;
				appear12.classList.toggle("hiden");
				viking = false;
				enemyIs = 30;
				dicesUsed = 0;
				kamerWeergaven();
			}
		}
		if (ogre == true) 
		{
			if (enemyIs >= 1) 
			{
				battleOgre();
			}
			if (enemyIs < 1)
			{
				infoGold += 2;
				zitInKamer = richting;
				appear12.classList.toggle("hiden");
				ogre = false;
				enemyIs = 30;
				dicesUsed = 0;
				kamerWeergaven();
			}
		}
		if (wachter == true) 
		{
			if (enemyIs >= 1) 
			{
				battleWachter();
			}
			if (enemyIs < 1)
			{
				infoGold += 4;
				zitInKamer = richting;
				appear12.classList.toggle("hiden");
				wachter = false;
				enemyIs = 30;
				dicesUsed = 0;
				kamerWeergaven();
			}
		}
		if (dragon == true) 
			{
				if (enemyIs >= 1) 
				{
					battleDragon();
				}
				if (enemyIs < 1)
				{
					infoGold += 10;
					zitInKamer = richting;
					appear12.classList.toggle("hiden");
					dragon = false;
					enemyIs = 30;
					dicesUsed = 0;
					kamerWeergaven();
				}
			}
		dataFireball = 0;
	}
	if (dataFireball == "dice4") 
	{
		console.log(diceArray[3] + " Fireball");
		enemyIs -= diceArray[3];
		dicesUsed +=1;
		document.getElementById('plaatjeEnemy').innerHTML = "Enemy: " + enemyIs + "❤️";
		if (wolf == true) 
		{
			if (enemyIs >=1) 
			{
				battleWolf();
			}
			if (enemyIs < 1)
			{
				infoGold += 1;
				zitInKamer = richting;
				document.getElementById('appear3').classList.toggle("hiden");
				wolf = false;
				enemyIs = 30;
				dicesUsed = 0;
				kamerWeergaven();
			}
		}
		if (viking == true) 
		{
			if (enemyIs >= 1) 
			{
				battleViking();
			}
			if (enemyIs <= 0)
			{
				infoGold += 1;
				zitInKamer = richting;
				appear12.classList.toggle("hiden");
				viking = false;
				enemyIs = 30;
				dicesUsed = 0;
				kamerWeergaven();
			}
		}
		if (ogre == true) 
		{
			if (enemyIs >= 1) 
			{
				battleOgre();
			}
			if (enemyIs < 1)
			{
				infoGold += 2;
				zitInKamer = richting;
				appear12.classList.toggle("hiden");
				ogre = false;
				enemyIs = 30;
				dicesUsed = 0;
				kamerWeergaven();
			}
		}
		if (wachter == true) 
		{
			if (enemyIs >= 1) 
			{
				battleWachter();
			}
			if (enemyIs < 1)
			{
				infoGold += 4;
				zitInKamer = richting;
				appear12.classList.toggle("hiden");
				wachter = false;
				enemyIs = 30;
				dicesUsed = 0;
				kamerWeergaven();
			}
		}
		if (dragon == true) 
			{
				if (enemyIs >= 1) 
				{
					battleDragon();
				}
				if (enemyIs < 1)
				{
					infoGold += 10;
					zitInKamer = richting;
					appear12.classList.toggle("hiden");
					dragon = false;
					enemyIs = 30;
					dicesUsed = 0;
					kamerWeergaven();
				}
			}
		dataFireball = 0;
	}
	if (dataFireball == "dice5") 
	{
		console.log(diceArray[4] + " Fireball");
		enemyIs -= diceArray[4];
		dicesUsed +=1;
		document.getElementById('plaatjeEnemy').innerHTML = "Enemy: " + enemyIs + "❤️";
		if (wolf == true) 
		{
			if (enemyIs >=1) 
			{
				battleWolf();
			}
			if (enemyIs < 1)
			{
				infoGold += 1;
				zitInKamer = richting;
				document.getElementById('appear3').classList.toggle("hiden");
				wolf = false;
				enemyIs = 30;
				dicesUsed = 0;
				kamerWeergaven();
			}
		}
		if (viking == true) 
		{
			if (enemyIs >= 1) 
			{
				battleViking();
			}
			if (enemyIs <= 0)
			{
				infoGold += 1;
				zitInKamer = richting;
				appear12.classList.toggle("hiden");
				viking = false;
				enemyIs = 30;
				dicesUsed = 0;
				kamerWeergaven();
			}
		}
		if (ogre == true) 
		{
			if (enemyIs >= 1) 
			{
				battleOgre();
			}
			if (enemyIs < 1)
			{
				infoGold += 2;
				zitInKamer = richting;
				appear12.classList.toggle("hiden");
				ogre = false;
				enemyIs = 30;
				dicesUsed = 0;
				kamerWeergaven();
			}
		}
		if (wachter == true) 
		{
			if (enemyIs >= 1) 
			{
				battleWachter();
			}
			if (enemyIs < 1)
			{
				infoGold += 4;
				zitInKamer = richting;
				appear12.classList.toggle("hiden");
				wachter = false;
				enemyIs = 30;
				dicesUsed = 0;
				kamerWeergaven();
			}
		}
		if (dragon == true) 
			{
				if (enemyIs >= 1) 
				{
					battleDragon();
				}
				if (enemyIs < 1)
				{
					infoGold += 10;
					zitInKamer = richting;
					appear12.classList.toggle("hiden");
					dragon = false;
					enemyIs = 30;
					dicesUsed = 0;
					kamerWeergaven();
				}
			}
		dataFireball = 0;
	}
	if (dataFireball == "dice6") 
	{
		console.log(diceArray[5] + " Fireball");
		enemyIs -= diceArray[5];
		dicesUsed +=1;
		document.getElementById('plaatjeEnemy').innerHTML = "Enemy: " + enemyIs + "❤️";
		if (wolf == true) 
		{
			if (enemyIs >=1) 
			{
				battleWolf();
			}
			if (enemyIs < 1)
			{
				infoGold += 1;
				zitInKamer = richting;
				document.getElementById('appear3').classList.toggle("hiden");
				wolf = false;
				enemyIs = 30;
				dicesUsed = 0;
				kamerWeergaven();
			}
		}
		if (viking == true) 
		{
			if (enemyIs >= 1) 
			{
				battleViking();
			}
			if (enemyIs <= 0)
			{
				infoGold += 1;
				zitInKamer = richting;
				appear12.classList.toggle("hiden");
				viking = false;
				enemyIs = 30;
				dicesUsed = 0;
				kamerWeergaven();
			}
		}
		if (ogre == true) 
		{
			if (enemyIs >= 1) 
			{
				battleOgre();
			}
			if (enemyIs < 1)
			{
				infoGold += 2;
				zitInKamer = richting;
				appear12.classList.toggle("hiden");
				ogre = false;
				enemyIs = 30;
				dicesUsed = 0;
				kamerWeergaven();
			}
		}
		if (wachter == true) 
		{
			if (enemyIs >= 1) 
			{
				battleWachter();
			}
			if (enemyIs < 1)
			{
				infoGold += 4;
				zitInKamer = richting;
				appear12.classList.toggle("hiden");
				wachter = false;
				enemyIs = 30;
				dicesUsed = 0;
				kamerWeergaven();
			}
		}
		if (dragon == true) 
			{
				if (enemyIs >= 1) 
				{
					battleDragon();
				}
				if (enemyIs < 1)
				{
					infoGold += 10;
					zitInKamer = richting;
					appear12.classList.toggle("hiden");
					dragon = false;
					enemyIs = 30;
					dicesUsed = 0;
					kamerWeergaven();
				}
			}
		dataFireball = 0;
	}

//////////////////////////////////////////////////////////////////////////////////////////////////

	if (dataBoop == "dice1") 
	{
		console.log(diceArray[0] + " Boop");
		enemyIs -= 4;
		dicesUsed +=1;
		document.getElementById('plaatjeEnemy').innerHTML = "Enemy: " + enemyIs + "❤️";
		if (wolf == true) 
		{
			if (enemyIs >=1) 
			{
				battleWolf();
			}
			if (enemyIs < 1)
			{
				infoGold += 1;
				zitInKamer = richting;
				document.getElementById('appear3').classList.toggle("hiden");
				wolf = false;
				enemyIs = 30;
				dicesUsed = 0;
				kamerWeergaven();
			}
		}
		if (viking == true) 
		{
			if (enemyIs >= 1) 
			{
				battleViking();
			}
			if (enemyIs <= 0)
			{
				infoGold += 1;
				zitInKamer = richting;
				appear12.classList.toggle("hiden");
				viking = false;
				enemyIs = 30;
				dicesUsed = 0;
				kamerWeergaven();
			}
		}
		if (ogre == true) 
		{
			if (enemyIs >= 1) 
			{
				battleOgre();
			}
			if (enemyIs < 1)
			{
				infoGold += 2;
				zitInKamer = richting;
				appear12.classList.toggle("hiden");
				ogre = false;
				enemyIs = 30;
				dicesUsed = 0;
				kamerWeergaven();
			}
		}
		if (wachter == true) 
		{
			if (enemyIs >= 1) 
			{
				battleWachter();
			}
			if (enemyIs < 1)
			{
				infoGold += 4;
				zitInKamer = richting;
				appear12.classList.toggle("hiden");
				wachter = false;
				enemyIs = 30;
				dicesUsed = 0;
				kamerWeergaven();
			}
		}
		if (dragon == true) 
		{
			if (enemyIs >= 1) 
			{
				battleDragon();
			}
			if (enemyIs < 1)
			{
				infoGold += 10;
				zitInKamer = richting;
				appear12.classList.toggle("hiden");
				dragon = false;
				enemyIs = 30;
				dicesUsed = 0;
				kamerWeergaven();
			}
		}
		dataBoop = 0;
	}
	if (dataBoop == "dice2") 
	{
		console.log(diceArray[1] + " Boop");
		enemyIs -= 4;
		dicesUsed +=1;
		document.getElementById('plaatjeEnemy').innerHTML = "Enemy: " + enemyIs + "❤️";
		if (wolf == true) 
		{
			if (enemyIs >=1) 
			{
				battleWolf();
			}
			if (enemyIs < 1)
			{
				infoGold += 1;
				zitInKamer = richting;
				document.getElementById('appear3').classList.toggle("hiden");
				wolf = false;
				enemyIs = 30;
				dicesUsed = 0;
				kamerWeergaven();
			}
		}
		if (viking == true) 
		{
			if (enemyIs >= 1) 
			{
				battleViking();
			}
			if (enemyIs <= 0)
			{
				infoGold += 1;
				zitInKamer = richting;
				appear12.classList.toggle("hiden");
				viking = false;
				enemyIs = 30;
				dicesUsed = 0;
				kamerWeergaven();
			}
		}
		if (ogre == true) 
		{
			if (enemyIs >= 1) 
			{
				battleOgre();
			}
			if (enemyIs < 1)
			{
				infoGold += 2;
				zitInKamer = richting;
				appear12.classList.toggle("hiden");
				ogre = false;
				enemyIs = 30;
				dicesUsed = 0;
				kamerWeergaven();
			}
		}
		if (wachter == true) 
		{
			if (enemyIs >= 1) 
			{
				battleWachter();
			}
			if (enemyIs < 1)
			{
				infoGold += 4;
				zitInKamer = richting;
				appear12.classList.toggle("hiden");
				wachter = false;
				enemyIs = 30;
				dicesUsed = 0;
				kamerWeergaven();
			}
		}
		if (dragon == true) 
		{
			if (enemyIs >= 1) 
			{
				battleDragon();
			}
			if (enemyIs < 1)
			{
				infoGold += 10;
				zitInKamer = richting;
				appear12.classList.toggle("hiden");
				dragon = false;
				enemyIs = 30;
				dicesUsed = 0;
				kamerWeergaven();
			}
		}
		dataBoop = 0;
	}
	if (dataBoop == "dice3") 
	{
		console.log(diceArray[2] + " Boop");
		enemyIs -= 4;
		dicesUsed +=1;
		document.getElementById('plaatjeEnemy').innerHTML = "Enemy: " + enemyIs + "❤️";
		if (wolf == true) 
		{
			if (enemyIs >=1) 
			{
				battleWolf();
			}
			if (enemyIs < 1)
			{
				infoGold += 1;
				zitInKamer = richting;
				document.getElementById('appear3').classList.toggle("hiden");
				wolf = false;
				enemyIs = 30;
				dicesUsed = 0;
				kamerWeergaven();
			}
		}
		if (viking == true) 
		{
			if (enemyIs >= 1) 
			{
				battleViking();
			}
			if (enemyIs <= 0)
			{
				infoGold += 1;
				zitInKamer = richting;
				appear12.classList.toggle("hiden");
				viking = false;
				enemyIs = 30;
				dicesUsed = 0;
				kamerWeergaven();
			}
		}
		if (ogre == true) 
		{
			if (enemyIs >= 1) 
			{
				battleOgre();
			}
			if (enemyIs < 1)
			{
				infoGold += 2;
				zitInKamer = richting;
				appear12.classList.toggle("hiden");
				ogre = false;
				enemyIs = 30;
				dicesUsed = 0;
				kamerWeergaven();
			}
		}
		if (wachter == true) 
		{
			if (enemyIs >= 1) 
			{
				battleWachter();
			}
			if (enemyIs < 1)
			{
				infoGold += 4;
				zitInKamer = richting;
				appear12.classList.toggle("hiden");
				wachter = false;
				enemyIs = 30;
				dicesUsed = 0;
				kamerWeergaven();
			}
		}
		if (dragon == true) 
		{
			if (enemyIs >= 1) 
			{
				battleDragon();
			}
			if (enemyIs < 1)
			{
				infoGold += 10;
				zitInKamer = richting;
				appear12.classList.toggle("hiden");
				dragon = false;
				enemyIs = 30;
				dicesUsed = 0;
				kamerWeergaven();
			}
		}
		dataBoop = 0;
	}
	if (dataBoop == "dice4") 
	{
		console.log(diceArray[3] + " Boop");
		enemyIs -= 4;
		dicesUsed +=1;
		document.getElementById('plaatjeEnemy').innerHTML = "Enemy: " + enemyIs + "❤️";
		if (wolf == true) 
		{
			if (enemyIs >=1) 
			{
				battleWolf();
			}
			if (enemyIs < 1)
			{
				infoGold += 1;
				zitInKamer = richting;
				document.getElementById('appear3').classList.toggle("hiden");
				wolf = false;
				enemyIs = 30;
				dicesUsed = 0;
				kamerWeergaven();
			}
		}
		if (viking == true) 
		{
			if (enemyIs >= 1) 
			{
				battleViking();
			}
			if (enemyIs <= 0)
			{
				infoGold += 1;
				zitInKamer = richting;
				appear12.classList.toggle("hiden");
				viking = false;
				enemyIs = 30;
				dicesUsed = 0;
				kamerWeergaven();
			}
		}
		if (ogre == true) 
		{
			if (enemyIs >= 1) 
			{
				battleOgre();
			}
			if (enemyIs < 1)
			{
				infoGold += 2;
				zitInKamer = richting;
				appear12.classList.toggle("hiden");
				ogre = false;
				enemyIs = 30;
				dicesUsed = 0;
				kamerWeergaven();
			}
		}
		if (wachter == true) 
		{
			if (enemyIs >= 1) 
			{
				battleWachter();
			}
			if (enemyIs < 1)
			{
				infoGold += 4;
				zitInKamer = richting;
				appear12.classList.toggle("hiden");
				wachter = false;
				enemyIs = 30;
				dicesUsed = 0;
				kamerWeergaven();
			}
		}
		if (dragon == true) 
		{
			if (enemyIs >= 1) 
			{
				battleDragon();
			}
			if (enemyIs < 1)
			{
				infoGold += 10;
				zitInKamer = richting;
				appear12.classList.toggle("hiden");
				dragon = false;
				enemyIs = 30;
				dicesUsed = 0;
				kamerWeergaven();
			}
		}
		dataBoop = 0;
	}
	if (dataBoop == "dice5") 
	{
		console.log(diceArray[4] + " Boop");
		enemyIs -= 4;
		dicesUsed +=1;
		document.getElementById('plaatjeEnemy').innerHTML = "Enemy: " + enemyIs + "❤️";
		if (wolf == true) 
		{
			if (enemyIs >=1) 
			{
				battleWolf();
			}
			if (enemyIs < 1)
			{
				infoGold += 1;
				zitInKamer = richting;
				document.getElementById('appear3').classList.toggle("hiden");
				wolf = false;
				enemyIs = 30;
				dicesUsed = 0;
				kamerWeergaven();
			}
		}
		if (viking == true) 
		{
			if (enemyIs >= 1) 
			{
				battleViking();
			}
			if (enemyIs <= 0)
			{
				infoGold += 1;
				zitInKamer = richting;
				appear12.classList.toggle("hiden");
				viking = false;
				enemyIs = 30;
				dicesUsed = 0;
				kamerWeergaven();
			}
		}
		if (ogre == true) 
		{
			if (enemyIs >= 1) 
			{
				battleOgre();
			}
			if (enemyIs < 1)
			{
				infoGold += 2;
				zitInKamer = richting;
				appear12.classList.toggle("hiden");
				ogre = false;
				enemyIs = 30;
				dicesUsed = 0;
				kamerWeergaven();
			}
		}
		if (wachter == true) 
		{
			if (enemyIs >= 1) 
			{
				battleWachter();
			}
			if (enemyIs < 1)
			{
				infoGold += 4;
				zitInKamer = richting;
				appear12.classList.toggle("hiden");
				wachter = false;
				enemyIs = 30;
				dicesUsed = 0;
				kamerWeergaven();
			}
		}
		if (dragon == true) 
		{
			if (enemyIs >= 1) 
			{
				battleDragon();
			}
			if (enemyIs < 1)
			{
				infoGold += 10;
				zitInKamer = richting;
				appear12.classList.toggle("hiden");
				dragon = false;
				enemyIs = 30;
				dicesUsed = 0;
				kamerWeergaven();
			}
		}
		dataBoop = 0;
	}
	if (dataBoop == "dice6") 
	{
		console.log(diceArray[5] + " Boop");
		enemyIs -= 4;
		dicesUsed +=1;
		document.getElementById('plaatjeEnemy').innerHTML = "Enemy: " + enemyIs + "❤️";
		if (wolf == true) 
		{
			if (enemyIs >=1) 
			{
				battleWolf();
			}
			if (enemyIs < 1)
			{
				infoGold += 1;
				zitInKamer = richting;
				document.getElementById('appear3').classList.toggle("hiden");
				wolf = false;
				enemyIs = 30;
				dicesUsed = 0;
				kamerWeergaven();
			}
		}
		if (viking == true) 
		{
			if (enemyIs >= 1) 
			{
				battleViking();
			}
			if (enemyIs <= 0)
			{
				infoGold += 1;
				zitInKamer = richting;
				appear12.classList.toggle("hiden");
				viking = false;
				enemyIs = 30;
				dicesUsed = 0;
				kamerWeergaven();
			}
		}
		if (ogre == true) 
		{
			if (enemyIs >= 1) 
			{
				battleOgre();
			}
			if (enemyIs < 1)
			{
				infoGold += 2;
				zitInKamer = richting;
				appear12.classList.toggle("hiden");
				ogre = false;
				enemyIs = 30;
				dicesUsed = 0;
				kamerWeergaven();
			}
		}
		if (wachter == true) 
		{
			if (enemyIs >= 1) 
			{
				battleWachter();
			}
			if (enemyIs < 1)
			{
				infoGold += 4;
				zitInKamer = richting;
				appear12.classList.toggle("hiden");
				wachter = false;
				enemyIs = 30;
				dicesUsed = 0;
				kamerWeergaven();
			}
		}
		if (dragon == true) 
		{
			if (enemyIs >= 1) 
			{
				battleDragon();
			}
			if (enemyIs < 1)
			{
				infoGold += 10;
				zitInKamer = richting;
				appear12.classList.toggle("hiden");
				dragon = false;
				enemyIs = 30;
				dicesUsed = 0;
				kamerWeergaven();
			}
		}
		dataBoop = 0;
	}
}