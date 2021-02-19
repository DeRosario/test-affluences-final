import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { DatepickerModule } from '../generic-components/datepicker/datepicker.module';
import { SelectModule } from '../generic-components/select/select.module';
import { SearchService } from '../services/search.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    DatepickerModule,
    SelectModule,
    ReactiveFormsModule
  ],
  exports: [SearchComponent],
  providers: [SearchService]
})
export class SearchModule {}
