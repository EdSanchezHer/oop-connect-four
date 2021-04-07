import { Game } from "./game.js";

let game = undefined;

function updateUI() {
	let boardHolder = document.getElementById("board-holder");
	let gameName = document.getElementById("game-name");
	if (game === undefined) {
		boardHolder.setAttribute("class", "is-invisible");
	} else {
		boardHolder.classList.remove("is-invisible");
		gameName.innerHTML = game.getName();
	}
}

window.addEventListener("DOMContentLoaded", () => {
	let playerOneInput = document.getElementById("player-1-name");
	let playerTwoInput = document.getElementById("player-2-name");
	let newGameButton = document.getElementById("new-game");

	playerOneInput.addEventListener("keyup", newGameStatus);
	playerTwoInput.addEventListener("keyup", newGameStatus);
	newGameButton.addEventListener("click", () => {
		let playerOneValue = document.getElementById("player-1-name").value;
		let playerTwoValue = document.getElementById("player-2-name").value;
		game = new Game(playerOneValue, playerTwoValue);
		document.getElementById("player-1-name").value = "";
		document.getElementById("player-2-name").value = "";
		newGameStatus();
		updateUI();
	});

	function newGameStatus() {
		let playerOneValue = document.getElementById("player-1-name").value;
		let playerTwoValue = document.getElementById("player-2-name").value;
		if (playerOneValue && playerTwoValue) {
			newGameButton.disabled = false;
		} else {
			newGameButton.disabled = true;
		}
	}
});
