import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { IDatepicker } from './datepicker.interface';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent implements OnInit {

  @Input() options: IDatepicker;

  @Output() newEvent: EventEmitter<Date> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {}

  eventChange(event: MatDatepickerInputEvent<Date>): void {
    this.newEvent.emit(event.value);
  }

}
