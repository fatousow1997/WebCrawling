import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule,HttpHeaders,HttpHeaderResponse } from '@angular/common/http';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { Observable, Subscriber } from 'rxjs';


export class Tv {
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
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent implements OnInit {
  tvs :Tv[];
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
    this.getTvs();
  }


  getTvs(){
    this.httpClient.get<any>('http://localhost:8182/JumiaWebCrawling/electronic/tv').subscribe(
      response => {
        console.log(response);
        this.tvs = response;
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

  openDetails(targetModal: any, tv: Tv) {
    this.modalService.open(targetModal, {
     centered: true,
     backdrop: 'static',
     size: 'lg'
   });
    document.getElementById("pname")?.setAttribute('value',tv.name);
    document.getElementById('pnew')?.setAttribute('value',tv.new_price);
    document.getElementById('pold')?.setAttribute('value',tv.old_price);
    document.getElementById('cim')?.setAttribute('value',tv.image);
  
   
 }
}
