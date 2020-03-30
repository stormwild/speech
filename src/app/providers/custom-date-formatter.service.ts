import { Injectable } from '@angular/core';
import { NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class CustomDateFormatterService extends NgbDateParserFormatter {
  parse(value: string): NgbDateStruct {
    if (value) {
      const dateParts = value.trim().split('/');
      return { month: +dateParts[0], day: +dateParts[1], year: +dateParts[2] };
    }
    return null;
  }
  format(date: NgbDateStruct): string {
    return date ?
      `${date.month ? date.month : ''}/${date.day ? date.day : ''}/${date.year}` :
      '';
  }
}
