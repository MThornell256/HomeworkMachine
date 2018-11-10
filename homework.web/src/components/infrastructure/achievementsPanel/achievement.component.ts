import { Component, OnInit } from  '@angular/core';
import {Achievement} from "@models/types";

@Component({
    selector: 'achievement',
    templateUrl: 'src/components/infrastructure/achievementsPanel/achievement.template.html'
})

export class AchievementComponent implements OnInit {

    achievement: Achievement;

    constructor() {
    }

    ngOnInit() {
    }
}