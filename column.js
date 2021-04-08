export default class Column {
	constructor() {
		this.rows = [null, null, null, null, null, null]; //one column made from same index of each row
	}
	add(playNum) {
		let cont = true;
		for (let i = this.rows.length - 1; i >= 0; i--) {
			if (this.rows[i] === null && cont) {
				this.rows[i] = playNum;
				cont = false;
			}
		}
	}

	getTokenAt(rowIndex) {
		return this.rows[rowIndex];
	}

	isFull() {
		return !this.rows.includes(null);

		// let answer = true;
		// this.rows.forEach(function(element) {
		//     if(element === null) {
		//         answer = false;
		//     }
		// });
		// return answer;
	}
}
