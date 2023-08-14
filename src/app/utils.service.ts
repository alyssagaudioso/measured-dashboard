import { Injectable } from '@angular/core';
import { CurrencyPipe, PercentPipe, DecimalPipe, DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  formattedValue(format, value, digitsInfo): string | number {
    switch(format) {
        case 'currency':
          return new CurrencyPipe('en-US').transform(value, 'USD', 'symbol', digitsInfo);
        case 'percent':
          return new PercentPipe('en-US').transform(value, digitsInfo);
        case 'number':
          return new DecimalPipe('en-US').transform(value, digitsInfo);
        case 'datetime':
          return new DatePipe('en-US').transform(value, 'short');
        default:
          return value;
    }
  }
}
