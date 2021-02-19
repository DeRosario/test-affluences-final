import { FormGroup } from '@angular/forms';

export interface ICheckbox {
    label: string;
    form: FormGroup;
    formControlName: string;
}
