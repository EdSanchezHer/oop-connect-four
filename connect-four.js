import { Game } from "./games.js";

let game = undefined;

window.addEventListener("DOMContentLoaded", () => {
	let playerOneInput = document.getElementById("player-1-name");
	let playerTwoInput = document.getElementById("player-2-name");
	let newGameButton = document.getElementById("new-game");

	playerOneInput.addEventListener("keyup", newGameStatus);
	playerTwoInput.addEventListener("keyup", newGameStatus);

	function newGameStatus() {
		let playerOneValue = document.getElementById("player-1-name").value;
		let playerTwoValue = document.getElementById("player-2-name").value;
		if (!playerOneValue && !playerTwoValue) {
			newGameButton.disabled = false;
		} else {
			newGameButton.disabled = true;
		}
	}
});
