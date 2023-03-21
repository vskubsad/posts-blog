import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent {
  createPostForm: FormGroup;

  constructor() {
  this.createPostFormGroup();
  }

  createPostFormGroup() {
    this.createPostForm = new FormGroup({
      postId: new FormControl(uuidv4(), ),
      title: new FormControl('', Validators.required),
      subTitle: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    })
  }

  createPost () {
    console.log('createPost: ', this.createPostForm.value)
  }
}
