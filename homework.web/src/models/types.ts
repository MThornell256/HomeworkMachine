
export interface UserProfile {
    username: string;
    exp: number;
    history: GameHistory[];
    achievements: Achievement[];
}

export interface GameHistory {
    gameType: GameType;
    timestamp: Date;
    exp: number;
}

export interface Achievement {
    name: string;
    iconName: string;
    hasObtained: boolean;
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