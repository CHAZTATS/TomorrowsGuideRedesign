import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {

  title:string = "services";

  constructor() { }

  ngOnInit() { }

  onSelectedChanged(title: string){
    this.title = title;
  }
}
