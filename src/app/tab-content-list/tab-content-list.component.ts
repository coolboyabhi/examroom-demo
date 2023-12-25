import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ContentTabItem } from '../types/content.type';

@Component({
  selector: 'app-tab-content-list',
  templateUrl: './tab-content-list.component.html',
  styleUrl: './tab-content-list.component.scss'
})
export class TabContentListComponent {
  @Input() contentTabItems$!: Observable<ContentTabItem[]>;
}
