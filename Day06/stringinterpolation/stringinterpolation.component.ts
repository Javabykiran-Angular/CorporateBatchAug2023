import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stringinterpolation',
  templateUrl: './stringinterpolation.component.html',
  styleUrls: ['./stringinterpolation.component.css']
})
export class StringinterpolationComponent implements OnInit {
    name:string='Sumit raokhande';
    
    imgUrl:string='../../assets/bg2.jpg';

    num1:number=4;

  constructor() { }

  ngOnInit(): void {
  }

}
