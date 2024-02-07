import {Component, OnInit} from '@angular/core';
import {Tutorial} from "../models/tutorial.model";
import {TutorialService} from "../services/tutorial.service";

@Component({
  selector: 'app-tutorial-list',
  templateUrl: './tutorial-list.component.html',
  styleUrls: ['./tutorial-list.component.css']
})
export class TutorialListComponent implements OnInit{
    tutorials:Tutorial[]=[];
    currentTutorial: Tutorial = {};
    currentIndex=-1;
    title='';

    selectedTutorials:string="all";
    ispublished?:boolean;

  constructor(private tutorialService:TutorialService) { }
    ngOnInit() {
      this.retrieveTutorials();
    }
    retrieveTutorials(){
        this.tutorialService.getAll().subscribe({
          next: (data:any) => {
            this.tutorials = data;
            console.log(data);
          },
          error: (e:any) => console.error(e)
        });
    }
    refreshList(): void {
      this.retrieveTutorials();
      this.currentTutorial = {};
      this.currentIndex = -1;
    }
    removeAllTutorials(){
      this.tutorialService.deleteAll().subscribe({
        next: (data:any) => {
          this.refreshList()
          console.log(data);
        },
        error: (e:any) => console.error(e)
      });
    }
    setActiveTutorial(tutorial: Tutorial, index: number): void {
    this.currentTutorial = tutorial;
    this.currentIndex = index;
    }

  searchTitle() {
    this.tutorialService.findByTitle(this.title)
      .subscribe({
        next: (data:any) => {
          this.tutorials = data;
          console.log(data);
        },
        error: (e:any) => console.error(e)
      });
  }

  getAllTutorialsCount():number{
    return this.tutorials.length;
  }

  getPublishedTutorialsCount():number{
    return this.tutorials.filter(tutorial=> tutorial.published==true).length;
  }

  getPendingTutorialsCount():number{
    return this.tutorials.filter(tutorial=> tutorial.published==false).length;
  }

  changeSelectedTutorials(data:string){
    this.selectedTutorials=data;
    if(this.selectedTutorials== 'published')
    {
      this.ispublished=true;
    }
    else if(this.selectedTutorials=='pending')
    {
      this.ispublished=false;
    }
  }

}
