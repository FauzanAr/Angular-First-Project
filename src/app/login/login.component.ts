import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material'
import { AlertPromise } from 'selenium-webdriver';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  username: string;
  password: string;

  ngOnInit() {
  }

  login(): void{
    if (this.username == 'admin' && this.password=='admin'){
      alert("Sukses login");
    }else{
      alert("Maaf data ini tidak ada");
    }
  }
}
