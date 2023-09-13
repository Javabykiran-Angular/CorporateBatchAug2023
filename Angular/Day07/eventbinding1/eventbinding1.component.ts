import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding1',
  templateUrl: './eventbinding1.component.html',
  styleUrls: ['./eventbinding1.component.css']
})
export class Eventbinding1Component implements OnInit {

  isclick:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    if(!this.isclick){
      console.log("Click Event Occur...")
      this.isclick=true;
    }
    
  }

  onImg(){
    console.log("on Image Click")
  }

  onSend(myevent:any){
    console.log(myevent);
    console.log("==>>"+ myevent.target.value)
  }

  onSend1(myname:any){
    console.log(myname)
    console.log(myname.value)
    myname.style.background='green';
    myname.style.color='white';
    myname.value='';
  }

  onSend2(myvalue:string){
    console.log(myvalue)
  }


}
