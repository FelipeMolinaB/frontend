import { Component, OnInit } from '@angular/core';
// import * as $ from 'jquery';
import {Sidenav,Collapsible,Dropdown,FloatingActionButton} from 'node_modules/materialize-css'
// import {* as $} from 'materialize-css';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {console.log("refreshing Home JS")
  $(document).ready(function(){
      (<any>$('.sidenav')).sidenav();
      (<any>$('.collapsible')).collapsible();
      (<any>$(".dropdown-trigger")).dropdown();
      (<any>$('.fixed-action-btn')).floatingActionButton();
  }) }

  ngOnInit() {

  }

}
