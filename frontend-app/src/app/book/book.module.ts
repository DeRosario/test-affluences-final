import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book.component';
import { InputModule } from '../generic-components/input/input.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CheckboxModule } from '../generic-components/checkbox/checkbox.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [BookComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputModule,
    CheckboxModule,
    RouterModule
  ],
  exports: [BookComponent]
})
export class BookModule { }
