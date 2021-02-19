import { Component, OnInit, Input } from '@angular/core';
import { ICheckbox } from './checkbox.interface';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

  @Input() options: ICheckbox;

  constructor() { }

  ngOnInit(): void {
  }

}
