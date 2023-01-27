import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';


export class Iphone{
  constructor(
    public _id: number,
    public image: string,
    public name: string,
    public new_price: string,
    public old_price: string
  ) {
  }
}

@Component({
  selector: 'app-iphone',
  templateUrl: './iphone.component.html',
  styleUrls: ['./iphone.component.css']
})
export class IphoneComponent implements OnInit {

  iphones :Iphone[];
  closeResult:string;
  editForm:FormGroup;
  private deleteId:number;
  dtOptions: any = {};
  posts: any;
  image:any
  myimage: Observable<any>;
  constructor(
    private httpClient : HttpClient,
    private modalService: NgbModal,
    private fb:FormBuilder
  ) { }

  ngOnInit(): void {
    this.getIphones();
  }


  getIphones(){
    this.httpClient.get<any>('http://localhost:8182/JumiaWebCrawling/tablette&telephone/Iphone').subscribe(
      response => {
        console.log(response);
        this.iphones = response; 
        setTimeout(()=>{                          
          $('#datatableexample').DataTable( {
            pagingType: 'full_numbers',
            pageLength: 5,
            processing: true,
            lengthMenu : [5, 10, 25],
            order:[[1,"desc"]],
            destroy:true
        } );
        }, 1);
      }
    );
  }

  openDetails(targetModal: any, iphone: Iphone) {
    this.modalService.open(targetModal, {
     centered: true,
     backdrop: 'static',
     size: 'lg'
   });
    document.getElementById("pname")?.setAttribute('value',iphone.name);
    document.getElementById('pnew')?.setAttribute('value',iphone.new_price);
    document.getElementById('pold')?.setAttribute('value',iphone.old_price);
    document.getElementById('cim')?.setAttribute('value',iphone.image);
  
   
 }
}
