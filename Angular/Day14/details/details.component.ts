import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';
import { Employee } from '../model/employee';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  empobj:any=<Employee>{};

  constructor(private route:ActivatedRoute,
              private service:HttpService,
              private title:Title) { }

  ngOnInit(): void {
    this.GetdataFromUrl();
    this.title.setTitle("Details");
  }
  GetdataFromUrl(){
        this.route.paramMap
        .subscribe((param:any)=>{
          //  console.log(param.get("id"));
            this.service.getRecordById(param.get("id"))
            .subscribe((response:any)=>{
             // console.log(response);
              this.empobj=response;
              // console.log(this.empObj);
            })
        })
  }

  OnUpdate(){
    
  }

}
