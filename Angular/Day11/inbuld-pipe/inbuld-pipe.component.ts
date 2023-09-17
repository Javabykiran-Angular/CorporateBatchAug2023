import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbuld-pipe',
  templateUrl: './inbuld-pipe.component.html',
  styleUrls: ['./inbuld-pipe.component.css']
})
export class InbuldPipeComponent implements OnInit {

  strdata:string='U r learn Angular 12 From sumit Raokhande Trainer';
  num2:number=-452.78956324557;
  mydate=new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
