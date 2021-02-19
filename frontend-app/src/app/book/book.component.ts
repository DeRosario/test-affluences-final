import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormBuilder,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';
import {
  ICheckbox
} from '../generic-components/checkbox/checkbox.interface';
import {
  IInput
} from '../generic-components/input/input.interface';
import {
  SearchService
} from '../services/search.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  timeslotChoosen: string;

  formSaveReservation = new FormBuilder().group({
    firstName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(15)]],
    lastName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(15)]],
    email: ['', [Validators.required, Validators.email]],
    phoneNumber: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
    conditionsAgreement: [false, Validators.requiredTrue],
    saveAccount: [false]
  });

  rowsInputsOptions: IInput[][];

  rowsCheckboxsOptions: ICheckbox[][];

  constructor(private searchService: SearchService, private router: Router) {}

  ngOnInit(): void {
    this.getTimeSlot();
    this.setInputsOptions();
  }

  saveReservation(): void {
    // For Loop for all controls to get all errors and know which input got the errors
    console.log(this.formSaveReservation.controls)

    if (this.formSaveReservation.valid) {
      alert('timeslot reservation SuccessFul !');
      this.router.navigate(['/search']);
    } else {
      alert('form is not valid');
    }
  }

  setInputsOptions(): void {
    this.rowsInputsOptions = [
      [{
          placeholder: 'First Name',
          type: 'text',
          formControlName: 'firstName',
          form: this.formSaveReservation
        },
        {
          placeholder: 'Last Name',
          type: 'text',
          formControlName: 'lastName',
          form: this.formSaveReservation
        }
      ],
      [{
          placeholder: 'Email',
          type: 'text',
          formControlName: 'email',
          form: this.formSaveReservation
        },
        {
          placeholder: 'Phone Number',
          type: 'text',
          formControlName: 'phoneNumber',
          form: this.formSaveReservation
        }
      ]
    ];

    this.rowsCheckboxsOptions = [
      [{
        label: 'I accept terms and conditions',
        formControlName: 'conditionsAgreement',
        form: this.formSaveReservation
      }],
      [{
        label: 'Save my account',
        formControlName: 'saveAccount',
        form: this.formSaveReservation
      }]
    ];
  }

  getTimeSlot(): void {
    const time: string = this.searchService.searchDate.getValue();
    const date: string = time.split(' ')[0];
    const hours: string = time.split(' ')[1];
    this.timeslotChoosen = `${date} at ${hours}`;
  }
}
