import { Component } from '@angular/core';
import { GamePhases } from 'src/app/constants';
import { GameControlService } from 'src/app/services/game-control.service';
import { Fractions } from './constants';

@Component({
  selector: 'app-preparing',
  templateUrl: './preparing.component.html',
  styleUrls: ['./preparing.component.scss'],
})
export class PreparingComponent {
  GamePhases = GamePhases;

  Fraction = Fractions;

  opponentsState: string = 'Opponent is not ready';

  constructor(public gameControlService: GameControlService) {}

  changeColor() {
    const colorForButton = document.getElementById('exampleButton');

    if (colorForButton != null) {
      this.opponentsState = 'Now opponent is ready';
      colorForButton.style.backgroundColor = 'green';
    }
  }

  handleLoadCircle() {
    const loadCircle = document.getElementById('loadCircle');

    if (loadCircle != null) {
      loadCircle.style.display = 'block';
    }
  }
}
