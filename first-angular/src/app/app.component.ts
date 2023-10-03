import { Component } from '@angular/core';
import { Pages } from './constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  Pages = Pages;
  currentPage: Pages = Pages.MAIN_PAGE;
  title = 'first-angular';
  text = 'Hello world';
  array = ['1', '2', '3'];
  removeItem() {
    this.array.pop();
  }
  changeText() {
    this.text = this.text.split('').reverse().join('');
  }
  handleChangeContent(current: Pages) {
    this.currentPage = current;
  }
}
