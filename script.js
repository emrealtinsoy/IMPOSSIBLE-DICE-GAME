const dice = document.getElementById('dice-btn');
var clicks = 0;
function diceGame(){
var a = Math.random();

	if(a < 0.990){
		var randomDice = Math.floor((Math.random() * 6) + 1);
		var diceLocation = "img/" + "Dice-" + randomDice + ".png";
		var img1 = document.querySelectorAll("img")[0];
		img1.setAttribute("src", diceLocation);
	
		var randomDice2 = Math.floor((Math.random() * (5-randomDice)) + 1) + randomDice;
		var diceLocation2 = "img/" + "Dice-" + randomDice2 + ".png";
		var img2 = document.querySelectorAll("img")[1];
		img2.setAttribute("src", diceLocation2);
	}	
	else{
		var randomDice = Math.floor((Math.random() * 5) + 1) + 1;
		var diceLocation = "img/" + "Dice-" + randomDice + ".png";
		var img1 = document.querySelectorAll("img")[0];
		img1.setAttribute("src", diceLocation);
		
		var randomDice2 = 1;
		var diceLocation2 = "img/" + "Dice-" + randomDice2 + ".png";
		var img2 = document.querySelectorAll("img")[1];
		img2.setAttribute("src", diceLocation2);
	}
	if(randomDice > randomDice2){
		document.querySelector("h1").innerHTML = "YOU WIN !";
		document.getElementById('dice-btn').style.pointerEvents = 'none';
		clicks += 1;
		document.getElementById("clicks").innerHTML = clicks;
	}
	else if(randomDice < randomDice2){
		document.querySelector("h1").innerHTML = "COMPUTER WIN";
		clicks += 1;
		document.getElementById("clicks").innerHTML = clicks;
	}
	else if(randomDice = randomDice2){
		document.querySelector("h1").innerHTML = "DRAW !";
		clicks += 1;
		document.getElementById("clicks").innerHTML = clicks;
	}
dice.innerHTML = "PLAY AGAIN"
}