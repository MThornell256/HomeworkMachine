
export interface UserProfile {
    username: string;
    exp: number;
    history: GameHistory[];
}

export interface GameHistory {
    gameType: GameType;
    timestamp: Date;
    exp: number;
}

export enum GameType {
    ARITHMATIC,
    COUNTING,
    LSCWC, // Look Say Cover Write Check
    SIGHT_WORDS,
    BOOLEAN_OPPERATIONS,
    TIME,
    AREA_PARAMETER,
    SPELLING,
}