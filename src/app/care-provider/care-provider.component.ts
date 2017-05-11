import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'care-provider',
  templateUrl: './care-provider.component.html',
  styleUrls: ['./care-provider.component.less']
})
export class CareProviderComponent implements OnInit {

  title:string = "services";

  constructor() { }

  ngOnInit() { }

  onSelectedChanged(title: string){
    this.title = title;
  }
}
