import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-mat-input',
  templateUrl: './mat-input.component.html',
  styleUrls: ['./mat-input.component.scss']
})
export class MatInputComponent {
@Input() placeholder: string = '';
@Input() label: string = '';
@Input() inputType: string = 'input';
@Input() fieldCtrl: FormControl = new FormControl();

}
