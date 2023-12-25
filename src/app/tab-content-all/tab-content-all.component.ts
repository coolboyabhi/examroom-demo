import { Component } from '@angular/core';
import { ContentTabItem } from '../types/content.type';
import { Observable } from 'rxjs';
import { TabDataService } from '../service/tab-data.service';

@Component({
  selector: 'app-tab-content-all',
  templateUrl: './tab-content-all.component.html',
  styleUrl: './tab-content-all.component.scss'
})
export class TabContentAllComponent {
  contentTabItems$: Observable<ContentTabItem[]>;

  constructor(private _tabDataService: TabDataService){
    this.contentTabItems$ = this._tabDataService.contentTabItems$;
  }

}
