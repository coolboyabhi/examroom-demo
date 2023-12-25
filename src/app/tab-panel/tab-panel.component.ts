import { Component } from '@angular/core';
import { Tabs } from '../types/content.type';

@Component({
  selector: 'app-tab-panel',
  templateUrl: './tab-panel.component.html',
  styleUrl: './tab-panel.component.scss'
})
export class TabPanelComponent {
  currentTab: Tabs[number] = 'ALL'
}
