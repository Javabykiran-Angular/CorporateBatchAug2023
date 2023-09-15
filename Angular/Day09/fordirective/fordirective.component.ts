import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fordirective',
  templateUrl: './fordirective.component.html',
  styleUrls: ['./fordirective.component.css']
})
export class FordirectiveComponent implements OnInit {

  courses:string[]=["Core Java",'Adavanced Java','Spring Boot','Hibernate','Angular 12','Docker','AWS','Jenking'];

  arrProd=[
    {
      name:'OnePlus',
      price:45000,
      qty:1
    },
    {
      name:'Samsung',
      price:23000,
      qty:1
    },
    {
      name:'Realme',
      price:18000,
      qty:1
    },
    {
      name:'Motorolla',
      price:30000,
      qty:1
    }


  ];
  selected!:string;

  constructor() { }

  ngOnInit(): void {
  }

  onMouseover(item:any){
    console.log("Mouse over event occur...")
    // console.log(item)
    this.selected=item.name;
  }

  onMouseOut(){
    console.log("-------- Mouse Out Event--------");
    this.selected='';
  }

}
