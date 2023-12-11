import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChapterMenu, inputProp } from './constants';
import { PageContentService } from 'src/app/services/page-content.service';
import { Pages } from 'src/app/constants';

@Component({
  selector: 'app-account-creating',
  templateUrl: './account-creating.component.html',
  styleUrls: ['./account-creating.component.scss'],
})
export class AccountCreatingComponent {
  pages = Pages;
  value: string = '';

  chapterMenu = ChapterMenu;

  answer: any;

  valueProps = ['', '', ''];

  constructor(
    private http: HttpClient,
    public pageContentService: PageContentService
  ) {}
  search() {
    // 'https://jsonplaceholder.typicode.com/users/2' +
    this.http.get(this.value).subscribe((response) => {
      this.answer = Object.entries(response);
    });
    console.log(this.answer);
  }
}
