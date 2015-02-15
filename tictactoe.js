
var isX = true;

var tiles = document.getElementsByClassName("container");


for(var i = 0; i < tiles.length; i++)
{
	tiles[i].onclick = function(event)
	{
		if(isX && event.currentTarget.innerHTML != "X" && event.currentTarget.innerHTML != "O")
		{
			event.currentTarget.innerHTML="X";
			isX = false;
		}
		else if(event.currentTarget.innerHTML != "X" && event.currentTarget.innerHTML != "O") 
		{
			event.currentTarget.innerHTML="O";
			isX = true;
		}
		checkWinner();
	};
}

function checkWinner()
{
	var oneOne = document.getElementById('oneOne').innerHTML;
	var oneTwo = document.getElementById('oneTwo').innerHTML;
	var oneThree = document.getElementById('oneThree').innerHTML;
	var twoOne = document.getElementById('twoOne').innerHTML;
	var twoTwo = document.getElementById('twoTwo').innerHTML;
	var twoThree = document.getElementById('twoThree').innerHTML;
	var threeOne = document.getElementById('threeOne').innerHTML;
	var threeTwo = document.getElementById('threeTwo').innerHTML;
	var threeThree = document.getElementById('threeThree').innerHTML;
	
	//Top row all one letter
	//Middle row all one letter
	//bottom row all one letter
	//diagonal(both of them)
	
	if(oneOne == oneTwo && oneOne == oneThree && oneOne !="?")
	{
		alert(oneOne + " WINS THE GAME ");
		clearGame();
		
	}
	else if(twoOne == twoTwo && twoOne == twoThree && twoOne !="?")
	{
		alert(twoOne + " WINS THE GAME ");
		clearGame();
	}
	else if(threeOne == threeTwo && threeOne == threeThree  && threeOne !="?")
	{
		alert(threeOne + " WINS THE GAME ");
		clearGame();
	}
	else if(oneOne == twoOne && oneOne == threeOne  && oneOne !="?")
	{
		alert(oneOne + " WINS THE GAME ");
		clearGame();
	}
	else if(oneTwo == twoTwo && oneTwo == threeTwo  && oneTwo !="?")
	{
		alert(oneTwo + " WINS THE GAME ");
		clearGame();
	}
	else if(oneThree == twoThree && oneThree == threeThree && oneThree !="?")
	{
		alert(oneThree + " WINS THE GAME ");
		clearGame();
	}
	else if(oneOne == twoTwo && oneOne == threeThree && oneOne !="?")
	{
		alert(oneOne + " WINS THE GAME ");
		clearGame();
	}
	else if(oneThree == twoTwo && oneThree == threeOne && oneThree !="?")
	{
		alert(oneThree + " WINS THE GAME ");
		clearGame();
	}
	else if(oneOne != "?" && oneTwo != "?" && oneThree != "?" && twoOne != "?" && twoTwo != "?" && twoThree != "?" && threeOne != "?" && threeTwo != "?" && threeThree != "?")
	{
		alert("Really? A Draw?");
		clearGame();
	}
}
function clearGame()
{
	var tiles = document.getElementsByClassName("container");
	
	for (var i=0; i<tiles.length; i++)
	{
		tiles[i].innerHTML = "?";
	}
	
	
}