import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ContentItem, ContentTabItem } from '../types/content.type';
import { TabDataService } from '../service/tab-data.service';

@Component({
  selector: 'app-tab-content-business-operational',
  templateUrl: './tab-content-business-operational.component.html',
  styleUrl: './tab-content-business-operational.component.scss'
})
export class TabContentBusinessOperationalComponent {
  contentTabItems$: Observable<ContentTabItem[]>;
  contentItems$: Observable<ContentItem[]>;

  constructor(private _tabDataService: TabDataService){
    this.contentTabItems$ = this._tabDataService.getContentFromBusinessOperations();
    this.contentItems$ = this._tabDataService.getItemsFromBusinessOperations();
  }
}
