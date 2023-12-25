import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { TabDataService } from '../service/tab-data.service';
import { ContentItem, ContentTabItem } from '../types/content.type';

@Component({
  selector: 'app-tab-content-server-and-db',
  templateUrl: './tab-content-server-and-db.component.html',
  styleUrl: './tab-content-server-and-db.component.scss'
})
export class TabContentServerAndDbComponent {
  contentTabItems$: Observable<ContentTabItem[]>;
  contentItems$: Observable<ContentItem[]>;

  constructor(private _tabDataService: TabDataService){
    this.contentTabItems$ = this._tabDataService.getContentFromServerDB();
    this.contentItems$ = this._tabDataService.getItemsFromServerDB();
  }
}
