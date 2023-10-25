import { Injectable } from '@angular/core';
import { GamePhases, GameState } from '../constants';
import { Fractions } from '../content/game-page/preparing/constants';

@Injectable({
  providedIn: 'root',
})
export class GameControlService {
  currentPhase: GamePhases = GamePhases.PREPARING;

  selectedFraction: Fractions | null = null;

  gameState: GameState = 0;

  handleFractionChoice(fractionName: Fractions) {
    this.selectedFraction = fractionName;
  }

  handleChangeContent(current: GamePhases) {
    this.currentPhase = current;
  }

  handleGameStarted() {
    this.gameState = 1;
  }

  handleGameEnded() {
    this.gameState = 0;
  }
}
