import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  @Input() all:number=0;
  @Input() published:number=0;
  @Input() pending:number=0;

  @Output()
  filterRadioButtonSelectionChanged: EventEmitter<string> =new EventEmitter<string>();

  selectedRadioButtonValue:string="all";

  onRadioButtonSelectionChanged(){
    this.filterRadioButtonSelectionChanged.emit(this.selectedRadioButtonValue);
    console.log(this.selectedRadioButtonValue);
  }
}
