export default class ColumnWinInspector {
	constructor(column) {
		this.column = column;
	}

	inspect() {
		let playerNumber = 0;
		for (let i = 0; i < 3; i++) {
			if (this.column[i] === 1 || this.column[i] === 2) {
				if (
					this.column[i] === this.column[i + 1] &&
					this.column[i] === this.column[i + 2] &&
					this.column[i] === this.column[i + 3]
				) {
					playerNumber = this.column[i];
				}
			}
		}
		return playerNumber;
	}
}
