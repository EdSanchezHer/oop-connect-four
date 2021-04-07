export default class Game {
    constructor(playerOneName, playerTwoName) {
        this.playerOneName = playerOneName;
        this.playerTwoName = playerTwoName;
    }

    getName() {
        return `${this.playerOneName} vs. ${this.playerTwoName}`;
    }
}
