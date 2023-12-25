import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ContentItem, SelectedColor } from '../types/content.type';
import { SELECTED_COLOR } from '../data/contentTabItems.data';

@Component({
  selector: 'app-tab-content-items',
  templateUrl: './tab-content-items.component.html',
  styleUrl: './tab-content-items.component.scss'
})
export class TabContentItemsComponent {
  @Input() contentItems$!: Observable<ContentItem[]>;
  selected: SelectedColor = SELECTED_COLOR;

}
