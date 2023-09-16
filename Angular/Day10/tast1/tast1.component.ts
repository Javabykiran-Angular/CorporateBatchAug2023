import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tast1',
  templateUrl: './tast1.component.html',
  styleUrls: ['./tast1.component.css']
})
export class Tast1Component implements OnInit {

  empData:any[]=[];
  constructor() { }

  ngOnInit(): void {
  }

  onAdd(id:any,name:any,salary:any){

    let obj={
      id:id,
      name:name,
      sal:salary
    }

    this.empData.push(obj);


  }

  onRemove(index:any){

    this.empData.splice(index,1);

  }

}
