export default class RowWinInspector {
    constructor(columns) {
        this.columns = columns; //one array of four objects
    }

    inspect() {
        let playerNumber = 0;

        for(let i = 0; i < 6; i++) {
            if((this.columns[0].rows[i] === this.columns[1].rows[i]) ===
            (this.columns[2].rows[i] === this.columns[3].rows[i])) {
                playerNumber = this.columns[0].rows[i];
            }
        }

        return playerNumber;
    }

}
