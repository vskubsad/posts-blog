import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatTextareaComponent } from './mat-textarea.component';

describe('MatTextareaComponent', () => {
  let component: MatTextareaComponent;
  let fixture: ComponentFixture<MatTextareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatTextareaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
