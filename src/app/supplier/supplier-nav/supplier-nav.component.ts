import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'supplier-nav',
  templateUrl: './supplier-nav.component.html',
  styleUrls: ['./supplier-nav.component.css']
})
export class SupplierNavComponent implements OnInit {

  title: string = 'services';

  @Output() selectedChanged = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onTitleClick(title: string){
    this.title = title;
    this.selectedChanged.emit(title);
  }
}
