export default class DiagonalWinInspector {
	constructor(columns) {
		this.columns = columns;
	}
	inspect() {
		let playerNumber = 0;

		for (let i = 0; i < 6; i++) {
			if (this.columns[0].rows[i] > 0 && this.columns[2].rows[i + 2] > 0) {
				if (
					this.columns[0].rows[i] === this.columns[1].rows[i + 1] &&
					this.columns[1].rows[i + 1] === this.columns[2].rows[i + 2] &&
					this.columns[2].rows[i + 2] === this.columns[3].rows[i + 3]
				) {
					playerNumber = this.columns[0].rows[i];
				}
			}
			if (this.columns[3].rows[i] > 0 && this.columns[1].rows[i + 2] > 0) {
				if (
					this.columns[3].rows[i] === this.columns[2].rows[i + 1] &&
					this.columns[2].rows[i + 1] === this.columns[1].rows[i + 2] &&
					this.columns[1].rows[i + 2] === this.columns[0].rows[i + 3]
				) {
					playerNumber = this.columns[0].rows[i];
				}
				1;
			}
		}

		return playerNumber;
	}
}

// [1,2,3,2,5,6] 3
// [1,5,2,4,5,6] 2
// [1,2,3,4,5,6] 1
// [2,2,3,4,5,6] 0
