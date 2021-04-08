import Column from "./column.js";

export default class Game {
	constructor(playerOneName, playerTwoName) {
		this.playerOneName = playerOneName;
		this.playerTwoName = playerTwoName;
		this.currentPlayer = 1;
		this.winnerNumber = 0;
		this.columns = [
			new Column(),
			new Column(),
			new Column(),
			new Column(),
			new Column(),
			new Column(),
			new Column(),
		];
	}

	getName() {
		if (this.winnerNumber === 3) {
			return `${this.playerOneName} ties with ${this.playerTwoName}`;
		}
		return `${this.playerOneName} vs. ${this.playerTwoName}`;
	}

	playInColumn(columnIndex) {
		this.columns[columnIndex].add(this.currentPlayer);

		if (this.currentPlayer === 1) {
			this.currentPlayer = 2;
		} else {
			this.currentPlayer = 1;
		}
		this.checkForTie();
	}

	checkForTie() {
		let allFull = true;
		for (let index = 0; index <= 6; index++) {
			if (!this.isColumnFull(index)) {
				allFull = false;
			}
		}
		if (allFull) {
			this.winnerNumber = 3;
		}
	}

	getTokenAt(rowIndex, columnIndex) {
		return this.columns[columnIndex].getTokenAt(rowIndex);
	}

	isColumnFull(columnIndex) {
		return this.columns[columnIndex].isFull();
	}
}
