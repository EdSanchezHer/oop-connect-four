export default class Column {
    constructor() {
        this.rows = [null, null, null, null, null, null];   //one column made from same index of each row
    }

    add(playNum) {
        let cont = true;
        for(let i = this.rows.length-1; i >= 0; i--) {
            if(this.rows[i] === null && cont) {
                this.rows[i] = playNum;
                cont = false;
            }
        }
    }

    getTokenAt(indexNumber) {
        return this.rows[indexNumber];
    }

}
