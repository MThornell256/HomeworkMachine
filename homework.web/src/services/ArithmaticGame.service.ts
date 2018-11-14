import * as _ from 'lodash'

import {Injectable} from "@angular/core";
import {AnswerState, GameRound, Opperator} from "../games/arithmeticGame/types";

export interface ArithmaticGameGeneratorConfig {
    minValue: number;
    maxValue: number;
    roundCount: number;

    addition?: boolean;
    subtraction?: boolean;
    division?: boolean;
    multiplication?: boolean;
}

@Injectable({providedIn: 'root'})
export class ArithmerticGameService{

    generateRounds(config: ArithmaticGameGeneratorConfig): GameRound[] {

        const result: GameRound[] = [];
        const opperators: Opperator[] = [];

        if(config.addition) {
            opperators.push(Opperator.ADDITION)
        }

        if(config.subtraction) {
            opperators.push(Opperator.SUBTRACTION)
        }

        if(config.multiplication) {
            opperators.push(Opperator.MULTIPLICATION)
        }

        if(config.division) {
            opperators.push(Opperator.DIVISION)
        }

        if (opperators.length <= 0 ) {
            return result;
        }

        for(let i = 0; i < config.roundCount; i++) {
            const candidateRound = {
                primaryNumber: _.random(config.minValue, config.maxValue),
                    secondaryNumber: _.random(config.minValue, config.maxValue),
                    opperator: opperators[_.random(opperators.length - 1)],
                    answerState: AnswerState.UNANSWERED
            };

            // Make sure the primary number is always bigger if dividing
            if (candidateRound.opperator == Opperator.DIVISION && candidateRound.primaryNumber < candidateRound.secondaryNumber) {
                const max = _.max([candidateRound.primaryNumber, candidateRound.secondaryNumber]);
                const min = _.min([candidateRound.primaryNumber, candidateRound.secondaryNumber]);

                candidateRound.primaryNumber = max;
                candidateRound.secondaryNumber = min // pretect agaisnt Div By Zero Problems
                    ? min
                    : 1;
            }

            result.push(candidateRound );
        }

        return result;
    }

    solveRound(round: GameRound): number {
        switch(round.opperator) {
            case Opperator.ADDITION:
                return round.primaryNumber + round.secondaryNumber;
            case Opperator.SUBTRACTION:
                return round.primaryNumber - round.secondaryNumber;
            case Opperator.DIVISION:
                return round.primaryNumber / round.secondaryNumber;
            case Opperator.MULTIPLICATION:
                return round.primaryNumber * round.secondaryNumber;
        }
    }

}