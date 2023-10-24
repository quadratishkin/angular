import { Injectable } from '@angular/core';
import { GamePhases } from '../constants';
import { Fractions } from '../content/game-page/preparing/constants';

@Injectable({
  providedIn: 'root',
})
export class GameControlService {
  currentPhase: GamePhases = GamePhases.PREPARING;

  selectedFraction: Fractions | null = null;

  handleFractionChoice(fractionName: Fractions) {
    this.selectedFraction = fractionName;
  }

  handleChangeContent(current: GamePhases) {
    this.currentPhase = current;
  }
}
