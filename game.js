import Column from "./column.js";
import ColumnWinInspector from "./column-win-inspector.js";
import RowWinInspector from "./row-win-inspector.js";
import DiagonalWinInspector from "./diagnoal-win-inspector.js";

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
		// debugger;
		if (this.winnerNumber === 1) {
			return `${this.playerOneName} wins!`;
		}

		if (this.winnerNumber === 2) {
			return `${this.playerTwoName} wins!`;
		}

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
		this.checkForColumnWin();
		this.checkForRowWin();
		this.checkForDiagonalWin();
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

	checkForColumnWin() {
		if (this.winnerNumber === 0) {
			this.columns.every((el) => {
				let winner = new ColumnWinInspector(el.rows);
				let winnerNum = winner.inspect();
				if (winnerNum === 1 || winnerNum === 2) {
					this.winnerNumber = winnerNum;
					return false;
				}
				return true;
			});
		}
	}

	checkForRowWin() {
		if (this.winnerNumber === 0) {
			let columnsOne = this.columns.slice(0, 4);
			let columnsTwo = this.columns.slice(1, 5);
			let columnsThree = this.columns.slice(2, 6);
			let columnsFour = this.columns.slice(3, 7);

			let colsArray = [columnsOne, columnsTwo, columnsThree, columnsFour];

			colsArray.every((el) => {
				let winner = new RowWinInspector(el);
				let winnerNumber = winner.inspect();

				if (winnerNumber === 1 || winnerNumber === 2) {
					this.winnerNumber = winnerNumber;
					return false;
				}
				return true;
			});
		}
	}

	checkForDiagonalWin() {
		if (this.winnerNumber === 0) {
			let columnsOne = this.columns.slice(0, 4);
			let columnsTwo = this.columns.slice(1, 5);
			let columnsThree = this.columns.slice(2, 6);
			let columnsFour = this.columns.slice(3, 7);

			let colsArray = [columnsOne, columnsTwo, columnsThree, columnsFour];

			colsArray.every((el) => {
				let winner = new DiagonalWinInspector(el);
				let winnerNumber = winner.inspect();

				if (winnerNumber === 1 || winnerNumber === 2) {
					this.winnerNumber = winnerNumber;
					return false;
				}
				return true;
			});
		}
	}

	getTokenAt(rowIndex, columnIndex) {
		return this.columns[columnIndex].getTokenAt(rowIndex);
	}

	isColumnFull(columnIndex) {
		if (this.winnerNumber === 1 || this.winnerNumber === 2) {
			return true;
		}

		return this.columns[columnIndex].isFull();
	}
}
