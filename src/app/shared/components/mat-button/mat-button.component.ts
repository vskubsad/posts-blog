import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mat-button',
  templateUrl: './mat-button.component.html',
  styleUrls: ['./mat-button.component.scss']
})
export class MatButtonComponent {
@Input() color: string = 'primary';
@Input() label: string = '';
@Input() isDisabled?: boolean = false;
}
