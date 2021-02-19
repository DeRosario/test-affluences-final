import { FormGroup } from '@angular/forms';

export interface IDatepicker {
    placeholder?: string;
    min?: Date;
    form: FormGroup;
    formControlName: string;
}
