import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputComponent } from './components/mat-input/mat-input.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatCardComponent } from './components/mat-card/mat-card.component';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatTextareaComponent } from './components/mat-textarea/mat-textarea.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [MatInputComponent, MatCardComponent, MatTextareaComponent],
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
  ],
  exports: [MatInputComponent, MatCardComponent, MatTextareaComponent],
})
export class SharedModule {}
