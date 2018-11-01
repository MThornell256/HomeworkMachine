import {Component} from '@angular/core';
import {AnswerState, GameRound, Opperator} from "./types";
import {ArithmerticGameService} from "../../services/ArithmaticGame.service";

@Component({
    selector: 'lm-arithmatic-game',
    templateUrl: 'src/games/arithmeticGame/arithmatic.template.html',
    styleUrls: ['src/games/arithmeticGame/arithmatic.style.css'],
})
export class ArithmaticGame {

    answerValue = '';
    answerValueRemainder = '';

    private gameRounds: GameRound[];

    currentRoundQuestion: string;
    currentRoundNumber: number;
    totalRounds: number;

    showIncorrectAnswerStyle = false;

    constructor(private service: ArithmerticGameService) {

        // init testing data; get from some service later
        this.gameRounds = this.service.generateRounds({
            minValue: 0,
            maxValue: 20,
            roundCount: 10,

            addition: true,
            division: true,
       });

        this.currentRoundNumber = 1;
        this.totalRounds = this.gameRounds.length;

        this.initRound();
    }

    private initRound() {

        this.currentRoundQuestion = this.getRoundQuestion(this.getCurrentRound());
        this.showIncorrectAnswerStyle = false;
        this.answerValue = '';
        this.answerValueRemainder = '';
    }

    private getCurrentRound(): GameRound {
        return this.gameRounds[this.currentRoundNumber - 1];
    }

    private getRoundQuestion(round: GameRound): string {

        let opperatorString = 'ERROR';

        if(round.opperator == Opperator.ADDITION) {
            opperatorString = '+';
        } else if(round.opperator == Opperator.SUBTRACTION) {
            opperatorString = '-';
        } else if(round.opperator == Opperator.DIVISION) {
            opperatorString = '/';
        } else if(round.opperator == Opperator.MULTIPLICATION) {
            opperatorString = 'X';
        }

        return `${round.primaryNumber} ${opperatorString} ${round.secondaryNumber}`;
    }

    checkAnswer() {

        const round = this.getCurrentRound();
        const actualAnswer = parseFloat(this.answerValue);
        const expectedAnswer = this.service.solveRound(round);

        let isCorrect = actualAnswer === expectedAnswer;
        if(round.opperator === Opperator.DIVISION) {
            isCorrect = this.checkDivision(round, actualAnswer, parseFloat(this.answerValueRemainder))
        }

        // Set Answer Flag
        if(round.answerState === AnswerState.UNANSWERED) {
            round.answerState = isCorrect
                ? AnswerState.CORRECT
                : AnswerState.INCORRECT;
        }

        // Advance Round
        if(isCorrect) {
            this.currentRoundNumber++;

            if (this.currentRoundNumber > this.totalRounds) {
                // Game Has Completed
            } else {
                this.initRound();
            }
        } else {
            // Incorrect Answer
            this.showIncorrectAnswerStyle = true;
        }
    }

    private checkDivision(round: GameRound, value: number, remainders: number): boolean {

        if (Math.floor(round.primaryNumber / round.secondaryNumber) !== value) {
            return false;
        }

        if (round.primaryNumber % round.secondaryNumber !== remainders) {
            return false;
        }

        return true;
    }
}