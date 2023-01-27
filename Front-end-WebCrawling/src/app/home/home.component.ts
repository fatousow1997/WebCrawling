import { Component, OnInit } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myimage:string="assets/images/on.jpg"

  constructor() { }

  ngOnInit(): void {
  }
 


}


