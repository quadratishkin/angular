import { Injectable } from '@angular/core';
import { GamePhases, GameState } from '../constants';
import { Fractions } from '../content/game-page/preparing/constants';
import {
  Turn,
  field,
  idMoneyCollectorPictures,
} from '../content/game-page/data-field/constants';

@Injectable({
  providedIn: 'root',
})
export class GameControlService {
  currentPhase: GamePhases = GamePhases.PREPARING;
  isShowModal: boolean = false;
  cardPos: number[] = [-1, -1];

  mySelectedFraction: Fractions | null = null;
  opponentSelectedFraction: string = 'Swamp';

  gameState: GameState = 0;

  secondPlayerIsReady: boolean = false;

  playButton: string = 'Play';
  opponentsState: string = 'Opponent is not ready';

  idMoneyCollectorPictures = idMoneyCollectorPictures;

  changeColor() {
    const colorForButton = document.getElementById('exampleButton');

    if (colorForButton != null) {
      this.opponentsState = 'Now opponent is ready';
      colorForButton.style.backgroundColor = 'green';
      this.playButton = 'Play';
      const loadCircle = document.getElementById('loadCircle');
      if (loadCircle != null) {
        loadCircle.style.visibility = 'hidden';
      }
    }
  }

  searchGame() {
    const loadCircle = document.getElementById('loadCircle');

    if (this.playButton == 'Play') {
      this.playButton = 'Find Game';

      if (loadCircle != null) {
        loadCircle.style.visibility = 'visible';
      }
    } else {
      this.playButton = 'Play';

      if (loadCircle != null) {
        loadCircle.style.visibility = 'hidden';
      }
    }
  }

  turn: Turn = 0;
  turnTitle = 'End the Turn';

  handleFractionChoice(fractionName: Fractions) {
    this.mySelectedFraction = fractionName;
  }

  changeSecondPlayerState() {
    this.secondPlayerIsReady = true;
  }

  handleChangeContent(current: GamePhases) {
    if (this.secondPlayerIsReady == true) {
      this.currentPhase = current;
      if (current == 'PREPARING') this.secondPlayerIsReady = false;
    } else {
    }
  }

  handleGameStarted() {
    if (this.secondPlayerIsReady == true) {
      this.gameState = 1;
    }
  }

  handleGameEnded() {
    this.opponentsState = 'Opponent is not ready';
    this.playButton = 'Play';
    this.gameState = 0;
  }

  determineCard(row: number, cell: number) {
    if (field[row][cell].name === 0) {
      return;
    }
    this.cardPos = [row, cell];
    this.isShowModal = true;
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
  getCardImageUrl(row: number, cell: number) {
    let url = '';
    switch (row) {
      case 0:
      case 7:
        url = idMoneyCollectorPictures[cell];
        break;
      case 1:
      case 2:
        url = idMoneyCollectorPictures[cell];
        break;
      case 3:
      case 4:
        url = idMoneyCollectorPictures[cell];
        break;
      case 5:
      case 6:
        url = idMoneyCollectorPictures[cell];
        break;
    }
    return url;
  }

  showModal() {
    let url = '';
    let imgNum = field[this.cardPos[0]][this.cardPos[1]].name;
    url = idMoneyCollectorPictures[imgNum];
    return url;
  }
}
