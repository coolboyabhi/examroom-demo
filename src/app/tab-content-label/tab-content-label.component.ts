import { Component } from '@angular/core';
import { ContentLabel } from '../types/content.type';

@Component({
  selector: 'app-tab-content-label',
  templateUrl: './tab-content-label.component.html',
  styleUrl: './tab-content-label.component.scss'
})
export class TabContentLabelComponent {
  items: ContentLabel[] = [];

  constructor(){
    this.items = [
      {
        color: 'text-teal-500',
        icon: 'done',
        content: 'Operational'
      },
      {
        color: 'text-yellow-500',
        icon: 'engineering',
        content: 'Planned Maintenance'
      },
      {
        color: 'text-purple-500',
        icon: 'published_with_changes',
        content: 'Recently Resolved'
      },
      {
        color: 'text-red-500',
        icon: 'quick_reference_all',
        content: 'Investigation'
      },
    ]
  }
}
