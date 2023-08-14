import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';

import { AppComponent } from './app.component';
import { MetricsOverviewComponent } from './metrics-overview/metrics-overview.component';
import { DataGridComponent } from './data-grid/data-grid.component';
import { MetricGroupComponent } from './metric-group/metric-group.component';
import { MetricComponent } from './metric/metric.component';

@NgModule({
  declarations: [
    AppComponent,
    MetricComponent,
    MetricGroupComponent,
    MetricsOverviewComponent,
    DataGridComponent
  ],
  imports: [
    BrowserModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
