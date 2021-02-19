import {
  FormGroup
} from '@angular/forms';

export interface ISelect {
  placeholder: string;
  items: string[];
  form: FormGroup;
  formControlName: string;
}
