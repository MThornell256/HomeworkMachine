export enum Opperator {
    ADDITION = 'ADDITION',
    SUBTRACTION = 'SUBTRACTION',
    DIVISION = 'DIVISION',
    MULTIPLICATION = 'MULTIPLICATION',
}

export enum AnswerState {
    UNANSWERED,
    CORRECT,
    INCORRECT,
}

export interface GameRound {
    primaryNumber: number;
    secondaryNumber: number;
    opperator: Opperator;
    answerState: AnswerState;
}