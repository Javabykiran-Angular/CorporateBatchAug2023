import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding2',
  templateUrl: './eventbinding2.component.html',
  styleUrls: ['./eventbinding2.component.css']
})
export class Eventbinding2Component implements OnInit {
  result=0;
  res:any=0;
  constructor() { }

  ngOnInit(): void {
  }

  onAddition(num1:any,num2:any){
    
    let n1=+num1;
    let n2=+num2;
    
    // this.result=num1+num2;
    this.result=n1+n2;
  }

  onChange(){
    console.log("Change event Occur...")
  }

  onKeyUp(data:any){
    console.log("Key up Event...");

    if(data.value.length>6){
      alert("Ur char is exceed")
    }


  }

  onKeyDown(){
    console.log("key down event occur...")
  }

}
