import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    myid:number=9;
    username:string='Sumit-raokhande'
    jsonObj={
      id:9,
      fname:'Sumit',
      lname:'Raokhande'
    }

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  Onpage1(){
    this.router.navigate(['/Page1']);
  }
  Onpage2(){
    this.router.navigate(['/Page2',this.myid]);
  }
  Onpage3(){
    this.router.navigate(['/Page3',this.myid,this.username]);
  }

  OnFollower(){
      this.router.navigate(['/Follower']);
  }

  OnQueryparam(){
      this.router.navigate(['/queryParameter'],{
        queryParams:this.jsonObj
      })
  }

}
