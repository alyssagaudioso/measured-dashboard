import { Component, Input } from '@angular/core';
import { CurrencyPipe, PercentPipe, DecimalPipe, DatePipe,  } from '@angular/common';
import { ElementType, Type, Format } from '../../dashboard-mock-response'
import { UtilsService } from '../utils.service';

@Component({
  selector: 'app-metric',
  templateUrl: './metric.component.html',
  styleUrls: ['./metric.component.css']
})
export class MetricComponent {
  @Input() label: string = "??";
  @Input() format: Format;
  @Input() type: Type
  @Input() digitsInfo: string;
  @Input() value?: number | string;

  formattedValue: string | number;

  constructor(private utilsService: UtilsService) { }

  ngOnInit() {
    this.formattedValue = this.utilsService.formattedValue(this.format, this.value, this.digitsInfo);
  }
  
}
