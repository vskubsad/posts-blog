import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-mat-textarea',
  templateUrl: './mat-textarea.component.html',
  styleUrls: ['./mat-textarea.component.scss']
})
export class MatTextareaComponent {
  @Input() placeholder: string = '';
  @Input() label: string = '';
  @Input() inputType: string = 'input';
  @Input() fieldCtrl: FormControl = new FormControl();
}
