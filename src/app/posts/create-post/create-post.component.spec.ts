import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppModule } from 'src/app/app.module';
import { ApiService } from 'src/app/shared/services/api.service';
import { SharedModule } from 'src/app/shared/shared.module';

import { CreatePostComponent } from './create-post.component';

describe('CreatePostComponent', () => {
  let component: CreatePostComponent;
  let fixture: ComponentFixture<CreatePostComponent>;

  const apiServiceStub = {
    createPost: () => {
      return {
        subscribe: (next: any, error: any) => {
          next: () => {
            console.log('success')
          };
          error: () => {
            console.log('success')
          };
        }
      }
    }
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePostComponent ],
      imports: [AppModule,  FormsModule, ReactiveFormsModule, SharedModule],
      providers: [{
        provide: ApiService,
        useValue: apiServiceStub
      },
    {
      provide: HttpClient,
      useValue: {}
    }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should invoke createPostFormGroup', () => {
    expect(component.createPostFormGroup).toBeDefined();
    spyOn(component, 'createPostFormGroup').and.callThrough()
    component.createPostFormGroup();
    expect(component.createPostFormGroup).toHaveBeenCalled()
  });
  
  it('should invoke createNewPost', () => {
    expect(component.createPost).toBeDefined();
    spyOn(component, 'createPost').and.callThrough()
    component.createPost();
    expect(component.createPost).toHaveBeenCalled()
  });

  it('should invoke goToDashboard ', () => {
    expect(component.goToDashboard).toBeDefined();
    spyOn(component, 'goToDashboard').and.callThrough()
    component.goToDashboard(); 
    expect(component.goToDashboard).toHaveBeenCalled()
  });
});
