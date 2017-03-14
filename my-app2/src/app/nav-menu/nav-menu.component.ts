import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
  myList = 
  [
    {
      txt: 'yonatan'
    },
    {
      txt: 'yadid'
    },
    {
      txt: 'Ex'
    },
    {
      txt: '2'
    }
  ];


  constructor() { }

  ngOnInit() {
  }

}