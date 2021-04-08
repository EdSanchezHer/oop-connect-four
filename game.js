import Column from "./column.js";
import ColumnWinInspector from "./column-win-inspector.js";

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
        if(this.winnerNumber !== 0) {
            this.columns.every((el) => {
                let winner = new ColumnWinInspector(el);
                if(winner === 1 || winner === 2) {
                    this.winnerNumber = winner;
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
        if(this.winnerNumber === 1 || this.winnerNumber === 2) {
            return true;
        }

        return this.columns[columnIndex].isFull();
	}


}
