import { Component, OnInit } from '@angular/core';
import { CarSelectService } from '../car-select.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {

  carDetails?:any;
  carChosen:string ='';
  placeholder:string="";
  constructor(private cars:CarSelectService, private activatedRoute:ActivatedRoute) {
    
    
  }

  ngOnInit(): void {
    this.carChosen = this.cars.getSelectedCar();
    this.carDetails = this.cars.displayCar(this.carChosen);
    this.activatedRoute.paramMap.subscribe(paramMap=>{
      let medium = paramMap.keys[2];
      let carselect = paramMap.get(medium);
      this.setCarChosen(carselect);
    });
  }

  ngOnChanges():void{
    this.carChosen = this.cars.getSelectedCar();
    this.carDetails = this.cars.displayCar(this.carChosen);
    this.activatedRoute.paramMap.subscribe(paramMap=>{
      let medium = paramMap.keys[2];
      let carselect = paramMap.get(medium);
      this.setCarChosen(carselect);
    });
  }

  ngOnDestroy():void{
    this.carChosen = "";
    this.carDetails="";
  }

  setCarChosen(e:any){
    if (this.carChosen == ""){
      this.carChosen = e;
      this.placeholder =e;
      this.carDetails = this.cars.displayCar(this.carChosen);
    }else if (this.placeholder != this.carChosen && this.carChosen !=''){
      this.placeholder = e;
      this.carChosen = this.placeholder
      this.carDetails = this.cars.displayCar(this.carChosen);
      
    }
  }
}
