import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  strData:string='Send data from Parent...';

  jsonObj={
    id:9,
    fname:'Sumit',
    lname:'Raokhande'
  }

  strdataReceived:string=''
  arrdataReceived:any[]=[];
  constructor() { }

  ngOnInit(): void {
  }

}
