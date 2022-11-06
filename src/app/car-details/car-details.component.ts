import { Component, OnInit } from '@angular/core';
import { CarSelectService } from '../car-select.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {

  carDetails:any = {};
  constructor(private cars:CarSelectService, private activatedRoute:ActivatedRoute) {


  }


  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe(paramMap=>{
      let medium = paramMap.keys[2];
      let carselect = paramMap.get(medium);

      if (carselect != null){
        this.carDetails = this.cars.selectCar(carselect);
        console.log(this.carDetails);
      }
    });
  }


  ngOnDestroy():void{
  }

}
