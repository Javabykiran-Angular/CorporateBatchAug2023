import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
 posts:any[]=[];
 isHidden:boolean=true;
 id:number=0;
 title:string='';
 body:string='';
  constructor(private service:HttpService) { }

  ngOnInit(): void {
    this.GetPost()
  }

  GetPost(){
    this.service.getPost()
    .subscribe((resposnse:any)=>{
      console.log(resposnse);
      this.posts=resposnse;
    },(myerror)=>{
      // alert("Error Occured..")

      if(myerror.status>=400 && myerror.status<=499){
        alert("Client Side error... "+myerror.status)
      }else if(myerror.status>=500 && myerror.status<=599){
          alert("Server side error")
      }else{
        alert("Something is Wrong...")
      }
    })
  }
  onSend(mytitle:any,mybody:any){
    let obj={
      title:mytitle,
      body:mybody
    }

      this.service.postData(obj)
      .subscribe((response)=>{
          console.log(response)
      })


  }

  onEdit(item:any){
    console.log(item);
    this.id=item.id;
    this.title=item.title;
    this.body=item.body;
    this.isHidden=false;
  }

  onUpdate(){

      let obj={
        id:this.id,
        title:this.title,
        body:this.body
      }

      this.service.UpdateData(obj)
      .subscribe((response)=>{
        console.log(response)
      })



  }

  onDelete(id:any){
      this.service.DeleteData(id)
      .subscribe((response)=>{
        console.log(response);
      })
  }

}
