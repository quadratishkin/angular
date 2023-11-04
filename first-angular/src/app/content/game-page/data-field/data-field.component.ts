import { Component } from '@angular/core';
import { GamePhases } from 'src/app/constants';
import { GameControlService } from 'src/app/services/game-control.service';
import {
  idCommonFieldPictures,
  idHandPictures,
  idMoneyCollectorPictures,
  idMyFieldPictures,
  idOppsFieldPictures,
} from './constants';

@Component({
  selector: 'app-data-field',
  templateUrl: './data-field.component.html',
  styleUrls: ['./data-field.component.scss'],
})
export class DataFieldComponent {
  GamePhases = GamePhases;

  myHand: number[] = [0, 0, 0, 0, 0];
  opponentsHand: number[] = [1, 2, 3];

  field: number[][] = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
  ];

  idHandPictures = idHandPictures;
  idMoneyCollectorPictures = idMoneyCollectorPictures;
  idCommonFieldPictures = idCommonFieldPictures;
  idOppsFieldPictures = idOppsFieldPictures;
  idMyFieldPictures = idMyFieldPictures;

  constructor(public gameControlService: GameControlService) {}

  getCardImageUrl(index: number, cell: number) {
    let url = '';
    switch (index) {
      case 0:
      case 7:
        url = idMoneyCollectorPictures[cell];
        break;
      case 1:
      case 2:
        url = idOppsFieldPictures[cell];
        break;
      case 3:
      case 4:
        url = idCommonFieldPictures[cell];
        break;
      case 5:
      case 6:
        url = idMyFieldPictures[cell];
        break;
    }
    return url;
  }
}
