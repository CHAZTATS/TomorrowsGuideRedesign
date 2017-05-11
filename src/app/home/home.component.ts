import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'home',
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {

  }

  careProviderClick() {
    this._router.navigateByUrl("care-provider");
  }

}
