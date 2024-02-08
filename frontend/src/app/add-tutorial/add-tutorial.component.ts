import { Component } from '@angular/core';
import {TutorialService} from "../services/tutorial.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AddUploadService} from "../services/add-upload.service";

@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-tutorial.component.html',
  styleUrls: ['./add-tutorial.component.css']
})
export class AddTutorialComponent {
  submitted: boolean=false;
  tutorialForm: FormGroup;
  selectedFiles?:string;

  constructor(private fb: FormBuilder,private tutorialService:TutorialService,private addUploadService: AddUploadService) {
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
      this.selectedFiles=this.addUploadService.getData();
      console.log("selectedfile:"+this.selectedFiles)
      if (titleControl && descriptionControl && this.selectedFiles) {
        const title = titleControl.value;
        const description = descriptionControl.value;
        const files=this.selectedFiles;
        console.log("files:"+files)

        this.tutorialService.create({title, description, published,files}).subscribe({
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

  setFilesName() {
    // this.selectedFiles=data;
    // console.log(this.selectedFiles);
    this.selectedFiles=this.addUploadService.getData();
  }
}
