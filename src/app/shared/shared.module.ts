import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputComponent } from './components/mat-input/mat-input.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { MatCardComponent } from './components/mat-card/mat-card.component';
import {MatButtonModule} from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';




@NgModule({
  declarations: [
    MatInputComponent,
    MatCardComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatChipsModule
  ],
  exports:  [
    MatInputComponent,
    MatCardComponent,
]
})
export class SharedModule { }
