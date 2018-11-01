export enum Opperator {
    ADDITION,
    SUBTRACTION,
    DIVITION,
    MULTIPLICATION,
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