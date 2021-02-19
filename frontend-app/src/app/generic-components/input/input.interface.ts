import { FormGroup } from '@angular/forms';

export interface IInput {
    placeholder?: string;
    type?: string;
    label?: string;
    form: FormGroup;
    formControlName: string;
}
