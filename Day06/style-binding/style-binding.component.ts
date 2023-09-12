import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  templateUrl: './style-binding.component.html',
  styleUrls: ['./style-binding.component.css']
})
export class StyleBindingComponent implements OnInit {

  mycolor:string='green';
  rating:number=21;

  jsonObj={
    color:'blueviolet',
    fontSize:"32px",
    'font-family':'Courier New'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
