import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import {MatIconModule} from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { StatusbarComponent } from './statusbar/statusbar.component';
import { TabPanelComponent } from './tab-panel/tab-panel.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { TabContentAllComponent } from './tab-content-all/tab-content-all.component';
import { TabContentServerAndDbComponent } from './tab-content-server-and-db/tab-content-server-and-db.component';
import { TabContentBusinessOperationalComponent } from './tab-content-business-operational/tab-content-business-operational.component';
import { TabContentSupportOperationalComponent } from './tab-content-support-operational/tab-content-support-operational.component';
import { TabContentLabelComponent } from './tab-content-label/tab-content-label.component';
import { TabContentListComponent } from './tab-content-list/tab-content-list.component';
import { TabContentItemsComponent } from './tab-content-items/tab-content-items.component';
import { NgChartsModule } from 'ng2-charts';
import { BarChartComponent } from './tab-content-business-operational/bar-chart/bar-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    StatusbarComponent,
    TabPanelComponent,
    TabContentAllComponent,
    TabContentServerAndDbComponent,
    TabContentBusinessOperationalComponent,
    TabContentSupportOperationalComponent,
    TabContentLabelComponent,
    TabContentListComponent,
    TabContentItemsComponent,
    BarChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatButtonToggleModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
