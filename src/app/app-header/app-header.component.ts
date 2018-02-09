import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {
  @Output() selected = new EventEmitter<string>();
  constructor() { }

  onSelect(navigate:string){
    this.selected.emit(navigate);
  }

  ngOnInit() {
  }

}
