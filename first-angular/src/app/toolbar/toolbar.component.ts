import { Component, EventEmitter, Output } from '@angular/core';
import { Pages } from '../constants';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  @Output() pageChanged = new EventEmitter<Pages>();
  Pages = Pages;

  handleChangeContent(current: Pages) {
    this.pageChanged.emit(current);
  }
}
