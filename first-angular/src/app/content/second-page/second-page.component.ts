import { Component } from '@angular/core';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.scss'],
})
export class SecondPageComponent {
  text = 'Hello world!';
  array = ['1', '2', '3'];
  removeItem() {
    this.array.pop();
  }
  changeText() {
    this.text = this.text.split('').reverse().join('');
  }
}
