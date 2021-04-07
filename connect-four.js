import { Game } from "./game.js";

let game = undefined;

function updateUI() {
	let boardHolder = document.getElementById("board-holder");
	let gameName = document.getElementById("game-name");
	let clickTargets = document.getElementById("click-targets");

    for(let rowIndex = 0; rowIndex <=5; rowIndex++) {

        for(let columnIndex = 0; columnIndex <=6; columnIndex++) {
            let currentSquare = document.getElementById(`square-${rowIndex}-${columnIndex}`);
            let player = game.getTokenAt(rowIndex, columnIndex);
            currentSquare.innerHTML = "";
            if(player === 1) {
                let squareColor = document.createElement("div");
                squareColor.classList("token", "black");
            } else if (player === 2) {
                let squareColor = document.createElement("div");
                squareColor.classList("token", "red");
            }

        }
    }

	if (game === undefined) {
		boardHolder.setAttribute("class", "is-invisible");
	} else {
		boardHolder.classList.remove("is-invisible");
		gameName.innerHTML = game.getName();
		if (game.currentPlayer === 2) {
			clickTargets.classList.add("red");
			clickTargets.classList.remove("black");
		} else {
			clickTargets.classList.add("black");
			clickTargets.classList.remove("red");
		}
	}
}

window.addEventListener("DOMContentLoaded", () => {
	let playerOneInput = document.getElementById("player-1-name");
	let playerTwoInput = document.getElementById("player-2-name");
	let newGameButton = document.getElementById("new-game");
	let clickTargets = document.getElementById("click-targets");

	playerOneInput.addEventListener("keyup", newGameStatus);
	playerTwoInput.addEventListener("keyup", newGameStatus);
	newGameButton.addEventListener("click", updateBoard);
	clickTargets.addEventListener("click", (event) => {
        let columnNumber;
        let columnID = event.target.id;
        if(columnID.startsWith("column-")) {
            columnNumber = Number(columnID.split("-")[1]);
        }
        game.playInColumn(columnNumber);
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

	function updateBoard() {
		let playerOneValue = document.getElementById("player-1-name").value;
		let playerTwoValue = document.getElementById("player-2-name").value;
		game = new Game(playerOneValue, playerTwoValue);
		document.getElementById("player-1-name").value = "";
		document.getElementById("player-2-name").value = "";
		newGameStatus();
		updateUI();
	}
});
