import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoremIpsum } from 'lorem-ipsum';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss'],
})
export class CreatePostComponent {
  createPostForm: FormGroup;

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

  constructor(private http: HttpClient) {
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
    this.http
      .post('http://localhost:4000/api/posts', this.createPostForm.value)
      .subscribe(
        (data) => {
          console.log(data);
        },
        (error) => console.log(error)
      );
    console.log('createPost: ', this.createPostForm.value);
  }
}
