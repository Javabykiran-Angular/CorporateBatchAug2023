import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  @Input() ParentStrdata:string='';

  @Input() ParentJsondata:any={};

  constructor() { }

  ngOnInit(): void {
  }

}
