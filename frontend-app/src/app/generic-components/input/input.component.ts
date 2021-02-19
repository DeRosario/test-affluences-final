import { Component, OnInit, Input } from '@angular/core';
import { IInput } from './input.interface';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() options: IInput;

  constructor() { }

  ngOnInit(): void {}

}
