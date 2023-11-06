import { Injectable } from '@angular/core';
import { Pages } from '../constants';

@Injectable({
  providedIn: 'root',
})
export class PageContentService {
  currentPage: Pages = Pages.GAME_PAGE;

  handleChangeContent(current: Pages) {
    this.currentPage = current;
  }
}
