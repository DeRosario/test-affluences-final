import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormBuilder,
  Validators
} from '@angular/forms';
import {
  Router
} from '@angular/router';
import * as moment from 'moment';
import {
  IDatepicker
} from '../generic-components/datepicker/datepicker.interface';
import {
  ISelect
} from '../generic-components/select/select.interface';
import {
  SearchService
} from '../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  datepickerOptions: IDatepicker;

  selectOptions: ISelect;

  formReservation = new FormBuilder().group({
    date: ['', Validators.required],
    time: ['', Validators.required]
  });

  constructor(private searchService: SearchService, private router: Router) {}

  ngOnInit(): void {
    this.datepickerOptions = {
      placeholder: 'Date',
      min: new Date(),
      form: this.formReservation,
      formControlName: 'date'
    };

    this.selectOptions = {
      placeholder: 'Time',
      items: [],
      form: this.formReservation,
      formControlName: 'time'
    };

    this.setTimePicker(moment().hour(), true);
  }

  checkReservation(): void {
    if (this.formReservation.valid) {
      this.searchService.getReservation(this.formReservation.value.date, this.formReservation.value.time.split(':')).subscribe((result) => {
        if (result.isAvailable) {
          this.router.navigate(['/book']);
        } else {
          alert('Timeslot not available');
        }
      });
    } else {
      alert('Form not valid');
    }
  }

  eventDate(date: Date): void {
    const sameDay = moment(date).isSame(moment(), 'day');
    if (sameDay) {
      this.setTimePicker(moment().hour(), true);
    } else {
      this.setTimePicker(0, false);
    }
  }

  setTimePicker(hourArg: number, sameDay: boolean): void {
    this.selectOptions.items = [];
    for (let i = hourArg; i < 24; i++) {
      let hours = '';
      let minutes = '';

      if (i === moment().hour() && moment().minutes() > 30 && sameDay) {
        i++;
      }

      i < 10 ? hours = `0${i}` : hours = i.toString();

      if (i === moment().hour() && moment().minutes() > 0 && moment().minutes() < 30) {
        minutes = '30';
        this.selectOptions.items.push(`${hours}:${minutes}`);
      } else {
        for (let m = 0; m < 2; m++) {
          m === 0 ? minutes = '00' : minutes = '30';
          this.selectOptions.items.push(`${hours}:${minutes}`);
        }
      }
    }
  }

}
