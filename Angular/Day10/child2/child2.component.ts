import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

    @Output() childstrEvent=new EventEmitter();
    strdata:string='Hopes so ur enjoying This Angular Module..'

     @Output() childArrEvent=new EventEmitter();

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


  constructor() { }

  ngOnInit(): void {
  }

  onSend(){
      this.childstrEvent.emit(this.strdata);
      this.childArrEvent.emit(this.arrProd)
  }

}
