import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { TabDataService } from '../service/tab-data.service';
import { ContentItem, ContentTabItem } from '../types/content.type';

@Component({
  selector: 'app-tab-content-support-operational',
  templateUrl: './tab-content-support-operational.component.html',
  styleUrl: './tab-content-support-operational.component.scss'
})
export class TabContentSupportOperationalComponent {
  contentItems$: Observable<ContentItem[]>;
  contentTabItems$: Observable<ContentTabItem[]>;

  constructor(private _tabDataService: TabDataService){
    this.contentTabItems$ = this._tabDataService.getContentFromSupportOperations();
    this.contentItems$ = this._tabDataService.getItemsFromSupportOperations();
  }
}
