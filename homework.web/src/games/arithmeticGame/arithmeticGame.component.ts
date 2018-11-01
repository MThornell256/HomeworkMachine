import {Component} from '@angular/core';
import {AnswerState, GameRound, Opperator} from "./types";

@Component({
    selector: 'lm-arithmatic-game',
    templateUrl: 'src/games/arithmeticGame/arithmatic.template.html',
    styleUrls: ['src/games/arithmeticGame/arithmatic.style.css'],
})
export class ArithmaticGame {

    answerValue: '';

    private gameRounds: GameRound[];

    currentRoundQuestion: string;
    currentRoundNumber: number;
    totalRounds: number;

    showIncorrectAnswerStyle = false;

    constructor() {

        // init testing data; get from some service later
        this.gameRounds = [
            {
                primaryNumber: 1,
                secondaryNumber: 5,
                opperator: Opperator.ADDITION,
                answerState: AnswerState.UNANSWERED,
            },
            {
                primaryNumber: 6,
                secondaryNumber: 3,
                opperator: Opperator.ADDITION,
                answerState: AnswerState.UNANSWERED,
            },
            {
                primaryNumber: 60,
                secondaryNumber: 33,
                opperator: Opperator.ADDITION,
                answerState: AnswerState.UNANSWERED,
            },
        ];

        this.currentRoundNumber = 1;
        this.totalRounds = this.gameRounds.length;

        this.initRound();
    }

    private initRound() {

        this.currentRoundQuestion = this.getRoundQuestion(this.getCurrentRound());
        this.showIncorrectAnswerStyle = false;
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
        } else if(round.opperator == Opperator.DIVITION) {
            opperatorString = '/';
        } else if(round.opperator == Opperator.MULTIPLICATION) {
            opperatorString = 'X';
        }

        return `${round.primaryNumber} ${opperatorString} ${round.secondaryNumber}`;
    }

    private solve(round: GameRound): number {
        switch(round.opperator) {
            case Opperator.ADDITION:
                return round.primaryNumber + round.secondaryNumber;
            case Opperator.SUBTRACTION:
                return round.primaryNumber - round.secondaryNumber;
            case Opperator.DIVITION:
                return round.primaryNumber / round.secondaryNumber;
            case Opperator.MULTIPLICATION:
                return round.primaryNumber * round.secondaryNumber;
        }
    }

    checkAnswer() {

        const round = this.getCurrentRound();
        const actualAnswer = parseFloat(this.answerValue);
        const expectedAnswer = this.solve(round);

        const isCorrect = actualAnswer === expectedAnswer;

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
}