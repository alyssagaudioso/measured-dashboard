import { Component } from '@angular/core';
import { newLayoutResponse, backendDataResponse, ElementType, ElementGroup, FieldDefinitions, DataResponse, DatasetResponse } from '../../dashboard-mock-response'

@Component({
  selector: 'app-metrics-overview',
  templateUrl: './metrics-overview.component.html',
  styleUrls: ['./metrics-overview.component.css']
})
export class MetricsOverviewComponent {
  ElementType = ElementType;
  layout: ElementGroup[] = newLayoutResponse.layout
  fieldDefinitions: FieldDefinitions = newLayoutResponse.fieldDefinitions
  dataPoints: DataResponse = backendDataResponse.dataPoints
  dataSets: DatasetResponse[] = backendDataResponse.dataSets

  dataSet(name: string): DatasetResponse {
    return this.dataSets.find(dataSet => dataSet.name === name)
  }
}