import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custompipe',
  templateUrl: './custompipe.component.html',
  styleUrls: ['./custompipe.component.css']
})
export class CustompipeComponent implements OnInit {

  strDetails:string='Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero tempore debitis dolorem sint, non autem corporis saepe, temporibus quam soluta mollitia rem quas eos, minima eaque at delectus repellendus neque!Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero tempore debitis dolorem sint, non autem corporis saepe, temporibus quam soluta mollitia rem quas eos, minima eaque at delectus repellendus neque!'
  constructor() { }

  ngOnInit(): void {
  }

}
