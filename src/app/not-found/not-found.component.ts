import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  constructor(private _location: Location) { }


  ngOnInit() {
    document.body.className = "selector";
  }

  backClicked(){
    this._location.back();
  }



}
