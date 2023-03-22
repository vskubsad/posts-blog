import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { LoremIpsum } from 'lorem-ipsum';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss'],
})
export class CreatePostComponent {
  createPostForm: FormGroup;
  createPostSubscription: Subscription;

  lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4,
    },
    wordsPerSentence: {
      max: 16,
      min: 4,
    },
  });

  constructor(private router: Router, private apiService: ApiService) {
    this.createPostFormGroup();
  }

  createPostFormGroup() {
    this.createPostForm = new FormGroup({
      title: new FormControl(this.lorem.generateWords(2), Validators.required),
      subTitle: new FormControl(
        this.lorem.generateWords(5),
        Validators.required
      ),
      description: new FormControl(
        this.lorem.generateSentences(5),
        Validators.required
      ),
    });
  }

  createPost() {
    this.createPostSubscription = this.apiService
      .createPost(this.createPostForm.value)
      .subscribe({
        next: () => this.goToDashboard(),
        error: (error) => console.log(error),
      });
  }

  goToDashboard() {
    this.router.navigate(['/dashboard']);
  }
}
