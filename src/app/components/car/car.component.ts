import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from 'src/app/models/entity/car';
import { ListResponseModel } from 'src/app/models/response/listResponseModel';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars:Car[] = [];
  isDataLoaded = false;
  constructor() {}

  ngOnInit(): void {

  }

  getCars(){
    
  }


}
