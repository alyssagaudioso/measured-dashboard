import { Component, Input } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { DatasetFields, ElementGroup, FieldDefinitions, DatasetResponse, DataResponse, FieldDefinition } from '../../dashboard-mock-response'
import { UtilsService } from '../utils.service';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.css']
})
export class DataGridComponent {
  @Input() metricSection: ElementGroup;
  @Input() fieldDefinitions: FieldDefinitions;
  @Input() dataSet: DatasetResponse;

  columns: FieldDefinition[];
  data: DataResponse[];
  columnsToDisplay: string[];
  formattedData: DataResponse[] = [];
  totals: { [key: string]: number | string } = {};

  constructor(private utilsService: UtilsService) { }

  ngOnInit() {
    this.data = this.dataSet.data
    this.columns = this.metricSection.elements[0].fields.map(field => ({
      ...this.fieldDefinitions[field.name],
      ...field
    }))

    this.columnsToDisplay = this.metricSection.elements[0].fields.map(field => field.name);

    this.formatData();
    this.calculateTotals();
  }

  formatData() {
    this.formattedData = this.data.map(row => {
      let formattedRow = {};
      this.columns.forEach(column => {
        const format = this.fieldDefinitions[column.name].format;
        const digitsInfo = this.fieldDefinitions[column.name].digitsInfo;
        formattedRow[column.name] = this.utilsService.formattedValue(format, row[column.name], digitsInfo);
      });
      return formattedRow;
    });
  }

  calculateTotals() {
    this.columns.forEach(column => {
      if(column.aggFn === 'none') {
        this.totals[column.name] = ''
      } else {
        let sum = 0
        this.data.forEach(dataPoint => sum += (dataPoint[column.name]) as number)
        const rawValue = column.aggFn === 'sum' ? sum : sum/this.data.length
        const format = this.fieldDefinitions[column.name].format;
        const digitsInfo = this.fieldDefinitions[column.name].digitsInfo;
        this.totals[column.name] = this.utilsService.formattedValue(format, rawValue, digitsInfo);
      }
    })
  }

  getFooterValue(columnName: string, index: number): string | number {
      return index === 0 ? 'Totals' : this.totals[columnName];
  }
}
