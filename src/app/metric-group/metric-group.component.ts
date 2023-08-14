import { Component, Input } from '@angular/core';
import { newLayoutResponse, backendDataResponse, ElementGroup, FieldDefinitions, FieldDefinition, DataResponse } from '../../dashboard-mock-response'

@Component({
  selector: 'app-metric-group',
  templateUrl: './metric-group.component.html',
  styleUrls: ['./metric-group.component.css']
})
export class MetricGroupComponent {
  @Input() metricSection: ElementGroup;
  @Input() fieldDefinitions: FieldDefinitions;
  @Input() dataPoints: DataResponse;

  metricFieldDefinition(name: string): FieldDefinition {
    return this.fieldDefinitions[name]
  }
}
