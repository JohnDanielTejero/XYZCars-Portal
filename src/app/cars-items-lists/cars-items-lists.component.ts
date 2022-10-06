import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CarSelectService } from '../car-select.service';
@Component({
  selector: 'app-cars-items-lists',
  templateUrl: './cars-items-lists.component.html',
  styleUrls: ['./cars-items-lists.component.css']
})
export class CarsItemsListsComponent implements OnInit {
  cars:any =[];
  search:any;
  constructor(private http: HttpClient, private carservice:CarSelectService) { 
    this.search ="";
  }

  ngOnInit(): void {
   this.cars = this.carservice.get();
  }

  selectCar(car:any){
    this.carservice.selectCar(car);
  }
}
