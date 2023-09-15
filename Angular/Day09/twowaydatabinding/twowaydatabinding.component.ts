import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twowaydatabinding',
  templateUrl: './twowaydatabinding.component.html',
  styleUrls: ['./twowaydatabinding.component.css']
})
export class TwowaydatabindingComponent implements OnInit {
  name:string='';
  constructor() { }

  ngOnInit(): void {
  }

  onChange(){
    console.log("Data "+this.name)
  }

}
