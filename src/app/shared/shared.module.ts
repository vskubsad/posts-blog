import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { ReactiveFormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';

import { MatInputComponent } from './components/mat-input/mat-input.component';
import { MatTextareaComponent } from './components/mat-textarea/mat-textarea.component';
import { MatCardComponent } from './components/mat-card/mat-card.component';
import { MatButtonComponent } from './components/mat-button/mat-button.component';

@NgModule({
  declarations: [
    MatInputComponent,
    MatCardComponent,
    MatTextareaComponent,
    MatButtonComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatChipsModule,
    MatGridListModule,
    MatDividerModule,
    MatIconModule
  ],
  exports: [
    MatInputComponent,
    MatCardComponent,
    MatTextareaComponent,
    MatButtonComponent,
  ],
})
export class SharedModule {}
