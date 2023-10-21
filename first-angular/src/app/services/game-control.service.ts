import { Injectable } from '@angular/core';
import { GamePhases } from '../constants';

@Injectable({
  providedIn: 'root',
})
export class GameControlService {
  currentPhase: GamePhases = GamePhases.PREPARING;

  handleChangeContent(current: GamePhases) {
    this.currentPhase = current;
  }
}
