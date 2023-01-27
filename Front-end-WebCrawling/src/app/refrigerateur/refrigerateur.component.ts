import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';

export class Refrigerateur {
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
  selector: 'app-refrigerateur',
  templateUrl: './refrigerateur.component.html',
  styleUrls: ['./refrigerateur.component.css']
})
export class RefrigerateurComponent implements OnInit {
  refrigerateurs :Refrigerateur[];
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
    this.getRefrigerateurs();
  }


  getRefrigerateurs(){
    this.httpClient.get<any>('http://localhost:8182/JumiaWebCrawling/electromenager/refrigerateur').subscribe(
      response => {
        console.log(response);
        this.refrigerateurs = response;
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

  openDetails(targetModal: any, refrigerateur: Refrigerateur) {
    this.modalService.open(targetModal, {
     centered: true,
     backdrop: 'static',
     size: 'lg'
   });
    document.getElementById("pname")?.setAttribute('value',refrigerateur.name);
    document.getElementById('pnew')?.setAttribute('value',refrigerateur.new_price);
    document.getElementById('pold')?.setAttribute('value',refrigerateur.old_price);
    document.getElementById('cim')?.setAttribute('value',refrigerateur.image);
  
   
 }
}
