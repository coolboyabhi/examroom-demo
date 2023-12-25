import { Component } from '@angular/core';

@Component({
  selector: 'app-statusbar',
  templateUrl: './statusbar.component.html',
  styleUrl: './statusbar.component.scss'
})
export class StatusbarComponent {
  today: Date = new Date();
}
