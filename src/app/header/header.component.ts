import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { CarSelectService } from '../car-select.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  search:any = "";
  cars:any =[];
  navigationButton :Array<any>;
  constructor(private http :HttpClient, private carslist:CarSelectService) { 
    this.navigationButton = [
      {
        "name" : "home",
        "router": "/home"
      },
      {
        "name" :"vehicles",
        "router" : "/cars"
      },
      {
        "name" : "services",
        "router": "/services"
      }];
  }
//
  ngOnInit(): void {
   this.cars = this.carslist.get();
  }
  
  clearSearch(){
    this.search="";
  }
  selectCar(car:any){
    this.carslist.selectCar(car);
  }

  unselectCar(){
    this.carslist.clearSelection();
  }
}
