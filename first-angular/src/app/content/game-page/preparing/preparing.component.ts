import { Component } from '@angular/core';
import { GamePhases } from 'src/app/constants';
import { GameControlService } from 'src/app/services/game-control.service';
import { Fractions } from './constants';
import { FocusMonitorDetectionMode } from '@angular/cdk/a11y';

@Component({
  selector: 'app-preparing',
  templateUrl: './preparing.component.html',
  styleUrls: ['./preparing.component.scss'],
})
export class PreparingComponent {
  GamePhases = GamePhases;

  Fraction = Fractions;

  selectedFraction: Fractions | null = null;

  constructor(public gameControlService: GameControlService) {}

  handleFractionChoice(fractionName: Fractions) {
    this.selectedFraction = fractionName;
  }
}
