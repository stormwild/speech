import { Injectable } from '@angular/core';
import { NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class CustomDateFormatterService extends NgbDateParserFormatter {
  parse(value: string): NgbDateStruct {
    if (value) {
      const dateParts = value.trim().split('/');
      if (dateParts.length === 1 && +dateParts[0]) {
        return { day: +dateParts[0], month: null, year: null };
      } else if (dateParts.length === 2 && +dateParts[0] && +dateParts[1]) {
        return { day: +dateParts[0], month: +dateParts[1], year: null };
      } else if (dateParts.length === 3 && +dateParts[0] && +dateParts[1] && +dateParts[2]) {
        return { day: +dateParts[0], month: +dateParts[1], year: +dateParts[2] };
      }
    }
    return null;
  }
  format(date: NgbDateStruct): string {
    return date ?
      `${date.month ? date.month : ''}/${date.day ? date.day : ''}/${date.year}` :
      '';
  }
}
