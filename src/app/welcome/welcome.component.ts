import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  tagLines:any;
  constructor() { 
    this.tagLines = [{
      "name": "Explore",
      "description" : "the nature"
    },{
      "name": "Travel",
      "description" : "the world"
    },{
      "name": "Adventure",
      "description" : "through the terrains"
    },{
      "name": "XYZ cars",
      "description" : "your drive to your dreams"
    }]
  }

  ngOnInit(): void {
  }

}
