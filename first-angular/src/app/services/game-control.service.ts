import { Injectable } from '@angular/core';
import { GamePhases, GameState } from '../constants';
import { Fractions } from '../content/game-page/preparing/constants';
import { Turn } from '../content/game-page/data-field/constants';

@Injectable({
  providedIn: 'root',
})
export class GameControlService {
  currentPhase: GamePhases = GamePhases.PREPARING;

  selectedFraction: Fractions | null = null;

  gameState: GameState = 0;

  turn: Turn = 0;
  turnTitle = 'End the Turn';

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

  handleTurn() {
    if (this.turn === 0) {
      this.turnTitle = "Opponent's Turn";
      this.turn = 1;
    } else {
      this.turnTitle = 'End the Turn';
      this.turn = 0;
    }
  }
}
