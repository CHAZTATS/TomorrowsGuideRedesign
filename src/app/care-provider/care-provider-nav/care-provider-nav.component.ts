import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'care-provider-nav',
  templateUrl: './care-provider-nav.component.html',
  styleUrls: ['./care-provider-nav.component.less']
})
export class CareProviderNavComponent implements OnInit {

  title: string = 'services';

  @Output() selectedChanged = new EventEmitter<string>();

  constructor() { }

  ngOnInit() { }

  onTitleClick(title: string){
    this.title = title;
    this.selectedChanged.emit(title);
  }
}
