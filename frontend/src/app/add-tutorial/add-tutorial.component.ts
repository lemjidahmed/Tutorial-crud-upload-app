import { Component } from '@angular/core';
import {TutorialService} from "../services/tutorial.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-tutorial.component.html',
  styleUrls: ['./add-tutorial.component.css']
})
export class AddTutorialComponent {
  submitted: boolean=false;
  tutorialForm: FormGroup;

  constructor(private fb: FormBuilder,private tutorialService:TutorialService) {
    this.tutorialForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  newTutorial() {
    this.submitted = false;
    this.tutorialForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  saveTutorial() {
    if (this.tutorialForm.valid) {
      const titleControl = this.tutorialForm.get('title');
      const descriptionControl = this.tutorialForm.get('description');
      const published = false;
      if (titleControl && descriptionControl) {
        const title = titleControl.value;
        const description = descriptionControl.value;

        this.tutorialService.create({title, description, published}).subscribe({
          next: (data) => {
            console.log(data);
            this.submitted = true;
          },
          error: (e) => {
            console.error(e)
          }
        });
      }
    }
  }
}
