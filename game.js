import Column from "./column";

export class Game {
	constructor(playerOneName, playerTwoName) {
		this.playerOneName = playerOneName;
		this.playerTwoName = playerTwoName;
        this.currentPlayer = 1;
        this.columns = [new Column(), new Column(), new Column(), new Column(), new Column(), new Column(), new Column()];
	}

	getName() {
		return `${this.playerOneName} vs. ${this.playerTwoName}`;
	}

    playInColumn(columnIndex) {
        this.columns[columnIndex].add(this.currentPlayer);

        if(this.currentPlayer === 1) {
            this.currentPlayer = 2;
        } else {
            this.currentPlayer = 1;
        }
    }

    getTokenAt(rowIndex, columnIndex) {
        return columns[columnIndex].getTokenAt[rowIndex];
    }
}
