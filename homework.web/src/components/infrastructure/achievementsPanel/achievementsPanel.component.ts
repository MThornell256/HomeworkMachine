import { Component, OnInit } from  '@angular/core';
import { Achievement } from "@models/types";

@Component({
    selector: 'achievements-panel',
    templateUrl: 'src/components/infrastructure/achievementsPanel/achievementsPanel.template.html'
})

export class AchievementsPanelComponent implements OnInit {

    achievements: Achievement[];

    constructor() {
    }

    ngOnInit() {
    }
}