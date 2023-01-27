import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule,HttpHeaders,HttpHeaderResponse } from '@angular/common/http';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { Observable, Subscriber } from 'rxjs';


export class Ordinateur{
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
  selector: 'app-ordinateur',
  templateUrl: './ordinateur.component.html',
  styleUrls: ['./ordinateur.component.css']
})
export class OrdinateurComponent implements OnInit {

  ordinateurs:Ordinateur[];
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
    this.getOrdinateurs();
  }

  
  getOrdinateurs(){
    this.httpClient.get<any>('http://localhost:8182/JumiaWebCrawling/informatique/ordinateur').subscribe(
      response => {
        console.log(response);
        this.ordinateurs = response;
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

  openDetails(targetModal: any, ordinateur: Ordinateur) {
    this.modalService.open(targetModal, {
     centered: true,
     backdrop: 'static',
     size: 'lg'
   });
    document.getElementById("pname")?.setAttribute('value',ordinateur.name);
    document.getElementById('pnew')?.setAttribute('value',ordinateur.new_price);
    document.getElementById('pold')?.setAttribute('value',ordinateur.old_price);
    document.getElementById('cim')?.setAttribute('value',ordinateur.image);
  
   
 }
}
