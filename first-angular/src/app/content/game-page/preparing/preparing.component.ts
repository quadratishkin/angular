import { Component } from '@angular/core';
import { GamePhases } from 'src/app/constants';
import { GameControlService } from 'src/app/services/game-control.service';

@Component({
  selector: 'app-preparing',
  templateUrl: './preparing.component.html',
  styleUrls: ['./preparing.component.scss'],
})
export class PreparingComponent {
  GamePhases = GamePhases;

  constructor(public gameControlService: GameControlService) {}
}
