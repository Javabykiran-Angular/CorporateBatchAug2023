import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  name:string='Sumit Raokhande';

  imgUrl:string='../../assets/bg2.jpg';
  isHidden:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

}
