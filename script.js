const dice = document.getElementById('dice-btn');

function diceGame() {

	var randomDice = Math.floor((Math.random() * 6) + 1);
	var diceLocation = "img/" + "Dice-" + randomDice + ".png";
	var img1 = document.querySelectorAll("img")[0];
	img1.setAttribute("src", diceLocation);
	
	var randomDice2 = randomDice + Math.floor((Math.random() * (6-randomDice)));
	var diceLocation2 = "img/" + "Dice-" + randomDice2 + ".png";
	var img2 = document.querySelectorAll("img")[1];
	img2.setAttribute("src", diceLocation2);

	if (randomDice > randomDice2) {
		document.querySelector("h1").innerHTML = "YOU WIN !";
	}
	else if (randomDice < randomDice2) {
		document.querySelector("h1").innerHTML = "COMPUTER WIN";
	}
	else if (randomDice = randomDice2) {
		document.querySelector("h1").innerHTML = "DRAW !";
	}

	dice.innerHTML = "PLAY AGAIN"
}
